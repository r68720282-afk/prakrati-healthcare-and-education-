

// ===========================
// HealthcareQueriesPage.jsx
// ======== PART 1 START =====
// ===========================

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
    } catch (err) {
      console.error(err);

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
    const ok = window.confirm(
      "Delete this healthcare query?"
    );

    if (!ok) return;

    try {
      await axios.delete(`${API}/${id}`, {
        headers,
      });

      setQueries((prev) =>
        prev.filter((item) => item._id !== id)
      );

      alert("Query deleted successfully.");
    } catch (err) {
      console.error(err);

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
    } catch (err) {
      console.error(err);

      alert("Unable to update status.");
    }
  };

  return (// ===========================
// ======== PART 2 START =====
// ===========================

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Healthcare Queries
          </h1>

          <p className="text-slate-500 mt-1">
            Total Queries : {filteredQueries.length}
          </p>
        </div>

        <input
          type="text"
          placeholder="Search by Name, Phone, District..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
        />

      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

        {loading ? (

          <div className="text-center py-20 text-xl font-semibold">
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
                      colSpan="5"
                      className="text-center py-10 text-slate-500"
                    >
                      No Healthcare Queries Found
                    </td>

                  </tr>

                ) : (

                  filteredQueries.map((item) => (

                    <tr
                      key={item._id}
                      className="border-b hover:bg-slate-50 transition"
                    >

                      <td className="p-4 font-medium">
                        {item.name}
                      </td>

                      <td className="p-4">
                        {item.phone}
                      </td>

                      <td className="p-4">
                        {item.location}
                      </td>

                      <td className="p-4">

                        <select
                          value={item.status}
                          onChange={(e) =>
                            updateStatus(
                              item._id,
                              e.target.value
                            )
                          }
                          className="border rounded-lg px-3 py-2"
                        >

                          <option value="new">
                            New
                          </option>

                          <option value="In Progress">
                            In Progress
                          </option>

                          <option value="Resolved">
                            Resolved
                          </option>

                        </select>

                      </td>

                      <td className="p-4 flex gap-2">

                        <button
                          onClick={() => openQuery(item)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                        >
                          View
                        </button>

                        <button
                          onClick={() =>
                            deleteQuery(item._id)
                          }
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
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
// ======== PART 3 START =====
// ===========================

      {showModal && selectedQuery && (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-5">

          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full">

            <div className="flex justify-between items-center border-b p-6">

              <h2 className="text-2xl font-bold">
                Healthcare Query Details
              </h2>

              <button
                onClick={closeModal}
                className="text-2xl font-bold hover:text-red-600"
              >
                ✕
              </button>

            </div>

            <div className="p-6 space-y-4">

              <div>
                <h3 className="font-semibold text-slate-600">
                  Name
                </h3>

                <p>{selectedQuery.name}</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-600">
                  Mobile
                </h3>

                <p>{selectedQuery.phone}</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-600">
                  District
                </h3>

                <p>{selectedQuery.location}</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-600">
                  Query
                </h3>

                <div className="bg-slate-100 rounded-xl p-4 whitespace-pre-wrap">
                  {selectedQuery.message}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-slate-600">
                  Status
                </h3>

                <span className="inline-block mt-2 px-4 py-2 rounded-full bg-green-100 text-green-700">
                  {selectedQuery.status}
                </span>
              </div>

            </div>

            <div className="border-t p-5 flex justify-end">

              <button
                onClick={closeModal}
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl"
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

// ===========================
// ======== PART 3 END =======
// ===========================
