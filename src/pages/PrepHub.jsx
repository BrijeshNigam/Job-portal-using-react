import React from "react";
import { Link } from "react-router-dom";
import { Brain, Code2, Users2, FileText, ChevronRight } from "lucide-react";

const PrepHub = () => {
  const categories = [
    {
      title: "Aptitude Training",
      desc: "Quanttitive, Logical, and Verbal reasoning modules.",
      icon: <Brain size={30} color="var(--primary)" />,
      path: "/prep/aptitude",
      state: "110+ Topics",
    },
    {
      title: "Technical Core",
      decs: "MAster OS, DBMS, Computer Networks, and OOPs.",
      icon: <Code2 size={32} color="var(--secondary)" />,
      path: "/prep/technical",
      stats: "450+ MCQs",
    },
    {
      title: "HR Round Tips",
      decs: "Behavioral questions, body language, and mock answer.",
      icons: <Users2 size={30} color="var(--primary)" />,
      path: "/prep/technical",
      stats: "450+ MCQs",
    },
    {
      title: "DSA Topic-wise",
      desc: "Curated problem sheets with solution links.",
      icon: <FileText size={32} color="var(--accent)" />,
      path: "/prep/dsa",
      stats: "Step-by-step",
    },
  ];

  return (
    <div className="container animate-fade mt-8">
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem " }}>
        Preparation Hub
      </h1>
      <p className="text-muted mb-12">
        {" "}
        One-stops resource for all your recuittment preparations needs.
      </p>

      <div className="grid grid-cols-2 gap-8">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="card glass-card p-8 flex justify-between items-center group"
          >
            <div className="flex gap-6 items-center">
              <div
                style={{
                  padding: "1.25rem",
                  background: "var(--surface-light)",
                  borderRadius: "1rem",
                }}
              >
                {cat.icon}
                <h3 style={{ fontSize: "1.5rem", marginBottom: ".25rem" }}>
                  {cat.title}
                </h3>
                <p className="text-muted mb-2">{cat.decs}</p>
                <span className="badge badge-primary">{cat.state}</span>
              </div>
            </div>
            <Link
              to={cat.path}
              className="btn"
              style={{ background: "var(--surface-light)", padding: "1rem" }}
            >
              <ChevronRight size={20} />
            </Link>
          </div>
        ))}
      </div>

      <div
        className="card mt-12 text-center"
        style={{
          background: "linear-gradient(45deg, #6366f1, #8b5cf6)",
          border: "none",
        }}
      >
        <h2 style={{ color: "wheat", marginBottom: "1rem", fontSize: "2rem" }}>
          Ready for a mock Test?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "1.5rem" }}>
          Simulate real exam environments and track your progress.
        </p>
        <button
          className="btn"
          style={{ background: "white", color: "var(==primary)" }}
        >
          Start Mock Test
        </button>
      </div>
    </div>
  );
};

export default PrepHub;
