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
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="#home" className="font-bold tracking-wider text-2xl gradient-text">DV</Link>
        <div className="flex items-center gap-8">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-accent-primary transition-colors duration-300">
              {item.label}
            </a>
          ))}
          <button
            aria-label="Toggle dark mode"
            onClick={onToggleTheme}
            className="ml-2 px-4 py-2 rounded-xl border border-gray-300 hover:border-accent-primary hover:text-accent-primary transition-all duration-300 hover:shadow-glow"
          >
            {isDark ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}


