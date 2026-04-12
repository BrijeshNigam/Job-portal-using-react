import React from "react";

const Dashborad = () => {
  return (
    <div className="animate-fade">
      <section className="container mt-12 text-center">
        <h1
          style={{
            fontSize: "4rem",
            lineHeight: "1.1",
            marginBottom: "1.5rem",
            background: "linear-gradient(to right, #6366f1, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Build the Bridge of <br /> Your Career with Us.
        </h1>
        <p
          className="text-muted"
          style={{
            fontSize: "1.25rem",
            maxWidth: "700px",
            margin: "0 auto 2.5rem",
          }}
        >
          Your all-in-one destination for job seeking and career growth. explor
          a wide range of job opportunities, connect with top employeers, and
          access valueble resorces to advince your career.
        </p>
      </section>

      {/* Stats/Features  */}
      <section
        className="container mt-12 grid-cols-2 lg-hidden"
        style={{ gap: "1rem" }}
      >
        <div className="card glass-card text-center">
          <h3 style={{ color: "var(--primary)", fontSize: "2rem" }}>10K+</h3>
          <p className="text-muted">Active Jobs</p>
        </div>
      </section>
    </div>
  );
};
