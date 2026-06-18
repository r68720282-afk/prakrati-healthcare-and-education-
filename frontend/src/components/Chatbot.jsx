import { useState } from "react";

export default function Chatbot() {
  const [q, setQ] = useState("");
  const [a, setA] = useState("");

  const getReply = () => {
    const text = q.toLowerCase();

    if (text.includes("health")) {
      return "We provide healthcare guidance and awareness support.";
    }

    if (text.includes("admission") || text.includes("education")) {
      return "Please contact our team for education and admission guidance.";
    }

    if (text.includes("contact") || text.includes("phone")) {
      return "Call us on 8962222552 or use the contact form.";
    }

    if (text.includes("whatsapp")) {
      return "WhatsApp us at +91 8962222552";
    }

    if (text.includes("camp")) {
      return "We organize healthcare awareness and support programs.";
    }

    return "Please submit your query using the Healthcare Query Form.";
  };

  return (
    <div className="fixed left-4 bottom-4 z-50">
      <div className="glass rounded-xl p-3 w-72 shadow-lg">
        <h3 className="font-semibold mb-2">
          Prakrati Assistant
        </h3>

        <input
          className="w-full border p-2 text-sm rounded"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ask something..."
        />

        <button
          className="mt-2 bg-green-600 text-white px-3 py-2 rounded w-full"
          onClick={() => setA(getReply())}
        >
          Ask
        </button>

        {a && (
          <p className="text-sm mt-3">
            {a}
          </p>
        )}
      </div>
    </div>
  );
}
