// src/context/AuthContext.tsx
import { User } from "firebase/auth";
import { createContext } from "react";

interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  logout: () => Promise<void>;
}

const defaultValue: AuthContextType = {
  currentUser: null,
  isAuthenticated: false,
  logout: async () => {},
};

export const AuthContext = createContext<AuthContextType>(defaultValue);
