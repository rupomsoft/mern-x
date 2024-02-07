import express from 'express';
import * as WelcomeController from '../controllers/WelcomeController.js';
const router = express.Router();


// Define route for "/WelcomeAPI" endpoint
router.get('/welcome', WelcomeController.Welcome);


export default router;
