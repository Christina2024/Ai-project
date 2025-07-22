import writeStory from './openAi.js';
import express from "express";

const router = express.Router();


// API route to handle chat messages
router.post('/chat', async (req, res) => {
    const { message } = req.body;
    console.log('Received message at /chat route in routes.js:', message);
    
    // reponse from the AI API
    const response = await writeStory(message);
  res.json({ reply: response});
});

//create your route here

export { router as chatRoutes }