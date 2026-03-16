'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Package,
  Warehouse,
  ShoppingCart,
  TrendingUp,
  Wrench,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

const navItems = [
  { href: '/home', label: 'Home', icon: Home },
  { href: '/part', label: 'Parts', icon: Package },
  { href: '/stock', label: 'Stock', icon: Warehouse },
  { href: '/purchasing', label: 'Purchasing', icon: ShoppingCart },
  { href: '/sales', label: 'Sales', icon: TrendingUp },
  { href: '/manufacturing', label: 'Manufacturing', icon: Wrench }
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          'flex flex-col h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300',
          collapsed ? 'w-16' : 'w-60'
        )}
      >
        {/* Logo */}
        <div className='flex items-center gap-2 px-4 py-5 border-b border-sidebar-border'>
          <div className='w-8 h-8 rounded-md bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground font-bold text-sm shrink-0'>
            IT
          </div>
          {!collapsed && (
            <span className='font-semibold text-lg tracking-tight'>
              InvenTree
            </span>
          )}
        </div>

        {/* Navigation */}
        <nav className='flex-1 px-2 py-4 space-y-1 overflow-y-auto'>
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            const link = (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground text-sidebar-foreground/80'
                )}
              >
                <item.icon className='h-4 w-4 shrink-0' />
                {!collapsed && item.label}
              </Link>
            );

            if (collapsed) {
              return (
                <Tooltip key={item.href}>
                  <TooltipTrigger asChild>{link}</TooltipTrigger>
                  <TooltipContent side='right'>{item.label}</TooltipContent>
                </Tooltip>
              );
            }

            return link;
          })}
        </nav>

        {/* Footer: settings + collapse toggle */}
        <div className='px-2 py-4 border-t border-sidebar-border space-y-1'>
          <Link
            href='/settings'
            className='flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground transition-colors'
          >
            <Settings className='h-4 w-4 shrink-0' />
            {!collapsed && 'Settings'}
          </Link>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setCollapsed((c) => !c)}
            className='w-full text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/40'
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? (
              <ChevronRight className='h-4 w-4' />
            ) : (
              <ChevronLeft className='h-4 w-4' />
            )}
          </Button>
        </div>
      </aside>
    </TooltipProvider>
  );
}
