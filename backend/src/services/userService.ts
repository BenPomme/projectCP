import { AppDataSource } from '../index';
import { User } from '../entities/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userRepository = AppDataSource.getRepository(User);

export class UserService {
  static async register(email: string, password: string): Promise<User> {
    const existingUser = await userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new Error('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = userRepository.create({
      email,
      password: hashedPassword,
    });

    return await userRepository.save(user);
  }

  static async login(email: string, password: string): Promise<{ user: User; token: string }> {
    const user = await userRepository.findOne({ where: { email } });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: process.env.JWT_EXPIRES_IN || '24h' }
    );

    return { user, token };
  }

  static async getUserById(id: string): Promise<User | null> {
    return await userRepository.findOne({ where: { id } });
  }

  static async updateUser(id: string, data: Partial<User>): Promise<User | null> {
    const user = await userRepository.findOne({ where: { id } });
    if (!user) {
      return null;
    }

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    Object.assign(user, data);
    return await userRepository.save(user);
  }

  static async deleteUser(id: string): Promise<boolean> {
    const result = await userRepository.delete(id);
    return result.affected ? true : false;
  }
} 