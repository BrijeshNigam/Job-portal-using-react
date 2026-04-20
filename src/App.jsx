import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./pages/Dashboard";
import JobPortal from "./pages/JobPortal";
import PrepHub from "./pages/PrepHub";
import DSAPrep from "./pages/DSAprep";
import Companies from "./pages/Companies";
import Login from "./pages/Login";
import { AuthProvider } from "./Context/AuthContext";
import { Analytics } from "@vercel/analytics/next";

function PlaceholderPage({ title, description }) {
  return (
    <div className="container mt-12">
      <h1>{title}</h1>
      <p className="text-muted">{description}</p>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/jobs" element={<JobPortal />} />
            <Route path="/prep" element={<PrepHub />} />
            <Route path="/prep/dsa" element={<DSAPrep />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/prep/aptitude"
              element={
                <PlaceholderPage
                  title="Aptitude Prep"
                  description="Quantitative and logical reasoning practice sets."
                />
              }
            />
            <Route
              path="/prep/technical"
              element={
                <PlaceholderPage
                  title="Technical Prep"
                  description="Java, Python, DBMS, OS, and core CS fundamentals."
                />
              }
            />
            <Route
              path="/prep/hr"
              element={
                <PlaceholderPage
                  title="HR Interview Tips"
                  description="Mock interviews, communication tips, and common HR questions."
                />
              }
            />
          </Routes>
        </main>
        <footer
          className="container mt-12 mb-8 text-center text-muted"
          style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}
        >
          <p>2026 Brijesh Nigam. Built with React and steady consistency.</p>
        </footer>
      </div>
    </AuthProvider>
  );
}

export default App;
