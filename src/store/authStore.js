import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Zustand store for managing authentication state
const useAuthStore = create(
  persist(
    (set) => ({
      user: null, // Initial user state
      token: null, // Initial token state
      setAuth: (user, token) => set({ user, token }), // Function to set user and token
      logout: () => set({ user: null, token: null }), // Function to clear user and token (logout)
    }),
    {
      name: 'auth-storage', // Name for localStorage persistence
    }
  )
);

export default useAuthStore;
