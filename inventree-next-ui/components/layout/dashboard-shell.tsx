'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { useAuth } from '@/hooks/use-auth';

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const { user, isLoading, _hasHydrated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (_hasHydrated && !isLoading && !user) {
      router.replace('/login');
    }
  }, [user, isLoading, _hasHydrated, router]);

  // Show spinner until Zustand has rehydrated from localStorage
  if (!_hasHydrated || isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
