import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Server configuration
export const SERVER_CONFIG = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173',
  API_PREFIX: process.env.API_PREFIX || '/api',
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret_key_change_me_in_production',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '24h'
};

// Database configuration
export const DB_CONFIG = {
  HOST: process.env.DB_HOST || 'localhost',
  PORT: parseInt(process.env.DB_PORT || '5432'),
  USERNAME: process.env.DB_USER || 'postgres',
  PASSWORD: process.env.DB_PASSWORD || 'postgres',
  DATABASE: process.env.DB_NAME || 'king_competition',
  SYNCHRONIZE: process.env.NODE_ENV !== 'production', // Auto-sync in development
  LOGGING: process.env.NODE_ENV !== 'production',
};

// Security configuration
export const SECURITY_CONFIG = {
  RATE_LIMIT: {
    WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
    MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_MAX || '100'),
    MESSAGE: process.env.RATE_LIMIT_MESSAGE || 'Too many requests from this IP, please try again later.'
  },
  PASSWORD_SALT_ROUNDS: parseInt(process.env.PASSWORD_SALT_ROUNDS || '10'),
  CORS_ALLOWED_ORIGINS: process.env.CORS_ALLOWED_ORIGINS?.split(',') || [],
};

// Application settings
export const APP_CONFIG = {
  APP_NAME: process.env.APP_NAME || 'KING Consumer Product Competition API',
  MAX_ENTRIES_PER_USER: parseInt(process.env.MAX_ENTRIES_PER_USER || '3'),
  MAX_VOTES_PER_USER: parseInt(process.env.MAX_VOTES_PER_USER || '50'),
  DEFAULT_VOTING_QUESTION: process.env.DEFAULT_VOTING_QUESTION || 'How would you rate this entry?',
};

// File storage configuration
export const STORAGE_CONFIG = {
  PROVIDER: process.env.STORAGE_PROVIDER || 'local', // 'local', 's3', etc.
  LOCAL_STORAGE_PATH: process.env.LOCAL_STORAGE_PATH || './uploads',
  S3_BUCKET: process.env.AWS_BUCKET_NAME,
  S3_REGION: process.env.AWS_REGION || 'us-east-1',
  S3_ACCESS_KEY: process.env.AWS_ACCESS_KEY_ID,
  S3_SECRET_KEY: process.env.AWS_SECRET_ACCESS_KEY,
};