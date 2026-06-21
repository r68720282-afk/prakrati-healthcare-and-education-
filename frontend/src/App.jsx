```jsx
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Chatbot from "./components/Chatbot";
import ProtectedRoute from "./components/ProtectedRoute";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AdminLoginPage from "./pages/AdminLoginPage";

const AdminPage = () => {
  return (
    <div className="p-10">
      <h1>Admin Dashboard Test</h1>
    </div>
  );
};

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-login"
          element={<AdminLoginPage />}
        />
      </Routes>

      <Chatbot />
    </Layout>
  );
}

export default App;
```
