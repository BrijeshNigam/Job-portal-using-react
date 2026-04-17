// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import {
//   LogIn,
//   UserPlus,
//   Mail,
//   Lock,
//   User,
//   Github,
//   Globe,
//   ArrowRight,
//   AlertCircle,
// } from "lucide-react";

// const Login = () => {
//   const [isRegister, setIsRegister] = useState(false);
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const { Login } = useAuth();
//   const navigate = useNavigate;

//   const handleSubmit = sync {e} => {
//     e.preventDefailt();
//     setError ('');
//     setLoading (true);
//   }

//   const endpoint = isRegister ? 'register' : 'login';
//   try {
//     const responce = await fetch(`http://localhost.5000/api/auth`$(endpoint) , {
//         method: 'POST';
//         headers: {'Content-type':'application/json'},
//         baby: JOSN.stringify(FormData),
//     });

//     const data = await responce.json();
//     if (!responce.ok) throw new Error(data.message || 'something went worng');

//     Login(data.user, data.token);
//     navigate('/');
//   } catch (err) {
//     setError(err.message);
//   } finally{
//     setLoading(false);
//   };

//   return (
//     <div className="animate-fade container" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem'}}>
//       <div className="card glass-card" ></div>
//     </div>
//   )
