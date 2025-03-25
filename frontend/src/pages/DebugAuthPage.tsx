import { useState } from 'react';
import { testAuth } from '../utils/authTest';
import { useAuth } from '../hooks/useAuth';

export default function DebugAuthPage() {
  const { user } = useAuth();
  
  // Login test
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginResult, setLoginResult] = useState<string>('');
  const [loginLoading, setLoginLoading] = useState(false);
  
  // Register test
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerResult, setRegisterResult] = useState<string>('');
  const [registerLoading, setRegisterLoading] = useState(false);
  
  // Google login test
  const [googleResult, setGoogleResult] = useState<string>('');
  const [googleLoading, setGoogleLoading] = useState(false);
  
  const handleTestLogin = async () => {
    if (!loginEmail || !loginPassword) {
      setLoginResult('Please enter both email and password');
      return;
    }
    
    setLoginLoading(true);
    setLoginResult('');
    
    try {
      const result = await testAuth.testLogin(loginEmail, loginPassword);
      setLoginResult(`Login successful! User: ${JSON.stringify(result, null, 2)}`);
    } catch (error: any) {
      setLoginResult(`Login failed: ${error.message}`);
    } finally {
      setLoginLoading(false);
    }
  };
  
  const handleTestRegister = async () => {
    if (!registerEmail || !registerPassword) {
      setRegisterResult('Please enter email and password');
      return;
    }
    
    setRegisterLoading(true);
    setRegisterResult('');
    
    try {
      const result = await testAuth.testRegister(
        registerEmail, 
        registerPassword, 
        registerName || undefined
      );
      setRegisterResult(`Registration successful! User: ${JSON.stringify(result, null, 2)}`);
    } catch (error: any) {
      setRegisterResult(`Registration failed: ${error.message}`);
    } finally {
      setRegisterLoading(false);
    }
  };
  
  const handleTestGoogleLogin = async () => {
    setGoogleLoading(true);
    setGoogleResult('');
    
    try {
      await testAuth.testGoogleLogin();
      setGoogleResult('Google sign-in initiated. You should be redirected to Google for authentication.');
    } catch (error: any) {
      setGoogleResult(`Google login failed: ${error.message}`);
    } finally {
      setGoogleLoading(false);
    }
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Authentication Debug</h1>
        
        {user ? (
          <div className="mb-4 p-4 bg-green-50 rounded-md">
            <h2 className="text-lg font-medium text-green-700">Logged In</h2>
            <pre className="mt-2 text-sm text-gray-800 overflow-auto p-2 bg-gray-100 rounded">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>
        ) : (
          <div className="mb-4 p-4 bg-yellow-50 rounded-md">
            <p className="text-sm text-yellow-700">Not logged in</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Login Test */}
          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Test Login</h2>
            
            <div className="space-y-3">
              <div>
                <label htmlFor="debug-login-email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="debug-login-email"
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="debug-login-password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  id="debug-login-password"
                  type="password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              
              <div>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  onClick={handleTestLogin}
                  disabled={loginLoading}
                >
                  {loginLoading ? 'Testing...' : 'Test Login'}
                </button>
              </div>
              
              {loginResult && (
                <div className="mt-3 p-3 bg-gray-50 rounded overflow-auto max-h-40 text-sm">
                  <pre>{loginResult}</pre>
                </div>
              )}
            </div>
          </div>
          
          {/* Register Test */}
          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Test Registration</h2>
            
            <div className="space-y-3">
              <div>
                <label htmlFor="debug-register-email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="debug-register-email"
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="debug-register-password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  id="debug-register-password"
                  type="password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="debug-register-name" className="block text-sm font-medium text-gray-700">Display Name (optional)</label>
                <input
                  id="debug-register-name"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                />
              </div>
              
              <div>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  onClick={handleTestRegister}
                  disabled={registerLoading}
                >
                  {registerLoading ? 'Testing...' : 'Test Registration'}
                </button>
              </div>
              
              {registerResult && (
                <div className="mt-3 p-3 bg-gray-50 rounded overflow-auto max-h-40 text-sm">
                  <pre>{registerResult}</pre>
                </div>
              )}
            </div>
          </div>
          
          {/* Google Login Test */}
          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Test Google Login</h2>
            
            <div className="space-y-3">
              <div>
                <button
                  type="button"
                  className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  onClick={handleTestGoogleLogin}
                  disabled={googleLoading}
                >
                  {googleLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                        <path fill="none" d="M1 1h22v22H1z" />
                      </svg>
                      Sign in with Google
                    </span>
                  )}
                </button>
              </div>
              
              {googleResult && (
                <div className="mt-3 p-3 bg-gray-50 rounded overflow-auto max-h-40 text-sm">
                  <pre>{googleResult}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 