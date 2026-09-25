// Imported from customer_sentiment_30_calls.md. Expected emotions are reference labels, never model inputs.
const testScripts = [
    {
        "id":  "script-1",
        "title":  "Late birthday gift",
        "duration":  "10 min roleplay",
        "targetArc":  "worried → frustrated → relieved",
        "outcome":  "We will send the gift note while the depot request is checked, then update you by text.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "My daughter’s gift still says “out for delivery,” and her party is tonight.",
                          "expectedEmotion":  "worried",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "It was due yesterday, and the tracking page has not moved since morning.",
                          "expectedEmotion":  "worried",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "worried",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "worried",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "worried",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I already told her it was arriving. I do not have a backup gift.",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The courier scan is delayed; the package is at the local depot, but delivery tonight cannot be guaranteed.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have already spent time on this. Please give me a step I can actually take.",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We can request a depot pickup if available, or send an electronic gift note now and follow up on delivery tomorrow.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please send the note. I would rather give her something tonight than keep refreshing a page.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will send the gift note while the depot request is checked, then update you by text.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "relieved",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "relieved",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I am relieved there is a plan. I will watch for your message.",
                          "expectedEmotion":  "relieved",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "relieved",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-2",
        "title":  "Duplicate charge",
        "duration":  "10 min roleplay",
        "targetArc":  "angry → skeptical → cautiously_relieved",
        "outcome":  "We will send the transaction record and a case number; no second completed charge appears.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Why did you charge me twice for one order?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "My bank shows two identical amounts five minutes apart.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I had to move money from savings because of this.",
                          "expectedEmotion":  "skeptical",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "skeptical",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "skeptical",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "skeptical",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "One entry is a temporary authorization; the other is the completed payment. The release timing depends on the bank.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have heard explanations before. What can you show me in writing?",
                          "expectedEmotion":  "skeptical",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can email the transaction details and ask payments to review the pending entry if it remains after the normal authorization window.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "skeptical",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I still dislike seeing both, but the email will help me talk to the bank.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will send the transaction record and a case number; no second completed charge appears.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "cautiously_relieved",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "cautiously_relieved",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I feel a little better, but I will check the written record.",
                          "expectedEmotion":  "cautiously_relieved",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "cautiously_relieved",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-3",
        "title":  "Locked account before a trip",
        "duration":  "10 min roleplay",
        "targetArc":  "anxious → panicked → hopeful",
        "outcome":  "We will submit the form together and give a clear callback window, without promising instant access.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "My account is locked, and I need the travel documents I saved there.",
                          "expectedEmotion":  "anxious",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I changed phones yesterday and cannot receive the old verification code.",
                          "expectedEmotion":  "anxious",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "anxious",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "anxious",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "anxious",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I leave for the airport in two hours.",
                          "expectedEmotion":  "panicked",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "panicked",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "panicked",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "panicked",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The account recovery process requires a secure identity check; the agent cannot bypass it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I am trying to stay calm, but I need the next step right away.",
                          "expectedEmotion":  "panicked",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can guide you through the recovery form and mark the travel deadline for the specialist queue.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "panicked",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right. I have my ID here. Tell me the fastest legitimate step.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will submit the form together and give a clear callback window, without promising instant access.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I hope this works. I will follow the steps you send.",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-4",
        "title":  "Wrong size delivered",
        "duration":  "10 min roleplay",
        "targetArc":  "disappointed → irritated → satisfied",
        "outcome":  "We will confirm the expedited date before placing the replacement.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "These shoes are size seven. I ordered size nine.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "The box label says nine, but the shoes inside say seven.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I needed them for a race this weekend.",
                          "expectedEmotion":  "irritated",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "irritated",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "irritated",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "irritated",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "A replacement in size nine is in stock, but standard delivery would be too slow.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I wish this had been caught earlier. What can you do while I am on the line?",
                          "expectedEmotion":  "irritated",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can check expedited replacement options and provide a prepaid return label for the wrong pair.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "irritated",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "If the replacement can arrive Friday, that works.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will confirm the expedited date before placing the replacement.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "satisfied",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "satisfied",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes, that addresses what I called about. Thank you.",
                          "expectedEmotion":  "satisfied",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "satisfied",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-5",
        "title":  "Subscription cancellation confusion",
        "duration":  "10 min roleplay",
        "targetArc":  "uneasy → angry → resigned",
        "outcome":  "We will email the cancellation confirmation and the billing review reference.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I canceled last month, so why did the membership renew?",
                          "expectedEmotion":  "uneasy",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have a screenshot saying “cancellation requested.”",
                          "expectedEmotion":  "uneasy",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "uneasy",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "uneasy",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "uneasy",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I planned my budget around not paying again.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The screenshot shows a request started, but the final confirmation did not complete; the terms need review before any refund decision.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "That does not undo the trouble this caused. What are you doing about it?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can stop the next renewal now and submit the screenshot for a billing review of this charge.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please cancel it today and send me written proof.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will email the cancellation confirmation and the billing review reference.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "resigned",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "resigned",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I understand the review is still open. I will wait for the written update.",
                          "expectedEmotion":  "resigned",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "resigned",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-6",
        "title":  "Damaged blender",
        "duration":  "10 min roleplay",
        "targetArc":  "annoyed → disappointed → hopeful",
        "outcome":  "We will confirm compatibility and shipment details in the email.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "The blender arrived with a cracked jar.",
                          "expectedEmotion":  "annoyed",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I noticed it when I opened the box, before I plugged anything in.",
                          "expectedEmotion":  "annoyed",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "annoyed",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "annoyed",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "annoyed",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I had people coming over for dinner, and it is unusable.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The packaging photos show damage consistent with transit, and the model is available for replacement.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "That is hard to hear. Is there another workable option?",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can arrange a replacement jar or exchange the full unit, based on which arrives sooner.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "The jar is fine if it gets here quickly and is the right model.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will confirm compatibility and shipment details in the email.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I hope this works. I will follow the steps you send.",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-7",
        "title":  "Missing loyalty points",
        "duration":  "10 min roleplay",
        "targetArc":  "confused → suspicious → reassured",
        "outcome":  "We will provide the before and after balances and the reservation reference.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "My points disappeared after I placed an order.",
                          "expectedEmotion":  "confused",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I had enough points for a discount yesterday; now the balance looks almost empty.",
                          "expectedEmotion":  "confused",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "confused",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "confused",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "confused",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "It makes me wonder whether the rewards system is reliable.",
                          "expectedEmotion":  "suspicious",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "suspicious",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "suspicious",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "suspicious",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The points were reserved for a checkout that was never completed; the reservation should clear, but it is still showing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I need the record, not just an assurance that everything is fine.",
                          "expectedEmotion":  "suspicious",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can release the reservation through support and send the balance history for you to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "suspicious",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "That makes sense if you can show the numbers.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will provide the before and after balances and the reservation reference.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "reassured",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "reassured",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Seeing the entries will help. Thank you for explaining them.",
                          "expectedEmotion":  "reassured",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "reassured",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-8",
        "title":  "Delayed refund",
        "duration":  "10 min roleplay",
        "targetArc":  "impatient → angry → cautious",
        "outcome":  "We will contact you on the agreed date with status and the next step.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "You received my return two weeks ago. Where is my money?",
                          "expectedEmotion":  "impatient",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "The carrier proof says delivered, but my account still says “return in transit.”",
                          "expectedEmotion":  "impatient",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "impatient",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "impatient",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "impatient",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have already contacted support twice.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The return was received but not linked to the original order; finance must reconcile it before a refund can be issued.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "That does not undo the trouble this caused. What are you doing about it?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will attach the delivery proof, escalate the mismatch, and give you a specific update date.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I want the update even if it has not been fixed by then.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will contact you on the agreed date with status and the next step.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "cautious",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "cautious",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I will judge it by the update. Please send it when you said you would.",
                          "expectedEmotion":  "cautious",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "cautious",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-9",
        "title":  "Address change after shipment",
        "duration":  "10 min roleplay",
        "targetArc":  "stressed → frustrated → accepting",
        "outcome":  "We will send the redirection request number and monitor the next carrier scan.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "My parcel is going to my old apartment. Can you fix the address?",
                          "expectedEmotion":  "stressed",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I updated the profile, but I placed the order before that.",
                          "expectedEmotion":  "stressed",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "stressed",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "stressed",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "stressed",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I no longer know anyone who lives there.",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The label has been created and may be eligible for carrier redirection; success is not guaranteed.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have already spent time on this. Please give me a step I can actually take.",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can request redirection and, if it fails, open a recovery case with the carrier.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Go ahead. I understand it might be too late.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will send the redirection request number and monitor the next carrier scan.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "accepting",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "accepting",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I understand the uncertainty. Please keep me informed.",
                          "expectedEmotion":  "accepting",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "accepting",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-10",
        "title":  "Promo code expired",
        "duration":  "10 min roleplay",
        "targetArc":  "hopeful → disappointed → appreciative",
        "outcome":  "We will quote the available price before you decide whether to buy.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "My coupon stopped working at midnight while I was checking out.",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I added everything to the cart before the deadline.",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "The discount is the reason I chose these items.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The offer ended at midnight and the order was not submitted before then.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "That is hard to hear. Is there another workable option?",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can check whether another current promotion applies, and record feedback about the checkout timing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please check. I do not want a promise of the old discount if it is not possible.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will quote the available price before you decide whether to buy.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "appreciative",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "appreciative",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thanks for checking the available choices instead of guessing.",
                          "expectedEmotion":  "appreciative",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "appreciative",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-11",
        "title":  "Order marked delivered but missing",
        "duration":  "10 min roleplay",
        "targetArc":  "alarmed → angry → cautiously_hopeful",
        "outcome":  "We will send the photo and reference, plus the next update time.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "The app says delivered, but there is nothing at my door.",
                          "expectedEmotion":  "alarmed",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "The photo shows a blue door. Mine is red.",
                          "expectedEmotion":  "alarmed",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "alarmed",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "alarmed",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "alarmed",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "That package has work equipment I need tomorrow.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The photo suggests a delivery to a different entrance; the carrier trace has to be opened.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "That does not undo the trouble this caused. What are you doing about it?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can file the trace, check any nearby building match, and start the lost delivery review.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please tell me what I can do tonight while you investigate.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will send the photo and reference, plus the next update time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "cautiously_hopeful",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "cautiously_hopeful",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I hope the trace turns something up. I will watch for the update.",
                          "expectedEmotion":  "cautiously_hopeful",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "cautiously_hopeful",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-12",
        "title":  "Unexpected service outage",
        "duration":  "10 min roleplay",
        "targetArc":  "frustrated → worried → calmer",
        "outcome":  "We will send the supported workaround and avoid guessing when service will return.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "The app will not open and I have a deadline.",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have restarted my phone and reinstalled the app.",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "My team is waiting for the file inside it.",
                          "expectedEmotion":  "worried",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "worried",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "worried",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "worried",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "There is a confirmed service issue; reinstalling will not resolve the outage.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I need a concrete next step, even if you cannot promise the result.",
                          "expectedEmotion":  "worried",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can share the status page, a safe alternate export route if available, and the next update window.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "worried",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "The export route would help, even if the app stays down.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will send the supported workaround and avoid guessing when service will return.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "calmer",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "calmer",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "At least I can try the workaround while the issue is being fixed.",
                          "expectedEmotion":  "calmer",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "calmer",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-13",
        "title":  "Warranty question",
        "duration":  "10 min roleplay",
        "targetArc":  "curious → uncertain → confident",
        "outcome":  "We will note the results and submit a claim if the issue remains.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "My headphones stopped charging. Are they under warranty?",
                          "expectedEmotion":  "curious",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I bought them about eleven months ago, but I cannot find the receipt.",
                          "expectedEmotion":  "curious",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "curious",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "curious",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "curious",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I am worried I will have to buy another pair.",
                          "expectedEmotion":  "uncertain",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "uncertain",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "uncertain",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "uncertain",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The order history may serve as proof of purchase; coverage still depends on the claim review.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I understand the condition. How do we check whether it applies?",
                          "expectedEmotion":  "uncertain",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can find the purchase record and walk you through a warranty claim and basic checks.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "uncertain",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I can try the checks while we are on the phone.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will note the results and submit a claim if the issue remains.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "confident",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "confident",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I know what to try now. If it fails, I will use the claim reference.",
                          "expectedEmotion":  "confident",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "confident",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-14",
        "title":  "Accessibility problem",
        "duration":  "10 min roleplay",
        "targetArc":  "discouraged → frustrated → heard",
        "outcome":  "We will help place the order through the supported route and track the bug separately.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "The checkout button does not work with my screen reader.",
                          "expectedEmotion":  "discouraged",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I can reach the payment section but cannot activate the final button.",
                          "expectedEmotion":  "discouraged",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "discouraged",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "discouraged",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "discouraged",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have had to ask someone else to place orders for me before.",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The issue appears on the current checkout flow and needs an accessibility bug report.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have already spent time on this. Please give me a step I can actually take.",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can offer an accessible assisted ordering route and capture the exact screen reader and browser steps for engineering.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I want to finish the order, but I also want the site fixed.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will help place the order through the supported route and track the bug separately.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "heard",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "heard",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you for taking the accessibility problem seriously.",
                          "expectedEmotion":  "heard",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "heard",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-15",
        "title":  "Gift card balance mismatch",
        "duration":  "10 min roleplay",
        "targetArc":  "confused → suspicious → reassured",
        "outcome":  "We will email the ledger and confirm the usable balance after release.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "The gift card says fifty dollars, but checkout says twenty.",
                          "expectedEmotion":  "confused",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have not used it since my sister gave it to me.",
                          "expectedEmotion":  "confused",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "confused",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "confused",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "confused",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "It feels like money has gone missing.",
                          "expectedEmotion":  "suspicious",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "suspicious",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "suspicious",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "suspicious",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "A thirty dollar pending cart hold is still attached to an abandoned session.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I need the record, not just an assurance that everything is fine.",
                          "expectedEmotion":  "suspicious",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can check the transaction ledger and release the hold if there is no completed order.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "suspicious",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please read the entries back so I understand.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will email the ledger and confirm the usable balance after release.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "reassured",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "reassured",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Seeing the entries will help. Thank you for explaining them.",
                          "expectedEmotion":  "reassured",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "reassured",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-16",
        "title":  "Repeat delivery failures",
        "duration":  "10 min roleplay",
        "targetArc":  "exhausted → angry → cautious",
        "outcome":  "We will confirm the pickup details before changing the delivery plan.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "This is the third time delivery has failed.",
                          "expectedEmotion":  "exhausted",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Every notification says no one was home, but I work from home.",
                          "expectedEmotion":  "exhausted",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "exhausted",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "exhausted",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "exhausted",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I cannot keep taking time out of my day to chase the parcel.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The driver notes lack a door photo, and the delivery instructions may not have transferred.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "That does not undo the trouble this caused. What are you doing about it?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can add verified instructions, request a carrier supervisor review, and check a pickup option.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Pickup might be easier, but I need the location and opening hours first.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will confirm the pickup details before changing the delivery plan.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "cautious",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "cautious",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I will judge it by the update. Please send it when you said you would.",
                          "expectedEmotion":  "cautious",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "cautious",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-17",
        "title":  "Price drop after purchase",
        "duration":  "10 min roleplay",
        "targetArc":  "disappointed → resentful → content",
        "outcome":  "We will email the applicable option and any deadline before you decide.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I bought the monitor yesterday and today it costs less.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "It is still in the box, unopened.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I feel silly paying more because I ordered one day early.",
                          "expectedEmotion":  "resentful",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "resentful",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "resentful",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "resentful",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The current price is lower; eligibility for a price adjustment depends on the purchase terms.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "So what choices do I have at the price I already paid?",
                          "expectedEmotion":  "resentful",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can check the adjustment window and explain the return option if it does not apply.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "resentful",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "That sounds fair. I mainly want to know my actual choices.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will email the applicable option and any deadline before you decide.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "content",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "content",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I can decide once I see the terms and deadline in the email.",
                          "expectedEmotion":  "content",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "content",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-18",
        "title":  "Partial order received",
        "duration":  "10 min roleplay",
        "targetArc":  "confused → worried → relieved",
        "outcome":  "We will confirm the estimated arrival and send both tracking links.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "My order arrived without the desk lamp.",
                          "expectedEmotion":  "confused",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "The invoice lists the lamp, and the outer carton was sealed.",
                          "expectedEmotion":  "confused",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "confused",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "confused",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "confused",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I thought somebody had forgotten it.",
                          "expectedEmotion":  "worried",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "worried",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "worried",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "worried",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The lamp was shipped separately and its tracking email failed to send.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I need a concrete next step, even if you cannot promise the result.",
                          "expectedEmotion":  "worried",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can provide the second tracking number and resend the shipment notice.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "worried",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Oh, I did not realize there were two boxes.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will confirm the estimated arrival and send both tracking links.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "relieved",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "relieved",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I am relieved there is a plan. I will watch for your message.",
                          "expectedEmotion":  "relieved",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "relieved",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-19",
        "title":  "Difficult cancellation after illness",
        "duration":  "10 min roleplay",
        "targetArc":  "tired → vulnerable → relieved",
        "outcome":  "We will confirm the stop to future billing and update you on the current charge.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I need to pause my membership. I have been in the hospital.",
                          "expectedEmotion":  "tired",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I missed the normal cancellation window while I was recovering.",
                          "expectedEmotion":  "tired",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "tired",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "tired",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "tired",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I do not have the energy to explain this again to another person.",
                          "expectedEmotion":  "vulnerable",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "vulnerable",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "vulnerable",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "vulnerable",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The agent can submit a hardship review and stop future renewal; the current charge needs separate review.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please keep this simple. I do not have much energy today.",
                          "expectedEmotion":  "vulnerable",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can document your request once, with your permission, and give you one case reference.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "vulnerable",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes, please keep the details brief.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will confirm the stop to future billing and update you on the current charge.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "relieved",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "relieved",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I am relieved there is a plan. I will watch for your message.",
                          "expectedEmotion":  "relieved",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "relieved",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-20",
        "title":  "Invoice needed for work",
        "duration":  "10 min roleplay",
        "targetArc":  "hurried → irritated → satisfied",
        "outcome":  "We will state exactly which fields can be changed and the expected review time.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I need an invoice with my company details today.",
                          "expectedEmotion":  "hurried",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "The receipt shows my personal name and finance will reject it.",
                          "expectedEmotion":  "hurried",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "hurried",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "hurried",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "hurried",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "My expense report closes at five.",
                          "expectedEmotion":  "irritated",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "irritated",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "irritated",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "irritated",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The original tax invoice may have limited editable fields; the billing team can review allowable corrections.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I wish this had been caught earlier. What can you do while I am on the line?",
                          "expectedEmotion":  "irritated",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can send the existing invoice now and request a corrected document with the company details.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "irritated",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Send both if the corrected one is ready later.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will state exactly which fields can be changed and the expected review time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "satisfied",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "satisfied",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes, that addresses what I called about. Thank you.",
                          "expectedEmotion":  "satisfied",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "satisfied",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-21",
        "title":  "Account email changed without permission",
        "duration":  "10 min roleplay",
        "targetArc":  "fearful → angry → guarded",
        "outcome":  "We will lock down access first and send only verified recovery instructions.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I got an alert that my account email changed, but I did not do it.",
                          "expectedEmotion":  "fearful",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I can still see a session open on my laptop.",
                          "expectedEmotion":  "fearful",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "fearful",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "fearful",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "fearful",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I am scared somebody has my saved payment information.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The account must be secured through the verified recovery channel; the agent should not read sensitive details aloud.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "That does not undo the trouble this caused. What are you doing about it?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can help revoke sessions, start account recovery, and route the payment concern to the security team.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Tell me which step I should do first.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will lock down access first and send only verified recovery instructions.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "guarded",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "guarded",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I will follow the recovery instructions and monitor the account.",
                          "expectedEmotion":  "guarded",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "guarded",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-22",
        "title":  "Product assembly confusion",
        "duration":  "10 min roleplay",
        "targetArc":  "embarrassed → frustrated → proud",
        "outcome":  "We will check the bolt number and finish the next assembly step together.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I cannot get this chair to fit together.",
                          "expectedEmotion":  "embarrassed",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "The diagram shows a bolt I cannot find in the package.",
                          "expectedEmotion":  "embarrassed",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "embarrassed",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "embarrassed",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "embarrassed",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have been working on it for an hour and I feel ridiculous.",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The bolt may be packed in a small inner sleeve; if it is absent, spare hardware is available.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have already spent time on this. Please give me a step I can actually take.",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can locate the sleeve with you and, if needed, order the hardware kit.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "frustrated",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Wait, I see a sleeve under the seat cushion.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will check the bolt number and finish the next assembly step together.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "proud",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "proud",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I found it! I think I can finish the chair now.",
                          "expectedEmotion":  "proud",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "proud",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-23",
        "title":  "Store credit instead of refund",
        "duration":  "10 min roleplay",
        "targetArc":  "upset → angry → cautiously_satisfied",
        "outcome":  "We will send the record and update you even if the review is still open.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I asked for a refund, but you gave me store credit.",
                          "expectedEmotion":  "upset",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "My return confirmation never mentioned credit.",
                          "expectedEmotion":  "upset",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "upset",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "upset",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "upset",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I need the money for another bill this week.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The return was coded as credit; the original payment method and return terms require review.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "That does not undo the trouble this caused. What are you doing about it?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can open a correction request and give you the exact timeline for the review, without promising the result.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please do that, and send me the case number.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will send the record and update you even if the review is still open.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "cautiously_satisfied",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "cautiously_satisfied",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "No, you answered the main question. I will watch for the follow-up.",
                          "expectedEmotion":  "cautiously_satisfied",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "cautiously_satisfied",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-24",
        "title":  "Backordered item",
        "duration":  "10 min roleplay",
        "targetArc":  "hopeful → disappointed → accepting",
        "outcome":  "We will send both the alternative and the backorder status in writing.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "The bookshelf still says “processing.” Is it coming this week?",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I ordered it for a move and took Friday off to receive it.",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I wish someone had told me earlier if stock changed.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The item is backordered and no firm dispatch date is available today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "That is hard to hear. Is there another workable option?",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can notify you when stock is allocated, show an available alternative, or cancel if the timing no longer works.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Show me the alternative, but I will decide after I see the dimensions.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will send both the alternative and the backorder status in writing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "accepting",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "accepting",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I understand the uncertainty. Please keep me informed.",
                          "expectedEmotion":  "accepting",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "accepting",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-25",
        "title":  "App notification overload",
        "duration":  "10 min roleplay",
        "targetArc":  "annoyed → skeptical → pleased",
        "outcome":  "We will send the path to both settings and check the account preference.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I keep getting promotional alerts after turning them off.",
                          "expectedEmotion":  "annoyed",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Order updates are fine; it is the sale messages I do not want.",
                          "expectedEmotion":  "annoyed",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "annoyed",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "annoyed",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "annoyed",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "It makes me want to delete the app entirely.",
                          "expectedEmotion":  "skeptical",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "skeptical",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "skeptical",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "skeptical",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The phone setting and account marketing preference are separate controls.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have heard explanations before. What can you show me in writing?",
                          "expectedEmotion":  "skeptical",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can help turn off marketing messages while keeping delivery alerts, then verify the setting saved.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "skeptical",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "That is what I was trying to do.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will send the path to both settings and check the account preference.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "pleased",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "pleased",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Good. I want delivery alerts, just no sale messages.",
                          "expectedEmotion":  "pleased",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "pleased",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-26",
        "title":  "First order excitement",
        "duration":  "10 min roleplay",
        "targetArc":  "excited → uncertain → delighted",
        "outcome":  "We will confirm the address and send the guest tracking link.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "This is my first order. Can I track it before it ships?",
                          "expectedEmotion":  "excited",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I used the guest checkout and did not create an account.",
                          "expectedEmotion":  "excited",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "excited",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "excited",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "excited",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I want to make sure the gift reaches my nephew.",
                          "expectedEmotion":  "uncertain",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "uncertain",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "uncertain",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "uncertain",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Guest orders use the email confirmation and an order reference for tracking.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I understand the condition. How do we check whether it applies?",
                          "expectedEmotion":  "uncertain",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can resend the confirmation and explain when the first tracking scan usually appears.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "uncertain",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Great, I was worried I had typed the wrong email.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will confirm the address and send the guest tracking link.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "delighted",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "delighted",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "That is perfect. I am excited for him to get the gift.",
                          "expectedEmotion":  "delighted",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "delighted",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-27",
        "title":  "Refund request outside window",
        "duration":  "10 min roleplay",
        "targetArc":  "apologetic → disappointed → respectful",
        "outcome":  "We will provide a review date and a clear decision in writing.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I am past the return date. Is there any way to send this back?",
                          "expectedEmotion":  "apologetic",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I was caring for a family member and forgot about the unopened item.",
                          "expectedEmotion":  "apologetic",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "apologetic",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "apologetic",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "apologetic",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I know the policy may say no, but I wanted to ask.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The item is outside the usual return window; an exception review may be available but cannot be guaranteed.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "That is hard to hear. Is there another workable option?",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can submit the circumstances for review and explain any alternate resale or warranty route that applies.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "disappointed",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I appreciate you checking, even if the answer takes a few days.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will provide a review date and a clear decision in writing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "respectful",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "respectful",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I know it is an exception request. Thank you for submitting it.",
                          "expectedEmotion":  "respectful",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "respectful",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-28",
        "title":  "Incorrect personalization",
        "duration":  "10 min roleplay",
        "targetArc":  "heartbroken → angry → hopeful",
        "outcome":  "We will confirm the spelling in writing and send the proof before production.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "The engraved name is spelled wrong on the memorial frame.",
                          "expectedEmotion":  "heartbroken",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "My order confirmation shows the correct spelling.",
                          "expectedEmotion":  "heartbroken",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "heartbroken",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "heartbroken",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "heartbroken",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "This was meant to honor my father, and opening it was awful.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The confirmation supports a production error; a corrected item requires a remake.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "That does not undo the trouble this caused. What are you doing about it?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can prioritize the remake request and ask whether a preview proof can be sent before production.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "angry",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I want to see the proof first. I cannot go through this twice.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will confirm the spelling in writing and send the proof before production.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I hope this works. I will follow the steps you send.",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "hopeful",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-29",
        "title":  "Unexpected international fee",
        "duration":  "10 min roleplay",
        "targetArc":  "surprised → skeptical → informed",
        "outcome":  "We will send the itemized record without claiming what your bank will do.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Why is there a foreign transaction fee on this purchase?",
                          "expectedEmotion":  "surprised",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "The website price was in my currency.",
                          "expectedEmotion":  "surprised",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "surprised",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "surprised",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "surprised",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I feel like the final cost was hidden.",
                          "expectedEmotion":  "skeptical",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "skeptical",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "skeptical",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "skeptical",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The fee appears on the bank statement rather than the Cedar receipt, but the checkout display still needs review.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have heard explanations before. What can you show me in writing?",
                          "expectedEmotion":  "skeptical",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can email the receipt and payment processor details, and send feedback about the currency display.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "skeptical",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I will ask my bank about the fee once I have those details.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will send the itemized record without claiming what your bank will do.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "informed",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "informed",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I understand which charge is from the bank now. Send the receipt, please.",
                          "expectedEmotion":  "informed",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "informed",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    },
    {
        "id":  "script-30",
        "title":  "Chronic unresolved issue",
        "duration":  "10 min roleplay",
        "targetArc":  "weary → furious → guardedly_hopeful",
        "outcome":  "We will send the owner, reference, and update date before ending the call.",
        "turns":  [
                      {
                          "speaker":  "agent",
                          "text":  "Thank you for calling Cedar support. My name is Alex. How can I help today?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have called four times about the same broken replacement.",
                          "expectedEmotion":  "weary",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I hear the urgency in that. Tell me what happened, and we will take it one step at a time.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "00:00–00:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Each time someone says a team will call back, and nobody does.",
                          "expectedEmotion":  "weary",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Thank you. I am bringing up the order now. Please give me a moment to match the details to what you described.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have the confirmation open if you need a reference number.",
                          "expectedEmotion":  "weary",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Yes, the reference is enough for this practice call. Please do not read any password or payment number.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "01:00–01:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I have the right record. I will check the relevant activity and explain what I can confirm.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I am listening.",
                          "expectedEmotion":  "weary",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before changing anything, I want to make sure we agree on the main problem. I will repeat it back in plain language.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Yes. I mainly need a useful next step, not another generic message.",
                          "expectedEmotion":  "weary",
                          "timeWindow":  "02:00–02:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I do not trust another promise.",
                          "expectedEmotion":  "furious",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am sorry this has affected your plans. I can see why an ordinary status message would not be enough.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Exactly. Can you tell me what is actually happening?",
                          "expectedEmotion":  "furious",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will tell you what the record supports and where I still need to check.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "03:00–03:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am checking the latest notes now. You may hear a brief pause while I open the activity history.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "All right, but please stay on the line.",
                          "expectedEmotion":  "furious",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I am here. Thank you for waiting. I found a detail that explains part of what you are seeing.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please go on.",
                          "expectedEmotion":  "furious",
                          "timeWindow":  "04:00–04:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "The case history shows missed follow-ups and an open quality review.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I have heard that before. Tell me who owns the case and when they will call.",
                          "expectedEmotion":  "furious",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "It means I should be careful about promising an outcome before the next check is complete. I can still take a concrete step today.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "05:00–05:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I can summarize the history, assign one owner, and give a scheduled update that occurs even without a final fix.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "How long will that take, and how will I know you followed through?",
                          "expectedEmotion":  "furious",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "I will give you a case reference and a written summary. If there is a review involved, I will identify the next update time rather than invent an immediate answer.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "06:00–06:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I will believe it when I get the update.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That makes sense. I am recording that choice now and checking the details before I submit it.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Please make sure the notes reflect what I told you, especially the part that caused the problem.",
                          "expectedEmotion":  "mixed",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "They do. I have included the relevant dates and what you need from us. I am submitting the request.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "07:00–07:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "We will send the owner, reference, and update date before ending the call.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Could you repeat what I should expect next?",
                          "expectedEmotion":  "guardedly_hopeful",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "You will receive the summary at the contact address on the account. It will include the reference, the action taken today, and when we will update you.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Okay. I will keep that reference.",
                          "expectedEmotion":  "guardedly_hopeful",
                          "timeWindow":  "08:00–08:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "Before we end, is there a detail I missed or a question about the next step?",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "I still have doubts, but I have a name and a date to follow up.",
                          "expectedEmotion":  "guardedly_hopeful",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "agent",
                          "text":  "That is fair. Thank you for giving me the chance to document it properly. We will send the written summary. Take care.",
                          "expectedEmotion":  "calm",
                          "timeWindow":  "09:00–09:59"
                      },
                      {
                          "speaker":  "caller",
                          "text":  "Thank you. Goodbye.",
                          "expectedEmotion":  "guardedly_hopeful",
                          "timeWindow":  "09:00–09:59"
                      }
                  ]
    }
];
