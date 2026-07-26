import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Chatbot from "./components/Chatbot";
import ProtectedRoute from "./components/ProtectedRoute";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import AdminPage from "./pages/AdminPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import HealthcareQueriesPage from "./pages/admin/HealthcareQueriesPage";
export default function App() {
  return (
    <Layout>
     <Routes>
  <Route path="/" element={<HomePage />} />

  <Route path="/about" element={<AboutPage />} />

  <Route path="/careers" element={<CareersPage />} />

  <Route
    path="/admin-login"
    element={<AdminLoginPage />}
  />

  <Route
    path="/admin"
    element={
      <ProtectedRoute>
        <AdminPage />
      </ProtectedRoute>
    }
  />

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
