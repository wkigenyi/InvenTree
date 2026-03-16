import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Sign In',
    template: '%s | InvenTree'
  }
};

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='min-h-screen grid lg:grid-cols-2'>
      {/* Left: branding panel (hidden on mobile) */}
      <div className='hidden lg:flex flex-col bg-sidebar text-sidebar-foreground p-10'>
        <div className='flex items-center gap-2 mb-auto'>
          <div className='w-8 h-8 rounded-md bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground font-bold text-sm'>
            IT
          </div>
          <span className='font-semibold text-lg'>InvenTree</span>
        </div>
        <blockquote className='mt-auto'>
          <p className='text-lg text-sidebar-foreground/80'>
            &ldquo;Open Source Inventory Management — built for makers,
            engineers, and teams who take their parts seriously.&rdquo;
          </p>
          <footer className='mt-4 text-sm text-sidebar-foreground/60'>
            inventree.org
          </footer>
        </blockquote>
      </div>

      {/* Right: form panel */}
      <div className='flex items-center justify-center p-8'>
        <div className='w-full max-w-md'>{children}</div>
      </div>
    </div>
  );
}
