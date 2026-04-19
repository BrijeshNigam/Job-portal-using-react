import React from "react";
import { Building2, ClipboardList, Users } from "lucide-react";

const companyData = [
  {
    name: "Google",
    pattern: "Aptitude, coding round, and technical interviews",
    syllabus:
      "Quant, reasoning, strings, arrays, trees, and problem-solving basics.",
    eligibility: "Strong academics and problem-solving fundamentals.",
    color: "#ea4335",
  },
  {
    name: "JPMorgan Chase",
    pattern: "Online assessment, technical interviews, and bar raiser",
    syllabus: "DSA, OOPs, DBMS, and coding interview practice.",
    eligibility: "Consistent academics with good communication skills.",
    color: "#12decd",
  },
  {
    name: "Adobe",
    pattern: "OA, CS fundamentals, coding, and multiple interview rounds",
    syllabus: "OS, DBMS, OOPs, DSA, and frontend system design for UI roles.",
    eligibility: "Usually 7.5+ CGPA preferred.",
    color: "#ed1c24",
  },
  {
    name: "Cognizant",
    pattern: "Aptitude, logical reasoning, technical, and HR rounds",
    syllabus: "Quantitative aptitude, coding basics, and communication rounds.",
    eligibility: "No active backlog and solid degree performance.",
    color: "rgba(23, 226, 155, 0.81)",
  },
];

const Companies = () => {
  return (
    <div className="container animate-fade mt-8">
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Company Hiring Processes
      </h1>
      <p className="text-muted mb-8">
        Stay updated with exam patterns, interview flow, and eligibility
        criteria.
      </p>

      <div className="grid grid-cols-2 gap-8">
        {companyData.map((company) => (
          <div
            key={company.name}
            className="card glass-card"
            style={{ borderLeft: `5px solid ${company.color}` }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                style={{
                  padding: "0.75rem",
                  background: "var(--surface-light)",
                  borderRadius: "0.75rem",
                }}
              >
                <Building2 size={24} color={company.color} />
              </div>
              <div>
                <h2 style={{ fontSize: "1.5rem" }}>{company.name}</h2>
                <p style={{ fontWeight: 500 }}>{company.pattern}</p>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <ClipboardList className="text-primary" size={20} />
              <div>
                <h4 style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  Syllabus Highlight
                </h4>
                <p style={{ fontWeight: 500 }}>{company.syllabus}</p>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <Users className="text-primary" size={20} />
              <div>
                <h4 style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  Eligibility Criteria
                </h4>
                <p style={{ fontWeight: 500 }}>{company.eligibility}</p>
              </div>
            </div>

            <button
              className="btn w-full mt-8"
              style={{
                background: "var(--surface-light)",
                justifyContent: "center",
              }}
              type="button"
            >
              View Detailed Guide
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
