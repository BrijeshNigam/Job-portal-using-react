import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Briefcase,
  BookOpen,
  Building2,
  Layout,
  UserCircle,
  LogOut,
} from "lucide-react";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const navLinks = [
    { name: "Dashborad", path: "/", icon: <Layout size={20} /> },
    { name: "Job Portal", path: "/Jobs", icon: <Briefcase size={20} /> },
    { name: "Prep Hub", path: "/prep", icon: <BookOpen size={20} /> },
    { name: "Companies", path: "/companies", icon: <Building2 size={20} /> },
  ];

  return (
    <nav
      className="glass-card"
      style={{
        margin: "1rem",
        position: "sticky",
        top: "1rem",
        zIndex: 1000,
        padding: "0.75rem 2rem",
      }}
    >
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "var(--primary)",
          }}
        >
          <div
            style={{
              padding: "0.5rem",
              background: "var(--primary)",
              borderRadius: "0.75rem",
              color: "white",
            }}
          >
            <Layout size={24} />
          </div>
          <span>Brijesh</span>
        </Link>

        {/* Desktop Nav */}
        <div className="flex gap-6 items-center md-hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="flex items-center gap-2"
              style={{
                color:
                  location.pathname === link.path
                    ? "var(--primary)"
                    : "var(--text-muted)",
                fontWeight: location.pathname === link.path ? "700" : "500",
                transition: "color 0.2 ease",
              }}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}

          {user ? (
            <div
              className="flex items-center gap-4 ml-4 pl-4"
              style={{ borderLeft: "1px solid vat(--border)" }}
            >
              <div
                className="flex items-center gap-2 text-primary"
                style={{ fontWeight: 700 }}
              >
                <UserCircle size={20} /> {user.name}
              </div>
              <button
                onClick={logout}
                className="btn"
                style={{
                  background: "var(--surface-light)",
                  padding: "0.5rem",
                }}
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>

        {/* Mobile menu (icon only) */}
        <div className="flex lg-hidden gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                color:
                  location.pathname === link.path
                    ? "var(--primary)"
                    : "var(--text-muted)",
              }}
            >
              {link.icon}
            </Link>
          ))}
          {user ? (
            <button
              onClick={logout}
              style={{ background: "var(--text-muted)" }}
            >
              <LogOut size={20} />
            </button>
          ) : (
            <Link to="/login" style={{ color: "var(--text-muted)" }}>
              {" "}
              <UserCircle size={20} />{" "}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
