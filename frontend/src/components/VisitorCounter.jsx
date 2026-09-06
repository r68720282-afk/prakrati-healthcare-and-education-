import { useEffect, useState } from "react";
import axios from "axios";
import { siteSettings } from "../config/siteSettings";

const API =
  "https://prakrati-healthcare-and-education-1.onrender.com/api/visitors";

export default function VisitorCounter() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!siteSettings.showVisitorCounter) return;

    const fetchVisitors = async () => {
      try {
        // Current page visit track
        await axios.post(`${API}/track`, {
          page: window.location.pathname,
        });

        // Total visitors fetch
        const res = await axios.get(`${API}/stats`);
        setTotal(res.data.totalVisitors || 0);
      } catch (err) {
        console.error("Visitor Counter Error:", err);
      }
    };

    fetchVisitors();
  }, []);

  if (!siteSettings.showVisitorCounter) return null;

  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 px-5 py-3">
      <span className="text-2xl">👁️</span>

      <div>
        <p className="text-xs text-slate-400">Total Visitors</p>
        <h3 className="text-xl font-bold text-green-400">
          {total.toLocaleString()}
        </h3>
      </div>
    </div>
  );
}
