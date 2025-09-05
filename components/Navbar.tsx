import Link from 'next/link';
import { motion } from 'framer-motion';

type NavbarProps = {
  onToggleTheme: () => void;
  isDark: boolean;
};

export default function Navbar({ onToggleTheme, isDark }: NavbarProps) {
  const items = [
    { href: '#home', label: 'Home' },
    { href: '#journey', label: 'Journey' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/40 dark:bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="#home" className="font-bold tracking-wider text-neon-blue neon-text">DV</Link>
        <div className="flex items-center gap-6">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="text-sm hover:text-neon-blue transition-colors">
              {item.label}
            </a>
          ))}
          <button
            aria-label="Toggle dark mode"
            onClick={onToggleTheme}
            className="ml-2 px-3 py-1 rounded-lg border border-white/10 hover:border-neon-blue hover:text-neon-blue transition-colors"
          >
            {isDark ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}


