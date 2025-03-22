import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { authAPI } from '../services/api';
import { useAuthStore } from '../store/authStore';
import FormInput from '../components/auth/FormInput';

interface LoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Partial<LoginForm>>({});

  const loginMutation = useMutation({
    mutationFn: (data: LoginForm) => authAPI.login(data.email, data.password),
    onSuccess: (response) => {
      const { user, token } = response.data;
      login(user, token);
      navigate('/');
    },
    onError: (error: any) => {
      if (error.response?.data?.error) {
        setErrors({ email: error.response.data.error });
      } else {
        setErrors({ email: 'An error occurred during login' });
      }
    },
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Basic validation
    const newErrors: Partial<LoginForm> = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    loginMutation.mutate(formData);
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link to="/register" className="font-medium text-primary-600 hover:text-primary-500">
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <FormInput
              id="email"
              label="Email address"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={errors.email}
              autoComplete="email"
              required
            />

            <FormInput
              id="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              error={errors.password}
              autoComplete="current-password"
              required
            />

            <div>
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 