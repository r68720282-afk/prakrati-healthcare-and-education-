import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPage() {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQueries = async () => {
      try {
        const res = await axios.get("/api/contact-requests");
        setQueries(res.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadQueries();
  }, []);

  const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin-login";
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mb-4">
                Total Queries: {queries.length}
              </h2>

              {queries.map((item) => (
                <div
                  key={item._id}
                  className="border-b py-3"
                >
                  <strong>{item.name}</strong>
                  <p>{item.phone}</p>
                  <p>{item.location}</p>
                  <p>{item.message}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
