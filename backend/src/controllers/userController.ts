import { Request, Response } from 'express';
import { UserService } from '../services/userService';

export class UserController {
  static async register(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await UserService.register(email, password);
      res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Registration failed' });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const { user, token } = await UserService.login(email, password);
      res.json({ message: 'Login successful', user, token });
    } catch (error) {
      res.status(401).json({ error: error instanceof Error ? error.message : 'Login failed' });
    }
  }

  static async getProfile(req: Request, res: Response) {
    try {
      const user = await UserService.getUserById(req.user!.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user profile' });
    }
  }

  static async updateProfile(req: Request, res: Response) {
    try {
      const user = await UserService.updateUser(req.user!.id, req.body);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'Profile updated successfully', user });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update profile' });
    }
  }

  static async deleteProfile(req: Request, res: Response) {
    try {
      const success = await UserService.deleteUser(req.user!.id);
      if (!success) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'Profile deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete profile' });
    }
  }
} 