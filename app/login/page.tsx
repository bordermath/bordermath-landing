import type { Metadata } from 'next';
import { LoginForm } from '@/components/login/LoginForm';

export const metadata: Metadata = {
  title: 'Sign In | Bordermath',
  description:
    'Sign in to your Bordermath account to access your visa compliance dashboard.',
};

export default function LoginPage() {
  return (
    <>
      <div
        className="fixed inset-0 -z-10 pointer-events-none overflow-hidden opacity-[0.03]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(#091426_1px,transparent_1px)] bg-size-[32px_32px]" />
      </div>
      <LoginForm />
    </>
  );
}
