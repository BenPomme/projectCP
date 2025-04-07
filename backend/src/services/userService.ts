import { User } from '../entities/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { SERVER_CONFIG, SECURITY_CONFIG } from '../config/env';
import { DataSource } from 'typeorm';

// We'll get the AppDataSource as a parameter to avoid circular dependencies
export class UserService {
  /**
   * Set the data source for the service
   * @param dataSource TypeORM data source
   */
  static setDataSource(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  // Store the data source statically
  private static dataSource: DataSource;

  /**
   * Get the user repository
   * @returns User repository
   */
  private static getUserRepository() {
    if (!this.dataSource) {
      throw new Error('DataSource not initialized. Call setDataSource first.');
    }
    return this.dataSource.getRepository(User);
  }

  /**
   * Register a new user
   * @param email User's email
   * @param password User's password
   * @param displayName Optional display name
   * @returns The created user object
   */
  static async register(email: string, password: string, displayName?: string): Promise<User> {
    const userRepository = this.getUserRepository();
    
    // Check if user already exists
    const existingUser = await userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new Error('Email already registered');
    }

    // Hash password with salt rounds from config
    const hashedPassword = await bcrypt.hash(
      password, 
      SECURITY_CONFIG.PASSWORD_SALT_ROUNDS
    );
    
    // Create user
    const user = userRepository.create({
      email,
      password: hashedPassword,
      ...(displayName && { displayName }),
    });

    // Save and return user (without password)
    const savedUser = await userRepository.save(user);
    return this.sanitizeUser(savedUser);
  }
  
  /**
   * Remove sensitive information from user object
   * @param user The user object to sanitize
   * @returns User object without sensitive information
   */
  static sanitizeUser(user: User): Omit<User, 'password'> {
    // Create a new object excluding the password property
    const { password, ...sanitizedUser } = user;
    return sanitizedUser;
  }

  /**
   * Login a user and generate authentication tokens
   * @param email User's email
   * @param password User's password
   * @returns User object and authentication tokens
   */
  static async login(email: string, password: string): Promise<{ 
    user: User; 
    token: string;
    csrfToken: string;
    cookieOptions: any;
  }> {
    const userRepository = this.getUserRepository();
    
    // Find user by email
    const user = await userRepository.findOne({ where: { email } });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id },
      SERVER_CONFIG.JWT_SECRET as jwt.Secret,
      { expiresIn: SERVER_CONFIG.JWT_EXPIRATION }
    );

    // Generate CSRF token for protection against CSRF attacks
    const csrfToken = crypto.randomBytes(32).toString('hex');

    // Cookie options for HttpOnly cookies
    const cookieOptions = {
      httpOnly: true, // Cannot be accessed by JavaScript
      secure: SERVER_CONFIG.NODE_ENV === 'production', // HTTPS only in production
      sameSite: 'lax' as const, // Helps prevent CSRF
      maxAge: 24 * 60 * 60 * 1000, // 24 hours (should match JWT expiration)
      path: '/', // Available on all paths
    };

    // Return sanitized user and tokens
    return { 
      user: this.sanitizeUser(user), 
      token, 
      csrfToken,
      cookieOptions 
    };
  }
  
  /**
   * Generate a logout response that clears auth cookies
   * @returns Cookie options for clearing cookies
   */
  static async logout(): Promise<{ cookieOptions: any }> {
    // Cookie options for clearing cookies
    const cookieOptions = {
      httpOnly: true,
      secure: SERVER_CONFIG.NODE_ENV === 'production',
      sameSite: 'lax' as const,
      maxAge: 0, // Expire immediately
      path: '/',
    };
    
    return { cookieOptions };
  }

  /**
   * Get a user by ID
   * @param id User ID
   * @returns User object without sensitive information
   */
  static async getUserById(id: string): Promise<User | null> {
    const userRepository = this.getUserRepository();
    const user = await userRepository.findOne({ where: { id } });
    return user ? this.sanitizeUser(user) : null;
  }

  /**
   * Update a user's profile
   * @param id User ID
   * @param data Data to update
   * @returns Updated user without sensitive information
   */
  static async updateUser(id: string, data: Partial<User>): Promise<User | null> {
    const userRepository = this.getUserRepository();
    const user = await userRepository.findOne({ where: { id } });
    if (!user) {
      return null;
    }

    // If password is being updated, hash it
    if (data.password) {
      data.password = await bcrypt.hash(
        data.password, 
        SECURITY_CONFIG.PASSWORD_SALT_ROUNDS
      );
    }

    // Update user
    Object.assign(user, data);
    const updatedUser = await userRepository.save(user);
    
    // Return sanitized user
    return this.sanitizeUser(updatedUser);
  }

  /**
   * Delete a user by ID
   * @param id User ID
   * @returns True if deleted, false otherwise
   */
  static async deleteUser(id: string): Promise<boolean> {
    const userRepository = this.getUserRepository();
    const result = await userRepository.delete(id);
    return result.affected ? true : false;
  }
} 