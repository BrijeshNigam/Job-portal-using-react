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

      <section className="container mt-12 grid grid-cols-4 md-hidden gap-6">
        {[
          { label: "Active Jobs", val: "10K+", color: "var(--primiry)" },
          { label: "DSA Problems", val: "500+", color: "var(--secondary)" },
          { label: "Companies", val: "200+", color: "var(--success)" },
          { label: "Students", val: "50K+", color: "var(--accent)" },
        ].map((stat) => (
          <div key={stat.label} className="card glass-card text-center">
            <h3 style={{ color: stat.color, fontSize: "2.5rem" }}>
              {stat.val}
            </h3>
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
          <Link to="/prep/dsa" className="card flex-col gap-4">
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "rgba(99, 102, 241, 0.1)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyItems: "center",
                padding: "10px",
              }}
            >
              <Zap color="var(--primiry)" />
            </div>
            <h3>DSA Mastery Sheet</h3>
            <p className="text-muted">
              Tpoic-wise curated problems for sde roles.
            </p>
          </Link>

          <Link to="/prep/aptitude" className="card flex-cols gap-4">
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "rgba(236, 72, 153, 0.1)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyItems: "center",
                padding: "10px",
              }}
            >
              <Target color="var(--secondary)" />
            </div>
            <h3>Apititude Training</h3>
            <p className="text-muted">
              Quantitative, logical, and verbal reasing set.
            </p>
          </Link>

          <Link to="/companies" className="card flex-col gap-4">
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "rgba(16, 185, 129, 0.1)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyItems: "center",
                padding: "10px",
              }}
            >
              <Award color="var(--success)" />
            </div>
            <h3>Company Insights</h3>
            <p className="text-muted">
              Detailed patterns for FAANG and Service companies.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Dashborad;
