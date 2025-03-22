import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuthStore } from './store/authStore';
import MainLayout from './components/layout/MainLayout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ErrorBoundary from './components/ErrorBoundary';

// Create a client
const queryClient = new QueryClient();

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function AdminRoute({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated } = useAuthStore();
  return isAuthenticated && user?.isAdmin ? children : <Navigate to="/" />;
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              {/* Public routes */}
              <Route index element={<div>Home Page</div>} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="winners" element={<div>Winners Page</div>} />

              {/* Protected routes */}
              <Route
                path="submit"
                element={
                  <PrivateRoute>
                    <div>Submit Design Page</div>
                  </PrivateRoute>
                }
              />
              <Route
                path="vote"
                element={
                  <PrivateRoute>
                    <div>Vote Page</div>
                  </PrivateRoute>
                }
              />
              <Route
                path="profile"
                element={
                  <PrivateRoute>
                    <div>Profile Page</div>
                  </PrivateRoute>
                }
              />

              {/* Admin routes */}
              <Route
                path="admin"
                element={
                  <AdminRoute>
                    <div>Admin Dashboard</div>
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
