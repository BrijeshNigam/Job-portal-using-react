import React from "react";
import { Link } from "react-router-dom";
import { Brain, ChevronRight, Code2, FileText, Users2 } from "lucide-react";

const categories = [
  {
    title: "Aptitude Training",
    description: "Quantitative, logical, and verbal reasoning modules.",
    icon: <Brain size={30} color="var(--primary)" />,
    path: "/prep/aptitude",
    stats: "110+ Topics",
  },
  {
    title: "Technical Core",
    description: "Master OS, DBMS, CN, OOPs, and interview fundamentals.",
    icon: <Code2 size={32} color="var(--secondary)" />,
    path: "/prep/technical",
    stats: "450+ MCQs",
  },
  {
    title: "HR Round Tips",
    description: "Behavioral questions, communication, and mock answers.",
    icon: <Users2 size={30} color="var(--accent)" />,
    path: "/prep/hr",
    stats: "Interview Ready",
  },
  {
    title: "DSA Topic-wise",
    description: "Curated problem sheets with solution links and tracking.",
    icon: <FileText size={32} color="var(--success)" />,
    path: "/prep/dsa",
    stats: "Step by step",
  },
];

const PrepHub = () => {
  return (
    <div className="container animate-fade mt-8">
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Preparation Hub
      </h1>
      <p className="text-muted mb-8">
        One place for all your recruitment preparation needs.
      </p>

      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <div
            key={category.title}
            className="card glass-card p-8 flex justify-between items-center"
          >
            <div className="flex gap-6 items-center">
              <div
                style={{
                  padding: "1.25rem",
                  background: "var(--surface-light)",
                  borderRadius: "1rem",
                }}
              >
                {category.icon}
              </div>
              <div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: ".25rem" }}>
                  {category.title}
                </h3>
                <p className="text-muted mb-4">{category.description}</p>
                <span className="badge badge-primary">{category.stats}</span>
              </div>
            </div>
            <Link
              to={category.path}
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
          background: "linear-gradient(45deg, #0f766e, #0284c7, #f97316)",
          border: "none",
        }}
      >
        <h2 style={{ color: "white", marginBottom: "1rem", fontSize: "2rem" }}>
          Ready for a mock test?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "1.5rem" }}>
          Simulate real exam environments and keep track of your progress.
        </p>
        <button
          className="btn"
          style={{ background: "white", color: "var(--primary)" }}
          type="button"
        >
          Start Mock Test
        </button>
      </div>
    </div>
  );
};

export default PrepHub;
