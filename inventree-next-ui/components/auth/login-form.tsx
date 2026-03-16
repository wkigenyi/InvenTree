'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Loader2, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const { loginUser } = await import('@/lib/api');
      await loginUser({ username, password });
      router.push('/home');
    } catch {
      setError('Invalid username or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className='shadow-xl'>
      <CardHeader className='space-y-1'>
        <div className='flex items-center gap-2 mb-2 lg:hidden'>
          <div className='w-7 h-7 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs'>
            IT
          </div>
          <span className='font-semibold'>InvenTree</span>
        </div>
        <CardTitle className='text-2xl font-bold text-brand-gradient'>
          Welcome back
        </CardTitle>
        <CardDescription>
          Sign in to your InvenTree account to continue.
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className='space-y-4'>
          {error && (
            <div className='rounded-md bg-destructive/10 border border-destructive/20 px-3 py-2 text-sm text-destructive'>
              {error}
            </div>
          )}

          <div className='space-y-2'>
            <Label htmlFor='username'>Username</Label>
            <Input
              id='username'
              type='text'
              autoComplete='username'
              placeholder='your-username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <div className='space-y-2'>
            <div className='flex items-center justify-between'>
              <Label htmlFor='password'>Password</Label>
              <button
                type='button'
                className='text-xs text-muted-foreground hover:text-primary underline-offset-4 hover:underline'
                onClick={() => router.push('/reset-password')}
              >
                Forgot password?
              </button>
            </div>
            <div className='relative'>
              <Input
                id='password'
                type={showPassword ? 'text' : 'password'}
                autoComplete='current-password'
                placeholder='••••••••'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                className='pr-10'
              />
              <button
                type='button'
                className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors'
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeOff className='h-4 w-4' />
                ) : (
                  <Eye className='h-4 w-4' />
                )}
              </button>
            </div>
          </div>
        </CardContent>

        <CardFooter className='flex flex-col gap-3'>
          <Button type='submit' className='w-full gap-2' disabled={isLoading}>
            {isLoading ? (
              <Loader2 className='h-4 w-4 animate-spin' />
            ) : (
              <LogIn className='h-4 w-4' />
            )}
            {isLoading ? 'Signing in…' : 'Sign In'}
          </Button>

          <Separator />

          <p className='text-center text-sm text-muted-foreground'>
            Don&apos;t have an account?{' '}
            <button
              type='button'
              className='text-primary font-medium hover:underline underline-offset-4'
              onClick={() => router.push('/register')}
            >
              Register
            </button>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
