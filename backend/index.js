import express from "express";
import mongoose from 'mongoose';

import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import chatbotRoutes from './routes/chatbotRoutes.js';


import dotenv from 'dotenv';
dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5555;
const MongoDBURL = process.env.MONGODB_URL;

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.status(234).send('welcome');
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/chatbot', chatbotRoutes);

console.log('MongoDB URL:', MongoDBURL);  // This should print the connection string



mongoose
    .connect(MongoDBURL)
    .then(() => {
        console.log('app connected to db');
        app.listen(PORT, () => {
            console.log(`app is listening on ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });