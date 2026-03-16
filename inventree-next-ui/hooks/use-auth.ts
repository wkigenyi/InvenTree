'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { api } from '@/lib/api';

interface User {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  _hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  fetchUser: () => Promise<void>;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      _hasHydrated: false,

      setHasHydrated: (value) => set({ _hasHydrated: value }),

      login: async (username, password) => {
        // Fetch a CSRF token first (Django sets csrftoken cookie on GET requests)
        await api.get('/auth/login/');
        await api.post('/auth/login/', { username, password });
        const { data } = await api.get<User>('/user/me/');
        set({ user: data });
      },

      logout: async () => {
        try {
          await api.post('/auth/logout/');
        } finally {
          set({ user: null });
          if (typeof window !== 'undefined') {
            window.location.replace('/login');
          }
        }
      },

      fetchUser: async () => {
        set({ isLoading: true });
        try {
          const { data } = await api.get<User>('/user/me/');
          set({ user: data });
        } catch {
          set({ user: null });
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: 'inventree-auth',
      // Only persist non-sensitive identity fields
      partialize: (state) => ({ user: state.user }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
