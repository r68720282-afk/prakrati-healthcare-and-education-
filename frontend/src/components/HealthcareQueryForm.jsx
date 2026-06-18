import { useState } from "react";

export default function HealthcareQueryForm() {

  const [form,setForm] = useState({
    name:"",
    mobile:"",
    district:"",
    query:""
  });

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-8">
          Submit Your Healthcare Query
        </h2>

        <div className="bg-white shadow-lg rounded-xl p-6">

          <input
            className="w-full border p-3 mb-4 rounded"
            placeholder="Full Name"
          />

          <input
            className="w-full border p-3 mb-4 rounded"
            placeholder="Mobile Number"
          />

          <input
            className="w-full border p-3 mb-4 rounded"
            placeholder="District"
          />

          <textarea
            className="w-full border p-3 mb-4 rounded"
            rows="5"
            placeholder="Your Query"
          />

          <button
            className="bg-green-600 text-white px-8 py-3 rounded-lg"
          >
            Submit Query
          </button>

        </div>
      </div>
    </section>
  );
}
