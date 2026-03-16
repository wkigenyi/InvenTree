'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun, Bell, Search, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className='h-14 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center px-6 gap-4 sticky top-0 z-30'>
      {/* Search */}
      <div className='relative flex-1 max-w-sm'>
        <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none' />
        <input
          type='search'
          placeholder='Search…'
          className='w-full h-8 pl-9 pr-3 text-sm rounded-md border border-input bg-transparent focus:outline-none focus:ring-1 focus:ring-ring placeholder:text-muted-foreground'
        />
      </div>

      <div className='ml-auto flex items-center gap-1'>
        <TooltipProvider>
          {/* Dark mode toggle */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant='ghost'
                size='icon'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label='Toggle theme'
              >
                <Sun className='h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0' />
                <Moon className='absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100' />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Toggle theme</TooltipContent>
          </Tooltip>

          {/* Notifications */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant='ghost' size='icon' aria-label='Notifications'>
                <Bell className='h-4 w-4' />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Notifications</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* User menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='rounded-full'
              aria-label='User menu'
            >
              <User className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='w-48'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className='mr-2 h-4 w-4' />
              Profile
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='text-destructive focus:text-destructive'>
              <LogOut className='mr-2 h-4 w-4' />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
