import { useState } from "react";
import axios from "axios";

export default function CareersPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
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
      setSuccess("");

      const response = await axios.post(
        "https://prakrati-healthcare-and-education-1.onrender.com/api/career-applications",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          position: form.position,
          experience: form.experience,
        }
      );

      console.log("Success:", response.data);

      setSuccess("Application submitted successfully.");

      setForm({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
      });
    } catch (err) {
      console.error("Status:", err.response?.status);
      console.error("Data:", err.response?.data);
      console.error("Message:", err.message);

      alert(
        err.response?.data?.message ||
          "Failed to submit application."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-8">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-3">
          Career Application
        </h1>

        <p className="text-center text-slate-600 mb-8">
          Join Prakrati Healthcare & Education
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded-xl p-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded-xl p-4"
          />

          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-xl p-4"
          />

          <input
            type="text"
            name="position"
            placeholder="Position Applying For"
            value={form.position}
            onChange={handleChange}
            required
            className="w-full border rounded-xl p-4"
          />

          <input
            type="text"
            name="experience"
            placeholder="Experience"
            value={form.experience}
            onChange={handleChange}
            required
            className="w-full border rounded-xl p-4"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

          {success && (
            <div className="bg-green-100 text-green-700 p-4 rounded-xl">
              {success}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
