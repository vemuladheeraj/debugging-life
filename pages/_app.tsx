import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enabled = stored ? stored === 'dark' : prefersDark;
    setIsDark(enabled);
    document.documentElement.classList.toggle('dark', enabled);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen">
      <Component {...pageProps} toggleTheme={() => setIsDark(v => !v)} isDark={isDark} />
    </div>
  );
}


