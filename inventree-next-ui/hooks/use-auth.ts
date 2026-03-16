'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserInfo } from '@/lib/api';

interface AuthState {
  user: UserInfo | null;
  isAuthenticated: boolean;
  setUser: (user: UserInfo | null) => void;
  logout: () => void;
}

/**
 * Zustand store for authentication state.
 * Persisted to localStorage so the user remains logged in across page reloads.
 */
export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      setUser: (user) =>
        set({ user, isAuthenticated: user !== null }),

      logout: () =>
        set({ user: null, isAuthenticated: false })
    }),
    {
      name: 'inventree-auth'
    }
  )
);
