import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

type GlitchTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function GlitchTitle({ children, className = '' }: GlitchTitleProps) {
  const [isHovered, setIsHovered] = useState(false);
  const text = children as string;

  return (
    <motion.h1
      className={`relative font-extrabold tracking-tight ${className}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <span className="relative inline-block">
        {text}
        <motion.span
          className="absolute left-0 top-0 w-full h-full"
          style={{
            color: '#3b82f6',
            clipPath: 'inset(0 0 60% 0)',
          }}
          animate={isHovered ? {
            x: [-2, 2, -2, 2, 0],
            opacity: [0.5, 0.8, 0.5],
          } : {}}
          transition={{
            duration: 0.2,
            repeat: isHovered ? Infinity : 0,
          }}
        >
          {text}
        </motion.span>
        <motion.span
          className="absolute left-0 top-0 w-full h-full"
          style={{
            color: '#f59e0b',
            clipPath: 'inset(60% 0 0 0)',
          }}
          animate={isHovered ? {
            x: [2, -2, 2, -2, 0],
            opacity: [0.5, 0.8, 0.5],
          } : {}}
          transition={{
            duration: 0.3,
            repeat: isHovered ? Infinity : 0,
            delay: 0.1,
          }}
        >
          {text}
        </motion.span>
      </span>
    </motion.h1>
  );
}


