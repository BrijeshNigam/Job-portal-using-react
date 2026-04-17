import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./pages/Dashboard";
import JobPortal from "./pages/JobPortal";
import PrepHub from "./pages/PrepHub";
import DSAPrep from "./pages/DSAPrep";
import Companies from "./pages/Companies";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" elements={<Dashboard />} />
          <Route path="/jobs" elements={<JobPortal />} />
          <Route path="/prep" elements={<PrepHub />} />
          <Route path="/prep/dsa" elements={<DSAPrep />} />
          <Route path="/companies" elements={<Companies />} />
          <Route path="/login" elements={<Login />} />

          {/* Placeholer routes for others */}
          <Route
            path="/prep/aptitude"
            elements={
              <div className="container mt-12">
                {" "}
                <h1>Aptitude Prep</h1>{" "}
                <p className="text-muted">
                  Quantitative and Logical Reasing sets.
                </p>
              </div>
            }
          />
          <Route
            path="/prep/technical"
            elements={
              <div className="container mt-12">
                {" "}
                <h1>Technical Prep </h1>{" "}
                <p className="text-muted">Java, Python core fundamentals.</p>
              </div>
            }
          />
          <Route
            path="prep/hr"
            elements={
              <div className="container mt-12">
                {" "}
                <h1>HR Interview Tips</h1>{" "}
                <p className="text-muted">Mock interviews and behavior tips.</p>
              </div>
            }
          />
        </Routes>
      </main>

      <div
        className="footer container mt-12 mb-8 text-center text-muted"
        style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}
      >
        <p>
          <i class="fas fa-copyright    ">
            {" "}
            2026 Brijesh nigam. Built with react and his passion or
            consistency{" "}
          </i>
        </p>
      </div>
    </AuthProvider>
  );
}

export default App;
