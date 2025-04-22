import express from 'express';
import protect from '../middlewares/authMiddleware.js';
import {selectCategory} from '../controllers/userController.js'

const router = express.Router();


router.get('/dashboard', protect, (req, res) => {
  res.json({
    message: `Welcome to your dashboard, ${req.user.name}`,
    email: req.user.email,
    isPrivate: req.user.isPrivateJournal
  });
});
router.post('/select-category', protect, selectCategory);

export default router;
