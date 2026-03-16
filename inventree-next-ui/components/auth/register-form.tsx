'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, UserPlus } from 'lucide-react';
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

export function RegisterForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const data = new FormData(e.currentTarget);
    const password = data.get('password') as string;
    const confirm = data.get('confirm') as string;

    if (password !== confirm) {
      setError('Passwords do not match.');
      setIsLoading(false);
      return;
    }

    try {
      // Registration is handled via InvenTree API — replace with your endpoint
      await new Promise((r) => setTimeout(r, 1000)); // placeholder
      router.push('/login?registered=1');
    } catch {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className='shadow-xl'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl font-bold text-brand-gradient'>
          Create an account
        </CardTitle>
        <CardDescription>
          Register to access your InvenTree instance.
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className='space-y-4'>
          {error && (
            <div className='rounded-md bg-destructive/10 border border-destructive/20 px-3 py-2 text-sm text-destructive'>
              {error}
            </div>
          )}

          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='first_name'>First name</Label>
              <Input
                id='first_name'
                name='first_name'
                placeholder='Jane'
                disabled={isLoading}
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='last_name'>Last name</Label>
              <Input
                id='last_name'
                name='last_name'
                placeholder='Smith'
                disabled={isLoading}
              />
            </div>
          </div>

          <div className='space-y-2'>
            <Label htmlFor='username'>Username</Label>
            <Input
              id='username'
              name='username'
              type='text'
              autoComplete='username'
              placeholder='janesmith'
              required
              disabled={isLoading}
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              placeholder='jane@example.com'
              required
              disabled={isLoading}
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              name='password'
              type='password'
              autoComplete='new-password'
              placeholder='••••••••'
              required
              disabled={isLoading}
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='confirm'>Confirm password</Label>
            <Input
              id='confirm'
              name='confirm'
              type='password'
              autoComplete='new-password'
              placeholder='••••••••'
              required
              disabled={isLoading}
            />
          </div>
        </CardContent>

        <CardFooter className='flex flex-col gap-3'>
          <Button type='submit' className='w-full gap-2' disabled={isLoading}>
            {isLoading ? (
              <Loader2 className='h-4 w-4 animate-spin' />
            ) : (
              <UserPlus className='h-4 w-4' />
            )}
            {isLoading ? 'Creating account…' : 'Create Account'}
          </Button>

          <Separator />

          <p className='text-center text-sm text-muted-foreground'>
            Already have an account?{' '}
            <button
              type='button'
              className='text-primary font-medium hover:underline underline-offset-4'
              onClick={() => router.push('/login')}
            >
              Sign in
            </button>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
