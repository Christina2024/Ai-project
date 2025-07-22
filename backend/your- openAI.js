//here is where you make your API call
/*
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();
const client = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

export default async function writeStory(userInput) {
  const response = await client.responses.create({
    model: "gpt-4.1",
    input: `Create a song ${userInput}.`,
  });
  console.log("openAI.js response:", response.output_text);
  return response.output_text;
}
*/

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

app.post("/recommend", async (req, res) => {
  const { mood } = req.body;

  const prompt = `Suggest a song or playlist for someone feeling "${mood}". Include song title, artist, and a 1-sentence reason.`;

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const suggestion = response.data.choices[0].message.content;
    res.json({ suggestion });
  } catch (err) {
    console.error(err);
    res.status(500).send("AI request failed");
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
