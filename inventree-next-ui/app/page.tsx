import { redirect } from 'next/navigation';

/**
 * Root page — redirect to the login page.
 * Authenticated users will be redirected to the dashboard by the login page.
 */
export default function RootPage() {
  redirect('/login');
}
