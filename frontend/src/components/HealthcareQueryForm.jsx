import { useState } from "react";
import axios from "axios";

export default function HealthcareQueryForm() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    district: "",
    query: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post("/api/contact-requests", {
        name: form.name,
        phone: form.mobile,
        location: form.district,
        message: form.query,
        category: "healthcare-query",
      });

      setSuccess("Your query has been submitted successfully.");

      setForm({
        name: "",
        mobile: "",
        district: "",
        query: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to submit query.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-3">
          Submit Your Healthcare Query
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Share your healthcare concern and our team will contact you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-6"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border p-3 mb-4 rounded"
            placeholder="Full Name"
          />

          <input
            type="text"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            required
            className="w-full border p-3 mb-4 rounded"
            placeholder="Mobile Number"
          />

          <input
            type="text"
            name="district"
            value={form.district}
            onChange={handleChange}
            required
            className="w-full border p-3 mb-4 rounded"
            placeholder="District"
          />

          <textarea
            name="query"
            value={form.query}
            onChange={handleChange}
            required
            rows="5"
            className="w-full border p-3 mb-4 rounded"
            placeholder="Your Query"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg w-full"
          >
            {loading ? "Submitting..." : "Submit Query"}
          </button>

          {success && (
            <div className="mt-4 text-green-600 font-medium">
              {success}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
