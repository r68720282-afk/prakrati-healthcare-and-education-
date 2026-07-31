import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Thank you for subscribing to Prakrati updates.");
    setEmail("");
  };

  return (
    <section className="rounded-3xl bg-green-700 p-8 text-white shadow-xl">
      <h3 className="text-2xl font-bold">Get health awareness updates</h3>
      <p className="mt-2 text-green-50">Subscribe for practical wellness and education resources.</p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email" className="flex-1 rounded-xl px-4 py-3 text-slate-900 outline-none" />
        <button type="submit" className="rounded-xl bg-white px-6 py-3 font-semibold text-green-700 transition hover:bg-green-50">Subscribe</button>
      </form>
      {message && <p className="mt-3 text-sm text-green-50">{message}</p>}
    </section>
  );
}
