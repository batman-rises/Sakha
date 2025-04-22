import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { body, validationResult } from 'express-validator';
import rateLimit from 'express-rate-limit';
import User from '../models/User.js';
import protect from '../middlewares/authMiddleware.js';

const router = express.Router();

// Rate limiter: max 5 requests per 15 minutes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: 'Too many requests, please try again later.',
});

// Validation middleware
const registerValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email format'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters'),
];

const loginValidation = [
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').notEmpty().withMessage('Password is required'),
];

// Middleware to handle validation errors
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array()[0].msg });
  }
  next();
};

router.post('/register', authLimiter, registerValidation, validate, registerUser);
router.post('/login', authLimiter, loginValidation, validate, loginUser);
router.post('/user/save-issues', protect, async (req, res) => {
  const { issues } = req.body;
  
  try {
    const user = await User.findById(req.user._id); 
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    user.issues = issues; 
    await user.save();
    
    res.status(200).json({ message: 'Issues saved', issues });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});
export default router;