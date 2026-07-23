import { useState } from "react";
import axios from "axios";
import CareerSections from "../components/CareerSections";

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

      await axios.post(
        "https://prakrati-healthcare-and-education-1.onrender.com/api/career-applications",
        form
      );

      setSuccess("🎉 Your application has been submitted successfully.");

      setForm({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
      });
    } catch (err) {
      alert(
        err.response?.data?.message || "Failed to submit application."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero + Jobs + Process + FAQ */}
      <CareerSections />

      {/* Application Form */}
      <section
        id="apply"
        className="bg-gradient-to-br from-slate-50 to-green-50 py-20 px-6"
      >
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

          <div className="text-center mb-10">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              APPLY NOW
            </span>

            <h2 className="text-4xl font-bold mt-5 text-slate-800">
              Career Application Form
            </h2>

            <p className="text-slate-600 mt-3">
              Join Prakrati Healthcare & Education and become part of a team
              dedicated to improving healthcare and education in our communities.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none"
                />
              </div>

              <div>
                <label className="font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none"
                />
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="font-medium text-slate-700">
                  Mobile Number
                </label>

                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your mobile number"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none"
                />
              </div>

              <div>
                <label className="font-medium text-slate-700">
                  Position Applying For
                </label>

                <input
                  type="text"
                  name="position"
                  value={form.position}
                  onChange={handleChange}
                  required
                  placeholder="Example: Staff Nurse"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none"
                />
              </div>

            </div>

            <div>
              <label className="font-medium text-slate-700">
                Experience
              </label>

              <input
                type="text"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                required
                placeholder="Example: 2 Years"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white text-lg font-semibold transition duration-300"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>

            {success && (
              <div className="bg-green-100 border border-green-300 text-green-700 rounded-xl p-4 text-center font-medium">
                {success}
              </div>
            )}

          </form>
        </div>
      </section>
    </>
  );
}
