import { body, param } from 'express-validator';

/**
 * Validation rules for creating a new entry
 */
export const createEntryValidation = [
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ min: 3, max: 100 })
    .withMessage('Title must be between 3 and 100 characters'),
  
  body('description')
    .optional()
    .isLength({ max: 1000 })
    .withMessage('Description cannot exceed 1000 characters'),
  
  body('imageUrl')
    .notEmpty()
    .withMessage('Image URL is required')
    .isURL()
    .withMessage('Invalid image URL format'),

  body('tournamentId')
    .notEmpty()
    .withMessage('Tournament ID is required')
    .isUUID()
    .withMessage('Invalid tournament ID format')
];

/**
 * Validation rules for updating an existing entry
 */
export const updateEntryValidation = [
  param('id')
    .isUUID()
    .withMessage('Invalid entry ID format'),
  
  body('title')
    .optional()
    .isLength({ min: 3, max: 100 })
    .withMessage('Title must be between 3 and 100 characters'),
  
  body('description')
    .optional()
    .isLength({ max: 1000 })
    .withMessage('Description cannot exceed 1000 characters'),
  
  body('imageUrl')
    .optional()
    .isURL()
    .withMessage('Invalid image URL format')
];

/**
 * Validation rules for deleting an entry
 */
export const deleteEntryValidation = [
  param('id')
    .isUUID()
    .withMessage('Invalid entry ID format')
];

/**
 * Validation rules for getting an entry by ID
 */
export const getEntryValidation = [
  param('id')
    .isUUID()
    .withMessage('Invalid entry ID format')
];