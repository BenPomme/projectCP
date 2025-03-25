import { login, register, loginWithGoogle } from '../services/authService';

/**
 * Utility to help test authentication functionality directly
 * This can be used in the browser console or from a debug component
 */
export const testAuth = {
  /**
   * Test login functionality
   * 
   * @param email User email
   * @param password User password
   * @returns The user object if login is successful
   */
  async testLogin(email: string, password: string) {
    console.log(`Attempting to login with email: ${email}`);
    try {
      const result = await login(email, password);
      console.log('Login result:', result);
      return result;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  /**
   * Test registration functionality
   * 
   * @param email User email
   * @param password User password
   * @param displayName Optional display name
   * @returns The user object if registration is successful
   */
  async testRegister(email: string, password: string, displayName?: string) {
    console.log(`Attempting to register with email: ${email}${displayName ? `, name: ${displayName}` : ''}`);
    try {
      const result = await register(email, password, displayName);
      console.log('Registration result:', result);
      return result;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  /**
   * Test Google login functionality
   * 
   * @returns The user object if Google login is successful
   */
  async testGoogleLogin() {
    console.log('Attempting to login with Google');
    try {
      const result = await loginWithGoogle();
      console.log('Google login result:', result);
      return result;
    } catch (error) {
      console.error('Google login error:', error);
      throw error;
    }
  }
};

// To use in browser console:
// 1. Add to window: window.testAuth = testAuth
// 2. Call methods: testAuth.testLogin('test@example.com', 'password123')
// Or use directly in components 