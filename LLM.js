import Groq from "groq-sdk";
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});
const response = await groq.chat.completions.create({
  model: "llama-3.3-70b-versatile",
  messages: [
    { role: "user", content: "what is http" },
    { role: "user", content: "what is OS" },
  ]
});
console.log(response.choices[0].message.content);