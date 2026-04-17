import React from "react";

const companyData = [
  {
    name: "Google",
    pattern: "Aptitude (Numberical, Verbal, Reasoning) + Coding",
    syllabus:
      "Quants: Profit & Loss, Time & Work. Coding: Basic Logic, String Handling.",
    eligibility: "60% throughout in 10th, 12th & Gradution. 1 Backlog allowed",
    color: "#eb1c24",
  },
  {
    name: "Jay P. Morgan",
    pattern: "QA (2 Coding + Behaviour) + 3 Technical Round + Bar Raiser",
    syllabus: "DSA: Tree, Graphs, DP.",
    eligibility: "Consistency in acadimics. Strong Problem sloving skills.",
    color: "#12decd",
  },
  {
    name: "Adobe",
    pattern: "OA (Aptitude + CS Fundamentals + Coding) + 3-4 Interviews",
    syllabus: "OS, DBMS, OOPS, DSA. Frontend system design for UI roles.",
    eligibility: "Minimum 7.5 CGPA preferred.",
    color: "#ed1c23b6",
  },
  {
    name: " Congizent ",
    pattern: "Aptitude + Logical + Technical + HR",
    eligibility: "No active backlog. 60% in degree.",
    color: "rgba(23, 226, 155, 0.81)",
  },
];

const Companies = () => {
  return (
    <div className="container animate-fade mt-8">
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Company Hiring Prosesses
      </h1>
      <p className="text-muted mb-12">
        Stay update with the latest exam patterns and eligibility criteria.
      </p>

      <div className="grid grid-cols-2 gap-8">
        {companyData.map((co, idx) => (
          <div
            key={idx}
            className="card glass-card"
            style={{ borderLeft: `5px solid ${co.color}` }}
          >
            <div className="flex item-center gap-4 mb-6">
              <div
                style={{
                  padding: "0.75rem",
                  background: "var(--surface-light)",
                  borderRadius: "0.75rem",
                }}
              >
                <Building2 size={24} color={co.color} />
              </div>
              <h2 style={{ fontSize: "1.5rem" }}>
                {co.name}
                Exam Pattern
              </h2>
              <p style={{ fontWeight: 500 }}> {co.pattern} </p>
            </div>

            <div className="flex gap-3 mt-4">
              <ClipboardList className="text-primiry" size={20} />
              <div>
                <h4 style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  Syllabus Highlight
                </h4>
                <p style={{ fontWeight: 500 }}> {co.syllabus} </p>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <Users className="text-primiry" size={20} />
              <div>
                <h4 style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  Eligibility Criteria
                </h4>
                <p style={{ fontWeight: 500 }}> {co.eligibility} </p>
              </div>
            </div>

            <button
              className="btn w-full mt-6"
              style={{
                background: "var(--surface-light)",
                justifyContent: "center",
              }}
            >
              View Details Guide
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
