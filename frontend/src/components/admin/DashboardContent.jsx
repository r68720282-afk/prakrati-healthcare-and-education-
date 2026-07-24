import { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardContent() {
  const [queries, setQueries] = useState([]);
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const token = localStorage.getItem("adminToken");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const loadDashboard = async () => {
    try {
      const [queryRes, careerRes] = await Promise.all([
        axios.get(
          "https://prakrati-healthcare-and-education-1.onrender.com/api/contact-requests",
          config
        ),
        axios.get(
          "https://prakrati-healthcare-and-education-1.onrender.com/api/career-applications",
          config
        ),
      ]);

      setQueries(queryRes.data || []);
      setCareers(careerRes.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 bg-slate-100 min-h-screen p-8">

      {/* Header */}

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome back, Administrator
        </p>
      </div>

      {/* Statistics */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <p className="text-slate-500">
            Healthcare Queries
          </p>

          <h2 className="text-4xl font-bold text-green-700 mt-3">
            {queries.length}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <p className="text-slate-500">
            Career Applications
          </p>

          <h2 className="text-4xl font-bold text-blue-600 mt-3">
            {careers.length}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <p className="text-slate-500">
            New Queries
          </p>

          <h2 className="text-4xl font-bold text-orange-500 mt-3">
            {queries.filter(q => q.status === "new").length}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <p className="text-slate-500">
            Total Records
          </p>

          <h2 className="text-4xl font-bold text-purple-600 mt-3">
            {queries.length + careers.length}
          </h2>
        </div>

      </div>

      {/* Healthcare Queries */}

      <div className="bg-white rounded-2xl shadow-lg mt-10">

        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold">
            Recent Healthcare Queries
          </h2>
        </div>

        {loading ? (
          <p className="p-6">Loading...</p>
        ) : (
          <div className="overflow-auto">

            <table className="w-full">

              <thead className="bg-slate-100">

                <tr>

                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Phone</th>
                  <th className="p-4 text-left">District</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {queries.slice(0,5).map((item)=>(

                  <tr
                    key={item._id}
                    className="border-b hover:bg-slate-50"
                  >

                    <td className="p-4">
                      {item.name}
                    </td>

                    <td className="p-4">
                      {item.phone}
                    </td>

                    <td className="p-4">
                      {item.location}
                    </td>

                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        {item.status}
                      </span>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>
        )}

      </div>

      {/* Career Applications */}

      <div className="bg-white rounded-2xl shadow-lg mt-10">

        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold">
            Recent Career Applications
          </h2>
        </div>

        {loading ? (
          <p className="p-6">Loading...</p>
        ) : (
          <div className="overflow-auto">

            <table className="w-full">

              <thead className="bg-slate-100">

                <tr>

                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Position</th>
                  <th className="p-4 text-left">Experience</th>

                </tr>

              </thead>

              <tbody>

                {careers.slice(0,5).map((item)=>(

                  <tr
                    key={item._id}
                    className="border-b hover:bg-slate-50"
                  >

                    <td className="p-4">
                      {item.name}
                    </td>

                    <td className="p-4">
                      {item.position}
                    </td>

                    <td className="p-4">
                      {item.experience}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>
        )}

      </div>

    </div>
  );
}
