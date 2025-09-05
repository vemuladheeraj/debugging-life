import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type GlitchTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function GlitchTitle({ children, className = '' }: GlitchTitleProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`relative font-extrabold tracking-tight ${className} glitch-title`}
      data-text={children as string}
    >
      {children}
    </motion.h1>
  );
}


