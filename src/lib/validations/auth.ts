// src/lib/auth.ts
import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  // Add other user properties as needed
}

interface AuthStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));