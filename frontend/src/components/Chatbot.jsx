import { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
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
      {/* Open Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-xl font-semibold transition"
        >
          🤖 Prakrati Assistant
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="glass rounded-2xl w-80 shadow-2xl overflow-hidden bg-white">
          {/* Header */}
          <div className="flex items-center justify-between bg-green-600 text-white px-4 py-3">
            <div>
              <h3 className="font-semibold">Prakrati Assistant</h3>
              <p className="text-xs text-green-100">
                Healthcare & Education Support
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-green-700 transition flex items-center justify-center text-lg font-bold"
              aria-label="Close Chat"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="p-3">
            <input
              className="w-full border p-2 text-sm rounded"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Ask something..."
            />

            <button
              className="mt-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded w-full transition"
              onClick={() => setA(getReply())}
            >
              Ask
            </button>

            {a && (
              <div className="mt-3 bg-slate-100 rounded-lg p-3">
                <p className="text-sm">{a}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
