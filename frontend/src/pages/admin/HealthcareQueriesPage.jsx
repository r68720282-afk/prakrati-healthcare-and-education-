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

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Healthcare Queries
          </h1>

          <p className="text-slate-500 mt-2">
            Total Queries : {filteredQueries.length}
          </p>
        </div>

        <input
          type="text"
          placeholder="Search by Name, Phone or District"
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

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Healthcare Queries
          </h1>

          <p className="text-slate-500 mt-2">
            Total Queries : {filteredQueries.length}
          </p>
        </div>

        <input
          type="text"
          placeholder="Search by Name, Phone or District"
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
                <h3 className="font-semibold text-gray-600">
                  Name
                </h3>
                <p className="mt-1">{selectedQuery.name}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-600">
                  Email
                </h3>
                <p className="mt-1">
                  {selectedQuery.email || "-"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-600">
                  Phone
                </h3>
                <p className="mt-1">
                  {selectedQuery.phone || "-"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-600">
                  District
                </h3>
                <p className="mt-1">
                  {selectedQuery.location || "-"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-600">
                  Status
                </h3>

                <span className="mt-2 inline-block rounded-full bg-green-100 px-4 py-2 text-green-700">
                  {selectedQuery.status}
                </span>
              </div>
                            <div>
                <h3 className="font-semibold text-gray-600">
                  Query
                </h3>

                <div className="mt-2 rounded-xl bg-slate-100 p-4 whitespace-pre-wrap">
                  {selectedQuery.message || "No message available"}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-600">
                  Submitted On
                </h3>

                <p className="mt-1">
                  {selectedQuery.createdAt
                    ? new Date(selectedQuery.createdAt).toLocaleString()
                    : "-"}
                </p>
              </div>

            </div>

            <div className="flex justify-end gap-3 border-t p-6">

              <button
                onClick={closeModal}
                className="rounded-xl bg-gray-200 px-5 py-2 hover:bg-gray-300"
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
              
