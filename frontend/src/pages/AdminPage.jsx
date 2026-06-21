
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
          <h1 className="text-4xl font-bold">
            Admin Dashboard
          </h1>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Total Queries</h3>
            <p className="text-4xl font-bold mt-2">
              {queries.length}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Website Status</h3>
            <p className="text-green-600 text-2xl font-semibold mt-2">
              Active
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">System</h3>
            <p className="text-2xl font-semibold mt-2">
              Healthcare Portal
            </p>
          </div>

        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <div className="p-5 border-b">
            <h2 className="text-2xl font-semibold">
              Healthcare Queries
            </h2>
          </div>

          {loading ? (
            <div className="p-6">
              Loading...
            </div>
          ) : (
            <div className="overflow-auto">

              {queries.length > 0 ? (
                <table className="w-full">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="text-left p-4">Name</th>
                      <th className="text-left p-4">Mobile</th>
                      <th className="text-left p-4">District</th>
                      <th className="text-left p-4">Query</th>
                    </tr>
                  </thead>

                  <tbody>
                    {queries.map((item) => (
                      <tr key={item._id} className="border-t">
                        <td className="p-4">{item.name}</td>
                        <td className="p-4">{item.phone}</td>
                        <td className="p-4">{item.location}</td>
                        <td className="p-4">{item.message}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="p-6 text-center text-gray-500">
                  No Queries Found
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

