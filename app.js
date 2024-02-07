import express from 'express';
import mongoose from 'mongoose';
import router from './src/routes/api.js';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import hpp from 'hpp';
import cors from 'cors';
import path from 'path';
import {MAX_JSON_SIZE, MAX_URL_ENCODED_SIZE, MONGODB_CONNECTION, REQUEST_LIMIT_NUMBER, REQUEST_LIMIT_TIME, WEB_CACHE} from "./src/utility/Config.js";

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(hpp());

// Body parsing middleware with increased limit
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ limit: MAX_URL_ENCODED_SIZE }));


// Rate limiting middleware
const limiter = rateLimit({ windowMs: REQUEST_LIMIT_TIME, max: REQUEST_LIMIT_NUMBER });
app.use(limiter);


// Web cache validation and conditional requests in HTTP
app.set('etag', WEB_CACHE);

// MongoDB connection
mongoose.connect(MONGODB_CONNECTION, {autoIndex: true})
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
});

// API routes
app.use("/api", router);

// Serve static assets for React front end
app.use(express.static('client/dist'));


// Serve React front end for all routes not handled by the API
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

export default app;
