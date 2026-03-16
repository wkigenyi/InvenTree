'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';

export function Header() {
  const { theme, setTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-card px-6 shadow-sm">
      <div />
      <div className="flex items-center gap-2">
        {/* Theme toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
        >
          <Sun className="size-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
        </Button>

        {/* User / logout */}
        {user && (
          <>
            <span className="text-sm text-muted-foreground hidden sm:block">
              {user.username}
            </span>
            <Button variant="ghost" size="icon" onClick={logout} aria-label="Sign out">
              <LogOut className="size-4" />
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
