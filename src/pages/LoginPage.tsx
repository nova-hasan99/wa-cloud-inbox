import { useEffect, useState, type FormEvent } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const autofill = import.meta.env.VITE_DEV_AUTOFILL === 'true';
const defaultEmail = autofill ? (import.meta.env.VITE_ADMIN_EMAIL ?? '') : '';
const realPassword = autofill ? (import.meta.env.VITE_ADMIN_PASSWORD ?? '') : '';
const MASK = '••••••••••••••';

export function LoginPage() {
  const { signIn, session, loading } = useAuth();
  const loc = useLocation();
  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState(autofill ? MASK : '');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setError(null);
  }, [email, password]);

  if (!loading && session) {
    const redirectTo = (loc.state as any)?.from || '/dashboard';
    return <Navigate to={redirectTo} replace />;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const actualPassword = autofill && password === MASK ? realPassword : password;
    const { error } = await signIn(email, actualPassword);
    setSubmitting(false);
    if (error) setError(error);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 to-white px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-panel">
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-700">
            <MessageSquare size={24} className="text-white" />
          </div>
          <h1 className="mt-3 text-xl font-semibold text-gray-900">
            ChatDesk
          </h1>
          <p className="text-sm text-gray-500">Admin sign-in for this dashboard</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => { if (autofill && password === MASK) setPassword(''); }}
            error={error}
          />

          <Button type="submit" block loading={submitting}>
            Sign in
          </Button>
        </form>

        <p className="mt-6 border-t border-gray-100 pt-4 text-center text-xs leading-relaxed text-gray-400">
          Self-hosted inbox for the WhatsApp Cloud API. Not affiliated with WhatsApp or Meta.{' '}
          <a
            href="https://github.com/nova-hasan99/wa-cloud-inbox"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 underline hover:text-gray-700"
          >
            View source on GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
