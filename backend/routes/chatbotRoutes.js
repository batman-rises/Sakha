// server/routes/chatbotRoutes.js
import express from 'express';
import protect from '../middlewares/authMiddleware.js';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/generate-response', protect, async (req, res) => {
  try {
    const { issues, userMessage, isInitial } = req.body;
    
    // Create system prompt based on user's selected issues
    let systemPrompt = "You are an empathetic mental health assistant trained to provide supportive guidance. ";
    systemPrompt += "You are not a substitute for professional mental health treatment. ";
    
    if (issues.length > 0) {
      systemPrompt += "The user has indicated they are experiencing: " + issues.join(", ") + ". ";
      
      // Add special handling for serious concerns
      if (issues.includes("self_harm_thoughts")) {
        systemPrompt += "IMPORTANT: The user has indicated they may be experiencing self-harm or suicidal thoughts. ";
        systemPrompt += "Always include appropriate crisis resources and encourage them to seek professional help immediately. ";
      }
    }
    
    systemPrompt += "Keep responses compassionate, practical, and fairly brief. Provide specific techniques when possible.";
    
    // Create user message
    let content = userMessage || "";
    
    // If this is the initial message, create a personalized greeting
    if (isInitial) {
      content = "Generate an initial personalized greeting based on my mental health concerns. Be warm and supportive.";
    }
    
    // Make request to OpenAI
    const response = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model: "openai/gpt-3.5-turbo",  // you can also try "anthropic/claude-2" or "mistralai/mixtral-8x7b"
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content }
          ]
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
            'HTTP-Referer': 'http://localhost:3000', // Required
            'Content-Type': 'application/json'
          }
        }
      );
      
    
    // If the user indicated self-harm thoughts and this wasn't acknowledged in the response
    let message = response.data.choices[0].message.content;
    
    if (issues.includes("self_harm_thoughts") && 
        !message.toLowerCase().includes("crisis") && 
        !message.toLowerCase().includes("emergency")) {
      message += "\n\nIMPORTANT: If you're having thoughts of harming yourself, please contact a crisis helpline immediately: National Suicide Prevention Lifeline: 988 or 1-800-273-8255";
    }
    
    res.json({ message });
  } catch (err) {
    console.error("OpenAI API error:", err.response?.data || err.message);
    res.status(500).json({ 
      message: "I'm having some trouble processing your request right now. How else might I support you?",
      error: err.message 
    });
  }
});

export default router;