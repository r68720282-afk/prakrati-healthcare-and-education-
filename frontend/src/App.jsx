import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Chatbot from "./components/Chatbot";
import ProtectedRoute from "./components/ProtectedRoute";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import BlogPage from "./pages/BlogPage";
// Agar BlogDetailsPage bani hai to niche wali line uncomment kar dena
// import BlogDetailsPage from "./pages/BlogDetailsPage";

import AdminPage from "./pages/AdminPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import HealthcareQueriesPage from "./pages/admin/HealthcareQueriesPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        {/* Public Pages */}

        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/blog" element={<BlogPage />} />

        {/* Agar BlogDetailsPage bani hai to ye bhi add karna */}
        {/* <Route path="/blog/:slug" element={<BlogDetailsPage />} /> */}

        <Route path="/careers" element={<CareersPage />} />

        {/* Admin Login */}

        <Route
          path="/admin-login"
          element={<AdminLoginPage />}
        />

        {/* Admin Dashboard */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />

        {/* Healthcare Queries */}

        <Route
          path="/admin/queries"
          element={
            <ProtectedRoute>
              <HealthcareQueriesPage />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Chatbot />
    </Layout>
  );
}
