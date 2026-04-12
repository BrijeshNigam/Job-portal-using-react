import React, { useState } from "react";
import { Search, MapPin, Briefcase, DollarSign, Filter } from "lucide-react";

const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova",
    location: "Remote",
    salary: "$80k - $120k",
    type: "Full-time",
    tags: ["React", "TypeScript"],
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataStream",
    location: "Bangalore, India",
    salary: "₹12L - ₹20L",
    type: "Full-time",
    tags: ["Node.js", "PostgreSQL"],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Labs",
    location: "Hyderabad, India",
    salary: "₹8L - ₹14L",
    type: "Contract",
    tags: ["Figma", "User Research"],
  },
  {
    id: 4,
    title: "Software Engineering Intern",
    company: "Google",
    location: "Hybrid",
    salary: "Stipend",
    type: "Internship",
    tags: ["Algorithms", "Python"],
  },
  {
    id: 5,
    title: "DevOps Specialist",
    company: "CloudScale",
    location: "USA",
    salary: "$130k - $160k",
    type: "Full-time",
    tags: ["AWS", "Kubernetes"],
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "AI Vision",
    location: "London, UK",
    salary: "£60k - £90k",
    type: "Full-time",
    tags: ["Python", "ML"],
  },
];

const JobPortal = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = mockJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  return (
    <div className="container animate-fade mt-8">
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 style={{ fontSize: "2.5rem" }}> Opportuniry Hub</h1>
          <p className="text-muted">
            {" "}
            Find your next big breaks thousands of listings.{" "}
          </p>
        </div>
        <div className="flex gap-4">
          <div style={{ position: "relative", width: "300px" }}>
            <Search
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-muted)",
              }}
              size={18}
            />
            <input
              type="text"
              placeholder="Search jobs, skills, or companies..."
              style={{
                width: "100%",
                padding: "0.75rem 1rem 0.75rem 2.5rem",
                borderRadius: "var(--radius-md)",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            className="btn"
            style={{ background: "var(--surface-light)" }}
          >
            <Filter size={18} /> Filter
          </button>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="card glass-card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>
                    {job.title}
                  </h3>
                  <p className="text-primary" style={{ fontWeight: 600 }}>
                    {job.company}
                  </p>
                </div>
                <span className="badge badge-primary">{job.type}</span>
              </div>

              <div
                className="flex gap-4 mb-6 text-muted"
                style={{ fontSize: "0.9rem" }}
              >
                <div className="flex items-center gap-1">
                  <MapPin size={14} /> {job.location}
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign size={14} /> {job.salary}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className="btn btn-primary"
                  style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <div
            className="text-center w-full"
            style={{ gridColumn: "1 / -1", padding: "4rem" }}
          >
            <h3 className="text-muted">No jobs found matching your search.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPortal;
