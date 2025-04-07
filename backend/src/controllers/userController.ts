import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { SERVER_CONFIG } from '../config/env';

export class UserController {
  /**
   * Register a new user
   * @param req Express request
   * @param res Express response
   */
  static async register(req: Request, res: Response) {
    try {
      const { email, password, displayName } = req.body;
      const user = await UserService.register(email, password, displayName);
      res.status(201).json({ 
        success: true,
        message: 'User registered successfully', 
        user 
      });
    } catch (error) {
      res.status(400).json({ 
        success: false,
        error: error instanceof Error ? error.message : 'Registration failed' 
      });
    }
  }

  /**
   * Login a user with email and password
   * Set HttpOnly cookies for authentication
   * @param req Express request
   * @param res Express response
   */
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const { user, token, csrfToken, cookieOptions } = await UserService.login(email, password);
      
      // Set HttpOnly cookie for JWT token
      res.cookie('session', token, cookieOptions);
      
      // Set CSRF token cookie (not HttpOnly so JS can access it)
      res.cookie('csrf-token', csrfToken, {
        ...cookieOptions,
        httpOnly: false // Allow JavaScript access
      });
      
      // Return success with user info
      res.json({ 
        success: true,
        message: 'Login successful', 
        user,
        // Include token in response for backward compatibility
        // This should be removed in production once cookie auth is fully implemented
        token: SERVER_CONFIG.NODE_ENV === 'development' ? token : undefined
      });
    } catch (error) {
      res.status(401).json({ 
        success: false,
        error: error instanceof Error ? error.message : 'Login failed' 
      });
    }
  }
  
  /**
   * Logout a user by clearing auth cookies
   * @param req Express request
   * @param res Express response
   */
  static async logout(req: Request, res: Response) {
    try {
      const { cookieOptions } = await UserService.logout();
      
      // Clear session cookie
      res.clearCookie('session', cookieOptions);
      
      // Clear CSRF token cookie
      res.clearCookie('csrf-token', cookieOptions);
      
      res.json({ 
        success: true,
        message: 'Logged out successfully' 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false,
        error: 'Logout failed' 
      });
    }
  }

  /**
   * Get current user's profile
   * @param req Express request
   * @param res Express response
   */
  static async getProfile(req: Request, res: Response) {
    try {
      const user = await UserService.getUserById(req.user!.id);
      if (!user) {
        return res.status(404).json({ 
          success: false,
          error: 'User not found' 
        });
      }
      res.json({ 
        success: true,
        user 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false,
        error: 'Failed to fetch user profile',
        message: SERVER_CONFIG.NODE_ENV === 'development' && error instanceof Error ? error.message : undefined
      });
    }
  }

  /**
   * Update current user's profile
   * @param req Express request
   * @param res Express response
   */
  static async updateProfile(req: Request, res: Response) {
    try {
      const user = await UserService.updateUser(req.user!.id, req.body);
      if (!user) {
        return res.status(404).json({ 
          success: false,
          error: 'User not found' 
        });
      }
      res.json({ 
        success: true,
        message: 'Profile updated successfully', 
        user 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false,
        error: 'Failed to update profile',
        message: SERVER_CONFIG.NODE_ENV === 'development' && error instanceof Error ? error.message : undefined
      });
    }
  }

  /**
   * Delete current user's profile
   * @param req Express request
   * @param res Express response
   */
  static async deleteProfile(req: Request, res: Response) {
    try {
      const success = await UserService.deleteUser(req.user!.id);
      if (!success) {
        return res.status(404).json({ 
          success: false,
          error: 'User not found' 
        });
      }
      
      // Clear auth cookies since the user is being deleted
      const { cookieOptions } = await UserService.logout();
      res.clearCookie('session', cookieOptions);
      res.clearCookie('csrf-token', cookieOptions);
      
      res.json({ 
        success: true,
        message: 'Profile deleted successfully' 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false,
        error: 'Failed to delete profile',
        message: SERVER_CONFIG.NODE_ENV === 'development' && error instanceof Error ? error.message : undefined
      });
    }
  }
} 