import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { auth } from '../middleware/auth';
import { body, validationResult } from 'express-validator';

const router = Router();
const userController = new UserController();

// Validation middleware
const validateRegistration = [
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/\d/)
    .withMessage('Password must contain at least one number')
    .matches(/[a-z]/)
    .withMessage('Password must contain at least one lowercase letter')
    .matches(/[A-Z]/)
    .withMessage('Password must contain at least one uppercase letter'),
];

const validateLogin = [
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').notEmpty().withMessage('Password is required'),
];

const validateProfileUpdate = [
  body('email').optional().isEmail().withMessage('Please enter a valid email'),
  body('password')
    .optional()
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/\d/)
    .withMessage('Password must contain at least one number')
    .matches(/[a-z]/)
    .withMessage('Password must contain at least one lowercase letter')
    .matches(/[A-Z]/)
    .withMessage('Password must contain at least one uppercase letter'),
];

// Validation result middleware
const validate = (req: any, res: any, next: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Public routes with validation
router.post('/register', validateRegistration, validate, userController.register);
router.post('/login', validateLogin, validate, userController.login);

// Protected routes with validation
router.get('/profile', auth, userController.getProfile);
router.put('/profile', auth, validateProfileUpdate, validate, userController.updateProfile);
router.delete('/profile', auth, userController.deleteProfile);

export default router; 