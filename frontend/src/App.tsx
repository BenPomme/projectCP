import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuth } from './hooks/useAuth';
import MainLayout from './components/layout/MainLayout';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import ResetPasswordForm from './components/auth/ResetPasswordForm';
import ProfilePage from './pages/ProfilePage';
import AdminDashboard from './components/admin/AdminDashboard';
import ErrorBoundary from './components/ErrorBoundary';
import TournamentSettingsPage from './pages/admin/TournamentSettingsPage';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import SubmitDesignPage from './pages/SubmitDesignPage';
import VotePage from './pages/VotePage';
import WinnersPage from './pages/WinnersPage';
import DebugAuthPage from './pages/DebugAuthPage';
import { useEffect } from 'react';
import { handleRedirectResult } from './services/authService';

// Create a client
const queryClient = new QueryClient();

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  useEffect(() => {
    // If the user is not authenticated after loading is done, redirect to login
    if (!loading && !user) {
      console.log('User not authenticated in PrivateRoute, redirecting to login');
    }
  }, [user, loading]);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  return user ? <>{children}</> : <Navigate to="/login" />;
};

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  return user?.isAdmin ? <>{children}</> : <Navigate to="/" />;
};

function App() {
  useEffect(() => {
    // Handle the redirect result from Google sign-in
    handleRedirectResult();
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Router basename="/projectCP">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              {/* Public routes */}
              <Route index element={<HomePage />} />
              <Route path="login" element={<LoginForm />} />
              <Route path="register" element={<RegisterForm />} />
              <Route path="reset-password" element={<ResetPasswordForm />} />
              <Route path="winners" element={<WinnersPage />} />
              <Route path="debug-auth" element={<DebugAuthPage />} />

              {/* Protected routes */}
              <Route
                path="submit"
                element={
                  <PrivateRoute>
                    <SubmitDesignPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="vote"
                element={
                  <PrivateRoute>
                    <VotePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="profile"
                element={
                  <PrivateRoute>
                    <ProfilePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="dashboard"
                element={
                  <PrivateRoute>
                    <DashboardPage />
                  </PrivateRoute>
                }
              />

              {/* Admin routes */}
              <Route
                path="admin"
                element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                }
              />
              <Route
                path="admin/entries"
                element={
                  <AdminRoute>
                    <div>Admin Entries Page</div>
                  </AdminRoute>
                }
              />
              <Route
                path="admin/settings"
                element={
                  <AdminRoute>
                    <TournamentSettingsPage />
                  </AdminRoute>
                }
              />

              {/* Catch all */}
              <Route path="*" element={<div>404 Not Found</div>} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
