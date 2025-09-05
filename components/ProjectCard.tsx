import { motion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export default function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <motion.a
      href={link || '#'}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="glass p-5 flex flex-col gap-3 group"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-neon-blue opacity-80 group-hover:opacity-100">↗</span>
      </div>
      <p className="text-white/80 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2 pt-1">
        {tags.map(tag => (
          <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-white/10 bg-white/5">
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}


