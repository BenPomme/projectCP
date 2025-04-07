import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'express-validator';
import { SERVER_CONFIG } from '../config/env';

/**
 * Custom error types
 */
export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ValidationAppError extends AppError {
  errors: ValidationError[] | null;

  constructor(message: string, errors: ValidationError[] | null = null) {
    super(message, 400, true);
    this.errors = errors;
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Resource not found') {
    super(message, 404, true);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized access') {
    super(message, 401, true);
  }
}

export class ForbiddenError extends AppError {
  constructor(message = 'Forbidden action') {
    super(message, 403, true);
  }
}

export class ConflictError extends AppError {
  constructor(message = 'Resource conflict') {
    super(message, 409, true);
  }
}

/**
 * Error handling middleware
 */
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  // Log the error for internal debugging
  console.error('Error:', err);

  // Default error values
  let statusCode = 500;
  let message = 'Internal Server Error';
  let details = null;

  // Handle known error types
  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    
    if (err instanceof ValidationAppError && err.errors) {
      details = err.errors;
    }
  } else if (err.name === 'ValidationError' && err.array && typeof err.array === 'function') {
    // Express-validator error
    statusCode = 400;
    message = 'Validation Error';
    details = err.array();
  } else if (err.name === 'UnauthorizedError') {
    // JWT error
    statusCode = 401;
    message = 'Unauthorized access';
  } else if (err.name === 'QueryFailedError') {
    // Database error
    statusCode = 500;
    message = 'Database operation failed';
  }

  // Build the response
  const errorResponse: any = { error: message };
  
  // Add details if they exist
  if (details) {
    errorResponse.details = details;
  }
  
  // Add stack trace in development environment
  if (SERVER_CONFIG.NODE_ENV === 'development' && err.stack) {
    errorResponse.stack = err.stack;
  }

  // Send the response
  res.status(statusCode).json(errorResponse);
};

/**
 * Async error handler to avoid try/catch blocks
 * @param fn Function to wrap
 * @returns Express middleware function
 */
export const catchAsync = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};