import React from "react";
import { ArrowRight, Award, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Active Jobs", value: "10K+", color: "var(--primary)" },
  { label: "DSA Problems", value: "500+", color: "var(--secondary)" },
  { label: "Companies", value: "200+", color: "var(--success)" },
  { label: "Students", value: "50K+", color: "var(--accent)" },
];

const Dashboard = () => {
  return (
    <div className="animate-fade">
      <section className="container mt-12 text-center">
        <h1
          style={{
            fontSize: "4rem",
            lineHeight: "1.1",
            marginBottom: "1.5rem",
            background: "linear-gradient(to right, #0f766e, #0284c7, #f97316)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Build the bridge to
          <br />
          your career with us.
        </h1>
        <p
          className="text-muted"
          style={{
            fontSize: "1.25rem",
            maxWidth: "700px",
            margin: "0 auto 2.5rem",
          }}
        >
          Explore job opportunities, prepare smarter, and stay ready for hiring
          rounds with one place built for momentum.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/jobs" className="btn btn-primary">
            Explore Jobs <ArrowRight size={20} />
          </Link>
          <Link
            to="/prep"
            className="btn"
            style={{ background: "var(--surface-light)" }}
          >
            Start Preparing
          </Link>
        </div>
      </section>

      <section className="container mt-12 grid grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="card glass-card text-center">
            <h3 style={{ color: stat.color, fontSize: "2.5rem" }}>{stat.value}</h3>
            <p className="text-muted" style={{ fontWeight: 600 }}>
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      <section className="container mt-12">
        <h2 className="mb-8" style={{ fontSize: "2rem" }}>
          Popular Modules
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <Link to="/prep/dsa" className="card flex flex-col gap-4">
            <div className="module-icon module-icon-primary">
              <Zap color="var(--primary)" />
            </div>
            <h3>DSA Mastery Sheet</h3>
            <p className="text-muted">
              Topic-wise curated problems for software engineering roles.
            </p>
          </Link>

          <Link to="/prep/aptitude" className="card flex flex-col gap-4">
            <div className="module-icon module-icon-secondary">
              <Target color="var(--secondary)" />
            </div>
            <h3>Aptitude Training</h3>
            <p className="text-muted">
              Quantitative, logical, and verbal reasoning practice sets.
            </p>
          </Link>

          <Link to="/companies" className="card flex flex-col gap-4">
            <div className="module-icon module-icon-success">
              <Award color="var(--success)" />
            </div>
            <h3>Company Insights</h3>
            <p className="text-muted">
              Hiring patterns and interview trends for product and service
              companies.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
