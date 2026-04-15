import React from "react";
import { Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Dashboard from './pages/Dashboard';
import JobPortal from './pages/JobPortal';
import PrepHub from './pages/PrepHub';
import DSAPrep from './pages/DSAPrep';
import Companies from './pages/Companies';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <main>
        <Route path="/" elements={<Dashboard />} />
        <Route path="/jobs" elements={<JobPortal />} />
        <Route path="/prep" elements={<PrepHub />} />
        <Route path="/prep/dsa" elements={<DSAPrep />} />
        <Route path="/companies" elements={<Companies />} />
        <Route path="/login" elements={<Login />} />

        {/* Placeholer routes for others */}
        <Route path="/prep/aptitude" elements={  }
      </main>
    </AuthProvider>
  )
}
