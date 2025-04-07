import { body, param, query } from 'express-validator';

/**
 * Validation rules for creating a new tournament
 */
export const createTournamentValidation = [
  body('name')
    .notEmpty()
    .withMessage('Tournament name is required')
    .isLength({ min: 3, max: 100 })
    .withMessage('Tournament name must be between 3 and 100 characters'),
  
  body('submissionPhaseStart')
    .notEmpty()
    .withMessage('Submission phase start date is required')
    .isISO8601()
    .withMessage('Invalid submission phase start date format'),
  
  body('submissionPhaseEnd')
    .notEmpty()
    .withMessage('Submission phase end date is required')
    .isISO8601()
    .withMessage('Invalid submission phase end date format')
    .custom((value, { req }) => {
      if (new Date(value) <= new Date(req.body.submissionPhaseStart)) {
        throw new Error('Submission phase end date must be after the start date');
      }
      return true;
    }),
  
  body('votingPhaseStart')
    .notEmpty()
    .withMessage('Voting phase start date is required')
    .isISO8601()
    .withMessage('Invalid voting phase start date format')
    .custom((value, { req }) => {
      if (new Date(value) < new Date(req.body.submissionPhaseEnd)) {
        throw new Error('Voting phase start date must be after or equal to the submission phase end date');
      }
      return true;
    }),
  
  body('votingPhaseEnd')
    .notEmpty()
    .withMessage('Voting phase end date is required')
    .isISO8601()
    .withMessage('Invalid voting phase end date format')
    .custom((value, { req }) => {
      if (new Date(value) <= new Date(req.body.votingPhaseStart)) {
        throw new Error('Voting phase end date must be after the start date');
      }
      return true;
    }),
  
  body('maxEntriesPerUser')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Maximum entries per user must be a positive integer'),
  
  body('maxVotesPerUser')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Maximum votes per user must be a positive integer'),
  
  body('votingQuestion')
    .optional()
    .isLength({ min: 3, max: 200 })
    .withMessage('Voting question must be between 3 and 200 characters'),
  
  body('password')
    .optional()
    .isLength({ min: 4, max: 50 })
    .withMessage('Password must be between 4 and 50 characters')
];

/**
 * Validation rules for updating a tournament
 */
export const updateTournamentValidation = [
  param('id')
    .isUUID()
    .withMessage('Invalid tournament ID format'),
  
  body('name')
    .optional()
    .isLength({ min: 3, max: 100 })
    .withMessage('Tournament name must be between 3 and 100 characters'),
  
  body('submissionPhaseStart')
    .optional()
    .isISO8601()
    .withMessage('Invalid submission phase start date format'),
  
  body('submissionPhaseEnd')
    .optional()
    .isISO8601()
    .withMessage('Invalid submission phase end date format'),
  
  body('votingPhaseStart')
    .optional()
    .isISO8601()
    .withMessage('Invalid voting phase start date format'),
  
  body('votingPhaseEnd')
    .optional()
    .isISO8601()
    .withMessage('Invalid voting phase end date format'),
  
  body('maxEntriesPerUser')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Maximum entries per user must be a positive integer'),
  
  body('maxVotesPerUser')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Maximum votes per user must be a positive integer'),
  
  body('votingQuestion')
    .optional()
    .isLength({ min: 3, max: 200 })
    .withMessage('Voting question must be between 3 and 200 characters'),
  
  body('password')
    .optional()
    .isLength({ min: 4, max: 50 })
    .withMessage('Password must be between 4 and 50 characters'),
  
  body('currentPhase')
    .optional()
    .isIn(['submission', 'voting', 'completed'])
    .withMessage('Current phase must be one of: submission, voting, completed')
];

/**
 * Validation for checking tournament password
 */
export const checkTournamentPasswordValidation = [
  param('id')
    .isUUID()
    .withMessage('Invalid tournament ID format'),
  
  body('password')
    .notEmpty()
    .withMessage('Password is required')
];

/**
 * Validation for fetching tournaments with pagination
 */
export const getTournamentsValidation = [
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer'),
  
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100'),
  
  query('phase')
    .optional()
    .isIn(['submission', 'voting', 'completed', 'all'])
    .withMessage('Phase must be one of: submission, voting, completed, all')
];