import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  icon,
  color,
  isLeft
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="glass glass-hover p-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              animate={{
                y: [0, -5, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`text-4xl`}
            >
              {icon}
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{title}</h3>
              <p className="text-sm text-gray-500 font-medium">{year}</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </motion.div>
      </div>
      <motion.div
        className={`absolute left-6 w-4 h-4 rounded-full bg-${color} shadow-glow`}
        whileHover={{ scale: 1.5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </motion.div>
  );
};

export default TimelineItem;
