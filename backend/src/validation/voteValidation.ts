import { body, param } from 'express-validator';

/**
 * Validation rules for submitting a vote
 */
export const submitVoteValidation = [
  body('entryId')
    .notEmpty()
    .withMessage('Entry ID is required')
    .isUUID()
    .withMessage('Invalid entry ID format'),
  
  body('rating')
    .notEmpty()
    .withMessage('Rating is required')
    .isInt({ min: 1, max: 5 })
    .withMessage('Rating must be a number between 1 and 5'),
  
  body('tournamentId')
    .notEmpty()
    .withMessage('Tournament ID is required')
    .isUUID()
    .withMessage('Invalid tournament ID format')
];

/**
 * Validation rules for getting votes by entry ID
 */
export const getVotesByEntryValidation = [
  param('entryId')
    .isUUID()
    .withMessage('Invalid entry ID format')
];

/**
 * Validation rules for getting votes by user ID
 */
export const getVotesByUserValidation = [
  param('userId')
    .isUUID()
    .withMessage('Invalid user ID format')
];

/**
 * Validation rules for checking if a user has voted
 */
export const checkUserVoteValidation = [
  param('entryId')
    .isUUID()
    .withMessage('Invalid entry ID format'),
    
  body('userId')
    .notEmpty()
    .withMessage('User ID is required')
    .isUUID()
    .withMessage('Invalid user ID format')
];