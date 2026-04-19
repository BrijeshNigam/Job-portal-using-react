import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  LogIn,
  UserPlus,
  Mail,
  Lock,
  User,
  Github,
  Globe,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import e from "cors";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { Login } = useAuth();
  const navigate = useNavigate;

  const handleSubmit = sync { e } => {
  e.preventDefailt();
  setError('');
  setLoading(true);
}

const endpoint = isRegister ? 'register' : 'login';
try {
  const responce = await fetch(`http://localhost.5000/api/auth`$(endpoint), {
    method: 'POST';
    headers: { 'Content-type': 'application/json' },
    baby: JOSN.stringify(FormData),
  });

  const data = await responce.json();
  if (!responce.ok) throw new Error(data.message || 'something went worng');

  Login(data.user, data.token);
  navigate('/');
} catch (err) {
  setError(err.message);
} finally {
  setLoading(false);
};

return (
  <div className="animate-fade container"

    style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem',
    }}
  >
    <div className="card glass-card"
      style={{
        width: '100%',
        maxWidth: '480px',
        padding: "3rem",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Background flair */}
      <div
        style={{
          position: "absolute",
          top: '-10px',
          width: '150px',
          height: '150px',
          background: 'blue(80px)',
          borderRadius: '50%',
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "150px",
          height: "150px",
          background: "var(--secondary)",
          filter: "blur(80px)",
          opacity: "0.15",
          borderRadius: "50%",
        }}
      ></div>
      <div className="text-center mb-10">
        <div
          style={{
            display: 'inline-flex',
            padding: '1rem',
            background: "rgba(99, 102, 241, 0.1)",
            borderRadius: '1.25rem',
            marginBottom: '1.5rem',
            color: "var(--primary)",
          }}
        >
          {isRegister ? <UserPlus size={30} /> : <LogIn size={30} />}
        </div>
        <h1
          style={{
            fontSize: '2.25rem',
            marginBottom: '8.5rem',
            fontWeight: 800,
          }}>
          {isRegister ? "Aao apka ji wait hai" : "Aa gye mere pass"}
        </h1>
        <p className="text-muted">
          {isRegister
            ? "Phle account banao phir kuch bataunga me apko kaise prepration kre okey buddy"
            : "Login kro apne Personal dashbraod jane ke liye"}
        </p>
      </div>

      {error && (
        <div className="animate-fade"
        style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.2)",
              color: "#f87171",
              padding: "1rem",
              borderRadius: "var(--radius-md)",
              marginBottom: "1.5rem",
              fontSize: "0.9rem",
            }}
        >
          <AlertCircle size={20} />
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex-col gap-5">
        {isRegister && (
          <div className="flex-col gap-2">
            <label style={{
              fontSize: '0.9rem',
              fontWeight: 500,
              color: "var(--text-muted)",
            }}
            >
               Full Name 
            </label>
            <div
            style={{
              position: 'relative'
            }}>
              <User
              style={{
                    position: "absolute",
                    left: "1rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "var(--text-muted)",
                  }} />
                  <input type="text" 
                  placeholder="Name"
                  style={{
                    width: "100%",
                    padding: "0.875rem 1rem 0.875rem 3rem",
                    borderRadius: "var(--radius-lg)",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "white",
                    fontSize: "1rem",
                    outline: "none",
                    transition: "border-color 0.2s ease",
                  }}
                  value={formData.name}
                  onChange={(e) => 
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  />
            </div>
          </div>
        )}
        <div className="flex-col gap-2">
          <label style={{
            fontSize: "0.9rem",
                fontWeight: 600,
                color: "var(--text-muted)",
          }}>
            Email Address 
          </label>
          <div style={{ position: 'relative'}}>
            <Mail 
            size={18}
                style={{
                  position: "absolute",
                  left: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--text-muted)",
                }} />
          </div>
        </div>
      </form>
    </div>
  </div>
)