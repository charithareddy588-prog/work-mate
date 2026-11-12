import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("workmate_user");
    return saved ? JSON.parse(saved) : null;
  });

  const register = (details) => {
    const updatedUser = {
      ...details,
      verified: false,
    };

    localStorage.setItem(
      "workmate_user",
      JSON.stringify(updatedUser)
    );

    setUser(updatedUser);
  };

  const updateUser = (details) => {
    const updatedUser = { ...user, ...details };

    localStorage.setItem(
      "workmate_user",
      JSON.stringify(updatedUser)
    );

    setUser(updatedUser);
  };

  const logout = () => {
    localStorage.removeItem("workmate_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, register, updateUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}