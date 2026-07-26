import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const API =
  "https://prakrati-healthcare-and-education-1.onrender.com/api/contact-requests";

export default function HealthcareQueriesPage() {
  const token = localStorage.getItem("adminToken");

  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      setLoading(true);

      const res = await axios.get(API, {
        headers,
      });

      setQueries(res.data || []);
    } catch (error) {
      console.error(error);
      alert("Unable to load healthcare queries.");
    } finally {
      setLoading(false);
    }
  };

  const filteredQueries = useMemo(() => {
    return queries.filter((item) => {
      const value = search.toLowerCase();

      return (
        item.name?.toLowerCase().includes(value) ||
        item.phone?.toLowerCase().includes(value) ||
        item.location?.toLowerCase().includes(value) ||
        item.message?.toLowerCase().includes(value)
      );
    });
  }, [queries, search]);

  const openQuery = (query) => {
    setSelectedQuery(query);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedQuery(null);
    setShowModal(false);
  };

  const deleteQuery = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this query?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${API}/${id}`, {
        headers,
      });

      setQueries((prev) =>
        prev.filter((item) => item._id !== id)
      );

      alert("Query deleted successfully.");
    } catch (error) {
      console.error(error);
      alert("Unable to delete query.");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `${API}/${id}`,
        { status },
        {
          headers,
        }
      );

      setQueries((prev) =>
        prev.map((item) =>
          item._id === id
            ? {
                ...item,
                status,
              }
            : item
        )
      );
    } catch (error) {
      console.error(error);
      alert("Unable to update status.");
    }
   };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Healthcare Queries
          </h1>

          <p className="mt-2 text-slate-500">
            Total Queries: {filteredQueries.length}
          </p>
        </div>

        <input
          type="text"
          placeholder="Search by name, phone or district..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600 md:w-96"
        />
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
        {loading ? (
          <div className="py-20 text-center text-xl font-semibold">
            Loading Healthcare Queries...
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Phone</th>
                  <th className="p-4 text-left">District</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredQueries.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="py-10 text-center text-slate-500"
                    >
                      No Healthcare Queries Found
                    </td>
                  </tr>
                ) : (
                  filteredQueries.map((item) => (
                    <tr
                      key={item._id}
                      className="border-b hover:bg-slate-50"
                    >
                      <td className="p-4 font-medium">
                        {item.name}
                      </td>

                      <td className="p-4">
                        {item.phone || "-"}
                      </td>

                      <td className="p-4">
                        {item.location || "-"}
                      </td>

                      <td className="p-4">
                        <select
                          value={item.status || "new"}
                          onChange={(e) =>
                            updateStatus(item._id, e.target.value)
                          }
                          className="rounded-lg border px-3 py-2"
                        >
                          <option value="new">New</option>
                          <option value="In Progress">
                            In Progress
                          </option>
                          <option value="Resolved">
                            Resolved
                          </option>
                        </select>
                      </td>

                      <td className="flex gap-2 p-4">
                        <button
                          onClick={() => openQuery(item)}
                          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        >
                          View
                        </button>

                        <button
                          onClick={() => deleteQuery(item._id)}
                          className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )} 
                              </tbody>
            </table>
          </div>
        )}
      </div>

      {showModal && selectedQuery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl">

            <div className="flex items-center justify-between border-b p-6">
              <h2 className="text-2xl font-bold">
                Healthcare Query Details
              </h2>

              <button
                onClick={closeModal}
                className="text-2xl font-bold text-gray-500 hover:text-red-600"
              >
                ×
              </button>
            </div>

            <div className="space-y-5 p-6">

              <div>
                <h3 className="font-semibold text-gray-600">Name</h3>
                <p>{selectedQuery.name}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-600">Email</h3>
                <p>{selectedQuery.email || "-"}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-600">Phone</h3>
                <p>{selectedQuery.phone || "-"}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-600">District</h3>
                <p>{selectedQuery.location || "-"}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-600">Status</h3>
                <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-green-700">
                  {selectedQuery.status}
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-gray-600">Query</h3>
                <div className="mt-2 rounded-xl bg-slate-100 p-4 whitespace-pre-wrap">
                  {selectedQuery.message || "No message available"}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-600">
                  Submitted On
                </h3>
                <p>
                  {selectedQuery.createdAt
                    ? new Date(selectedQuery.createdAt).toLocaleString()
                    : "-"}
                </p>
              </div>

            </div>

            <div className="flex justify-end border-t p-6">
              <button
                onClick={closeModal}
                className="rounded-xl bg-gray-300 px-5 py-2 hover:bg-gray-400"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
