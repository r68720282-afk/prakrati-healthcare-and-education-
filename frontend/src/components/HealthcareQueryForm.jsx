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
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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

      setSuccess("Your healthcare query has been submitted successfully.");

      setForm({
        name: "",
        mobile: "",
        district: "",
        query: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to submit query.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="query"
      className="py-20 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-10">
          <span className="text-green-600 font-semibold uppercase tracking-wider">
            Healthcare Assistance
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4">
            Submit Your Healthcare Query
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Share your healthcare concern with us and our team
            will connect with you as soon as possible.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-3xl p-8 border border-slate-100"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full border border-slate-200 p-4 mb-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="text"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
            className="w-full border border-slate-200 p-4 mb-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="text"
            name="district"
            value={form.district}
            onChange={handleChange}
            placeholder="District"
            required
            className="w-full border border-slate-200 p-4 mb-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <textarea
            name="query"
            value={form.query}
            onChange={handleChange}
            placeholder="Describe your healthcare query"
            rows={5}
            required
            className="w-full border border-slate-200 p-4 mb-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl transition"
          >
            {loading ? "Submitting..." : "Submit Query"}
          </button>

          {success && (
            <div className="mt-4 p-4 rounded-xl bg-green-50 text-green-700">
              {success}
            </div>
          )}
        </form>

      </div>
    </section>
  );
}
