
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: "🏠",
    },
    {
      name: "Healthcare Queries",
      path: "/admin/queries",
      icon: "❤️",
    },
    {
      name: "Career Applications",
      path: "/admin/careers",
      icon: "💼",
    },
    {
      name: "Blog Posts",
      path: "/admin/blogs",
      icon: "📰",
    },
    {
      name: "Events",
      path: "/admin/events",
      icon: "📅",
    },
    {
      name: "Newsletter",
      path: "/admin/newsletters",
      icon: "📧",
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: "⚙️",
    },
  ];

  const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin-login";
  };

  return (
    <aside className="w-72 bg-green-700 text-white min-h-screen flex flex-col shadow-2xl">

      {/* Logo */}
      <div className="p-8 border-b border-green-600">

        <h2 className="text-2xl font-bold">
          Prakrati
        </h2>

        <p className="text-green-100 text-sm mt-1">
          Admin Dashboard
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 mt-6 px-4">

        {menuItems.map((item) => (

          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-4 px-5 py-4 rounded-xl mb-3 transition-all duration-300
              ${
                location.pathname === item.path
                  ? "bg-white text-green-700 font-semibold shadow-lg"
                  : "hover:bg-green-600"
              }`}
          >
            <span className="text-xl">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>

          </Link>

        ))}

      </nav>

      {/* Footer */}

      <div className="p-6 border-t border-green-600">

        <button
          onClick={logout}
          className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold transition"
        >
          Logout
        </button>

      </div>

    </aside>
  );
}
