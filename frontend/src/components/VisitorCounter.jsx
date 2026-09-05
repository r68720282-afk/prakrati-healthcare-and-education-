import { useEffect, useState } from "react";
import axios from "axios";
import { siteSettings } from "../config/siteSettings";

const API =
  "https://prakrati-healthcare-and-education-1.onrender.com/api/visitors";

export default function VisitorCounter() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!siteSettings.showVisitorCounter) return;

    // Har page visit track karega
    axios.post(`${API}/track`, {
      page: window.location.pathname,
    });

    // Total visitors fetch karega
    axios
      .get(`${API}/stats`)
      .then((res) => {
        setTotal(res.data.totalVisitors || 0);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!siteSettings.showVisitorCounter) return null;

  return (
    <div className="flex items-center justify-center gap-2 rounded-xl bg-slate-800 px-5 py-3 text-white shadow-lg">
      <span className="text-xl">👁</span>

      <div className="text-center">
        <p className="text-xs text-slate-300">Total Visitors</p>

        <h3 className="text-xl font-bold text-green-400">
          {total.toLocaleString()}
        </h3>
      </div>
    </div>
  );
}
