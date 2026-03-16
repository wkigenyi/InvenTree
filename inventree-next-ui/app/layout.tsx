import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/layout/theme-provider';

export const metadata: Metadata = {
  title: {
    template: '%s | InvenTree',
    default: 'InvenTree',
  },
  description: 'Open Source Inventory Management System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
