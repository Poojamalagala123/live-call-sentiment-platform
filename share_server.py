"""Share the frontend and fixed local API routes through one ngrok endpoint.
Run: venv\Scripts\python.exe share_server.py
Then: ngrok http 3001
"""
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from http.client import HTTPConnection
from pathlib import Path
from urllib.parse import urlsplit
import mimetypes

FRONTEND = Path(__file__).resolve().parent / "frontend"
ASSETS = {"/": "index.html", "/index.html": "index.html",
          "/app.js": "app.js", "/styles.css": "styles.css",
          "/test-calls.js": "test-calls.js",
          "/transcript-example.json": "transcript-example.json"}
HEALTH = {"/health": 8010, "/services/phrase/health": 8002,
          "/services/sentiment/health": 8003, "/services/score/health": 8004}

class Handler(BaseHTTPRequestHandler):
    def reply(self, status, body, content_type):
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)

    def handle_request(self):
        path = urlsplit(self.path).path
        if self.command in ("GET", "HEAD") and path in ASSETS:
            asset = FRONTEND / ASSETS[path]
            self.reply(200, asset.read_bytes(),
                       (mimetypes.guess_type(asset.name)[0] or "application/octet-stream") + "; charset=utf-8")
            return
        allowed = (
            self.command == "GET" and (path in HEALTH or path == "/api/v1/admin-keywords")
            or self.command == "POST" and path in ("/api/v1/process-text", "/api/v1/add-keyword")
            or self.command == "DELETE" and path.startswith("/api/v1/delete-keyword/")
        )
        if not allowed:
            self.reply(404, b'{"detail":"Not found"}', "application/json")
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            self.reply(400, b'{"detail":"Invalid content length"}', "application/json")
            return
        if length < 0 or length > 6 * 1024 * 1024:
            self.reply(413, b'{"detail":"Request too large"}', "application/json")
            return
        conn = HTTPConnection("127.0.0.1", HEALTH.get(path, 8010), timeout=120)
        try:
            body = self.rfile.read(length) if length else None
            conn.request(self.command, "/health" if path in HEALTH else self.path,
                         body=body, headers={"Content-Type": "application/json"})
            response = conn.getresponse()
            self.reply(response.status, response.read(),
                       response.getheader("Content-Type", "application/json"))
        except (OSError, TimeoutError):
            self.reply(502, b'{"detail":"Local analysis service unavailable"}', "application/json")
        finally:
            conn.close()

    do_GET = handle_request
    do_HEAD = handle_request
    do_POST = handle_request
    do_DELETE = handle_request

if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", 3001), Handler)
    print("Call Intelligence sharing server: http://127.0.0.1:3001", flush=True)
    server.serve_forever()