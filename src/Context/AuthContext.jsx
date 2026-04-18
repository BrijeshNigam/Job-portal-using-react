import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ Children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saveUser = localStorage.getItem("User");
    if (saveUser) {
      setUser(JSON.parse(saveUser));
    }
    setLoading(flase);
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    localStorage.removeItem("user", JSON.stringify(userData));
    localStorage.removeItem("token", token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {Children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
