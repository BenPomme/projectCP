import { body } from 'express-validator';
import { PASSWORD_PATTERN, EMAIL_PATTERN, USERNAME_PATTERN } from '../middleware/validation';

export const registerValidation = [
  body('email')
    .isEmail()
    .withMessage('Must be a valid email address')
    .matches(EMAIL_PATTERN)
    .withMessage('Email format is invalid')
    .normalizeEmail(),
  
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(PASSWORD_PATTERN)
    .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  
  body('displayName')
    .optional()
    .isLength({ min: 3, max: 20 })
    .withMessage('Display name must be between 3 and 20 characters')
    .matches(USERNAME_PATTERN)
    .withMessage('Display name can only contain letters, numbers, underscores, and hyphens')
];

export const loginValidation = [
  body('email')
    .isEmail()
    .withMessage('Must be a valid email address')
    .normalizeEmail(),
  
  body('password')
    .notEmpty()
    .withMessage('Password is required')
];

export const updateProfileValidation = [
  body('displayName')
    .optional()
    .isLength({ min: 3, max: 20 })
    .withMessage('Display name must be between 3 and 20 characters')
    .matches(USERNAME_PATTERN)
    .withMessage('Display name can only contain letters, numbers, underscores, and hyphens'),
    
  body('email')
    .optional()
    .isEmail()
    .withMessage('Must be a valid email address')
    .matches(EMAIL_PATTERN)
    .withMessage('Email format is invalid')
    .normalizeEmail(),
    
  body('password')
    .optional()
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(PASSWORD_PATTERN)
    .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number'),
    
  body('currentPassword')
    .if(body('password').exists())
    .notEmpty()
    .withMessage('Current password is required to set a new password')
];