import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedAvatarProps {
  imageUrl?: string;
  size?: number;
  className?: string;
}

const AnimatedAvatar: React.FC<AnimatedAvatarProps> = ({
  imageUrl = '/avatar.jpg',
  size = 180,
  className = ''
}) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #f59e0b)',
          backgroundSize: '400% 400%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      {/* Image container */}
      <motion.div
        className="absolute inset-2 rounded-full overflow-hidden bg-white"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="w-full h-full rounded-full overflow-hidden">
          <img
            src={imageUrl}
            alt="Profile Avatar"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItdXNlciI+PHBhdGggZD0iTTIwIDIxdi0yYTQgNCAwIDAgMC00LTRINGE0IDQgMCAwIDAtNCA0djIiPjwvcGF0aD48Y2lyY2xlIGN4PSIxMiIgY3k9IjciIHI9IjQiPjwvY2lyY2xlPjwvc3ZnPg==';
            }}
          />
        </div>
      </motion.div>

      {/* Decorative crickets */}
      <motion.div
        className="absolute -right-2 -bottom-2 text-2xl transform rotate-45"
        animate={{
          y: [0, -10, 0],
          rotate: [45, 35, 45],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🏏
      </motion.div>
      <motion.div
        className="absolute -left-2 -top-2 text-2xl transform -rotate-45"
        animate={{
          y: [0, 10, 0],
          rotate: [-45, -35, -45],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        🏏
      </motion.div>
    </div>
  );
};

export default AnimatedAvatar;
