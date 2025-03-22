import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { authAPI } from '../services/api';
import { useAuthStore } from '../store/authStore';
import FormInput from '../components/auth/FormInput';

interface RegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterPage() {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [formData, setFormData] = useState<RegisterForm>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Partial<RegisterForm>>({});

  const registerMutation = useMutation({
    mutationFn: (data: Omit<RegisterForm, 'confirmPassword'>) =>
      authAPI.register(data.email, data.password),
    onSuccess: async (response) => {
      // After successful registration, log the user in
      try {
        const loginResponse = await authAPI.login(formData.email, formData.password);
        const { user, token } = loginResponse.data;
        login(user, token);
        navigate('/');
      } catch (error) {
        navigate('/login');
      }
    },
    onError: (error: any) => {
      if (error.response?.data?.error) {
        setErrors({ email: error.response.data.error });
      } else {
        setErrors({ email: 'An error occurred during registration' });
      }
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validation
    const newErrors: Partial<RegisterForm> = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const { confirmPassword, ...registerData } = formData;
    registerMutation.mutate(registerData);
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
            sign in to your account
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
              autoComplete="new-password"
              required
            />

            <FormInput
              id="confirmPassword"
              label="Confirm password"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              error={errors.confirmPassword}
              autoComplete="new-password"
              required
            />

            <div>
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={registerMutation.isPending}
              >
                {registerMutation.isPending ? 'Creating account...' : 'Create account'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 