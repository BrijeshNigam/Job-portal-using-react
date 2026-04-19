import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AlertCircle,
  ArrowRight,
  Globe,
  Lock,
  LogIn,
  Mail,
  User,
  UserPlus,
  Workflow,
} from "lucide-react";
import { useAuth } from "../Context/AuthContext";

const initialFormState = { name: "", email: "", password: "" };

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const endpoint = isRegister ? "register" : "login";

    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/${endpoint}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      login(data.user, data.token);
      setFormData(initialFormState);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="animate-fade container"
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1rem",
      }}
    >
      <div
        className="card glass-card"
        style={{
          width: "100%",
          maxWidth: "480px",
          padding: "3rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-10%",
            width: "150px",
            height: "150px",
            background: "var(--primary)",
            filter: "blur(80px)",
            opacity: 0.15,
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "-10%",
            width: "150px",
            height: "150px",
            background: "var(--secondary)",
            filter: "blur(80px)",
            opacity: 0.15,
            borderRadius: "50%",
          }}
        />

        <div className="text-center mb-8">
          <div
            style={{
              display: "inline-flex",
              padding: "1rem",
              background: "rgba(2, 132, 199, 0.12)",
              borderRadius: "1.25rem",
              marginBottom: "1.5rem",
              color: "var(--primary)",
            }}
          >
            {isRegister ? <UserPlus size={30} /> : <LogIn size={30} />}
          </div>
          <h1
            style={{
              fontSize: "2.25rem",
              marginBottom: "0.75rem",
              fontWeight: 800,
            }}
          >
            {isRegister ? "Create your account" : "Welcome back"}
          </h1>
          <p className="text-muted">
            {isRegister
              ? "Register to access your personal dashboard and prep tools."
              : "Sign in to continue to your dashboard and saved progress."}
          </p>
        </div>

        {error && (
          <div
            className="animate-fade"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.2)",
              color: "#b91c1c",
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

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {isRegister && (
            <div className="flex flex-col gap-2">
              <label className="label">Full Name</label>
              <div style={{ position: "relative" }}>
                <User className="input-icon" size={18} />
                <input
                  type="text"
                  placeholder="Your name"
                  className="input"
                  value={formData.name}
                  onChange={handleChange("name")}
                  required
                />
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="label">Email Address</label>
            <div style={{ position: "relative" }}>
              <Mail className="input-icon" size={18} />
              <input
                type="email"
                placeholder="example@mail.com"
                className="input"
                value={formData.email}
                onChange={handleChange("email")}
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="label">Password</label>
            <div style={{ position: "relative" }}>
              <Lock className="input-icon" size={18} />
              <input
                type="password"
                placeholder="********"
                className="input"
                value={formData.password}
                onChange={handleChange("password")}
                required
              />
            </div>
          </div>

          <button
            className="btn btn-primary w-full justify-center mt-4"
            style={{ padding: "1rem", fontSize: "1rem" }}
            disabled={loading}
            type="submit"
          >
            {loading
              ? "Processing..."
              : isRegister
                ? "Create Account"
                : "Sign In"}
            <ArrowRight size={18} />
          </button>
        </form>

        <div className="mt-8">
          <div className="divider">
            <span
              className="text-muted"
              style={{ fontSize: "0.8rem", fontWeight: 600 }}
            >
              Or continue with
            </span>
          </div>

          <div className="flex gap-4">
            <button
              className="btn w-full justify-center"
              style={{
                background: "var(--surface-light)",
                borderRadius: "var(--radius-lg)",
              }}
              type="button"
            >
              <Globe size={20} /> Google
            </button>
            <button
              className="btn w-full justify-center"
              style={{
                background: "var(--surface-light)",
                borderRadius: "var(--radius-lg)",
              }}
              type="button"
            >
              <Workflow size={20} /> GitHub
            </button>
          </div>
        </div>

        <p className="text-center mt-8 text-muted">
          {isRegister ? "Already have an account?" : "New here?"}
          <button
            style={{
              color: "var(--primary)",
              background: "none",
              marginLeft: "0.5rem",
              fontSize: "0.95rem",
            }}
            onClick={() => setIsRegister((prev) => !prev)}
            type="button"
          >
            {isRegister ? "Sign in" : "Create one"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
