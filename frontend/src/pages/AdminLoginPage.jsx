import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("adminToken", res.data.token);

      navigate("/admin");
    } catch (err) {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={login}
        className="bg-white p-8 rounded-xl shadow w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-green-600 text-white py-3 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
