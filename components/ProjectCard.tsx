import { motion } from 'framer-motion';
import { useState } from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  icon?: string;
};

export default function ProjectCard({ title, description, tags, link, icon = '💻' }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={link || '#'}
      target="_blank"
      rel="noopener noreferrer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="glass glass-hover p-6 flex flex-col gap-4 group relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 via-accent-secondary/10 to-accent-tertiary/10"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative">
        <div className="flex items-center gap-3 mb-2">
          <motion.span
            className="text-2xl"
            animate={isHovered ? {
              y: [0, -4, 0],
              rotate: [0, -10, 0],
            } : {}}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.span>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <motion.span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-white/50 border border-gray-200 text-gray-700"
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderColor: 'rgba(59, 130, 246, 0.3)',
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 shadow-sm"
        whileHover={{ scale: 1.2, rotate: 45 }}
      >
        <span className="text-accent-primary">↗</span>
      </motion.div>
    </motion.a>
  );
}


