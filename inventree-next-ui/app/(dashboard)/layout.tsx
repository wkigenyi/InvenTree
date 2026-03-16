import type { Metadata } from 'next';
import { DashboardShell } from '@/components/layout/dashboard-shell';

export const metadata: Metadata = {
  title: {
    default: 'Dashboard',
    template: '%s | InvenTree'
  }
};

/**
 * Dashboard route group layout.
 * Wraps all dashboard pages in the sidebar + header shell.
 */
export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardShell>{children}</DashboardShell>;
}
