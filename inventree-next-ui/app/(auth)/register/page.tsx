import type { Metadata } from 'next';
import { RegisterForm } from '@/components/auth/register-form';

export const metadata: Metadata = { title: 'Create account' };

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen">
      {/* Branding panel — always dark */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between bg-zinc-900 text-zinc-50 p-12">
        <div className="flex items-center gap-3 text-2xl font-bold">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-8"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
          InvenTree
        </div>
        <blockquote className="space-y-2">
          <p className="text-lg font-medium leading-relaxed">
            &ldquo;Manage your inventory, parts, stock, and manufacturing
            workflows — all in one place.&rdquo;
          </p>
        </blockquote>
      </div>

      {/* Form panel */}
      <div className="flex w-full lg:w-1/2 flex-col items-center justify-center p-8">
        <div className="w-full max-w-sm space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Create an account
            </h1>
            <p className="text-muted-foreground">
              Get started with InvenTree today
            </p>
          </div>
          <RegisterForm />
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <a
              href="/login"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
