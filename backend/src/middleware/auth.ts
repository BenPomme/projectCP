import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../index';
import { User } from '../entities/User';
import { SERVER_CONFIG } from '../config/env';

interface JwtPayload {
  userId: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: User;
      csrfToken?: string;
    }
  }
}

/**
 * Authentication middleware using HttpOnly cookies
 * Verifies JWT token stored in cookie or header
 */
export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Try to get token from cookie first (more secure)
    let token = req.cookies?.session;
    
    // Fallback to header if cookie is not available (for backward compatibility)
    if (!token) {
      token = req.header('Authorization')?.replace('Bearer ', '');
    }

    if (!token) {
      throw new Error('Authentication token not found');
    }

    // Verify CSRF token for cookie-based auth to prevent CSRF attacks
    if (req.cookies?.session && req.method !== 'GET') {
      const csrfToken = req.header('X-CSRF-Token');
      if (!csrfToken || csrfToken !== req.cookies['csrf-token']) {
        throw new Error('Invalid CSRF token');
      }
    }

    // Verify JWT token
    const decoded = jwt.verify(token, SERVER_CONFIG.JWT_SECRET) as JwtPayload;
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { id: decoded.userId } });

    if (!user) {
      throw new Error('User not found');
    }

    // Attach user to request
    req.user = user;
    next();
  } catch (error) {
    // Clear invalid cookies
    if (req.cookies?.session) {
      res.clearCookie('session');
      res.clearCookie('csrf-token');
    }
    
    res.status(401).json({ 
      error: 'Authentication failed',
      message: SERVER_CONFIG.NODE_ENV === 'development' && error instanceof Error ? error.message : undefined
    });
  }
};

export const adminAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await auth(req, res, () => {
      if (!req.user?.isAdmin) {
        return res.status(403).json({ error: 'Access denied. Admin only.' });
      }
      next();
    });
  } catch (error) {
    res.status(401).json({ error: 'Please authenticate.' });
  }
}; 