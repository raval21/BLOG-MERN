import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'; // Ensure these are imported
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import NewBlogPage from './pages/NewBlogPage';
import ShowBlogPage from './pages/ShowBlogPage';
import EditBlogPage from './pages/EditBlogPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AboutUsPage from './pages/AboutUsPage'; // Import AboutUsPage
import ContactUsPage from './pages/ContactUsPage'; // Import ContactUsPage
import { AuthProvider, useAuth } from './contexts/AuthContext'; // Import AuthProvider
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// ProtectedRoute to prevent access to routes unless authenticated
const ProtectedRoute = ({ element }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Optionally, show a loading spinner
  }

  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<AboutUsPage />} /> {/* About Us Route */}
          <Route path="/contact" element={<ContactUsPage />} /> {/* Contact Us Route */}

          {/* Protected routes (require login) */}
          <Route path="/" element={<Layout />} >
            <Route index element={<ProtectedRoute element={<HomePage />} />} />
            <Route path="blogs/new" element={<ProtectedRoute element={<NewBlogPage />} />} />
            <Route path="blogs/:id" element={<ProtectedRoute element={<ShowBlogPage />} />} />
            <Route path="blogs/edit/:id" element={<ProtectedRoute element={<EditBlogPage />} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
