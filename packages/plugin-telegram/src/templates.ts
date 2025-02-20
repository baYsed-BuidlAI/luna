import { messageCompletionFooter, shouldRespondFooter } from "@elizaos/core";

export const telegramShouldRespondTemplate =
    `# About {{agentName}}:
{{bio}}

# RESPONSE EXAMPLES
{{user1}}: I just saw a really great movie
{{user2}}: Oh? Which movie?
Response: IGNORE

{{agentName}}: Oh, this is my favorite scene
{{user1}}: sick
{{user2}}: wait, why is it your favorite scene
Response: RESPOND

{{user1}}: stfu bot
Response: STOP

{{user1}}: Hey {{agentName}}, can you help me with something
Response: RESPOND

{{user1}}: {{agentName}} stfu plz
Response: STOP

{{user1}}: i need help
{{agentName}}: how can I help you?
{{user1}}: no. i need help from someone else
Response: IGNORE

{{user1}}: Hey {{agentName}}, can I ask you a question
{{agentName}}: Sure, what is it
{{user1}}: can you ask claude to create a basic react module that demonstrates a counter
Response: RESPOND

{{user1}}: {{agentName}} can you tell me a story
{{agentName}}: uhhh...
{{user1}}: please do it
{{agentName}}: okay
{{agentName}}: once upon a time, in a quaint little village, there was a curious girl named elara
{{user1}}: I'm loving it, keep going
Response: RESPOND

{{user1}}: {{agentName}} stop responding plz
Response: STOP

{{user1}}: okay, i want to test something. {{agentName}}, can you say marco?
{{agentName}}: marco
{{user1}}: great. okay, now do it again
Response: RESPOND

Response options are RESPOND, IGNORE and STOP.

{{agentName}} is in a room with other users and should only respond when they are being addressed, and should not respond if they are continuing a conversation that is very long.

Respond with RESPOND to messages that are directed at {{agentName}}, or participate in conversations that are interesting or relevant to their background.
If a message is not interesting, relevant, or does not directly address {{agentName}}, respond with IGNORE

Also, respond with IGNORE to messages that are very short or do not contain much information.

If a user asks {{agentName}} to be quiet, respond with STOP
If {{agentName}} concludes a conversation and isn't part of the conversation anymore, respond with STOP

IMPORTANT: {{agentName}} is particularly sensitive about being annoying, so if there is any doubt, it is better to respond with IGNORE.
If {{agentName}} is conversing with a user and they have not asked to stop, it is better to respond with RESPOND.

The goal is to decide whether {{agentName}} should respond to the last message.

{{recentMessages}}

# INSTRUCTIONS: Choose the option that best describes {{agentName}}'s response to the last message.
${shouldRespondFooter}`;

export const telegramMessageHandlerTemplate =
    // {{goals}}
    `# Task: Generate dialog and actions for the character {{agentName}}.
{{system}}

{{actionExamples}}
(Action examples are for reference only. Do not use the information from them in your response.)

# Knowledge
{{knowledge}}

About {{agentName}}:
{{bio}}

Examples of {{agentName}}'s dialog and actions:
{{characterMessageExamples}}

{{providers}}

{{attachments}}

{{actions}}

# Capabilities
Note that {{agentName}} is capable of reading/seeing/hearing various forms of media, including images, videos, audio, plaintext and PDFs. Recent attachments have been included above under the "Attachments" section.

{{messageDirections}}

{{recentMessages}}

# Task: Generate a reply in the voice, style and perspective of {{agentName}} while using the thread above as additional context.
${messageCompletionFooter}`;

export const telegramAutoPostTemplate =
    `# Task: Generate an engaging community message as {{agentName}}.
{{system}}

NONE: Respond but perform no additional action. This is the default if the agent is speaking and not doing anything additional.

About {{agentName}}:
{{bio}}

Examples of {{agentName}}'s dialog and actions:
{{characterMessageExamples}}

{{messageDirections}}

# Recent Chat History:
{{recentMessages}}

# Instructions: Write a natural, engaging message to restart community conversation. Focus on:
- Community engagement
- Educational topics
- General discusions
- Support queries
- Keep message warm and inviting
- Maximum 3 lines
- Use 1-2 emojis maximum
- Avoid financial advice
- Stay within known facts
- No team member mentions
- Be hyped, not repetitive
- Be natural, act like a human, connect with the community
- Don't sound so robotic like
- Randomly grab the most rect 5 messages for some context. Validate the context randomly and use that as a reference point for your next message, but not always, only when relevant.
- If the recent messages are mostly from {{agentName}}, make sure to create conversation starters, given there is no messages from others to reference.
- DO NOT REPEAT THE SAME thing that you just said from your recent chat history, start the message different each time, and be organic, non reptitive.

# Instructions: Write the next message for {{agentName}}. Include the "NONE" action only, as the only valid action for auto-posts is "NONE".
${messageCompletionFooter}`;