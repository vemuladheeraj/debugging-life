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
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="glass glass-hover p-6 flex flex-col gap-4 group"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="text-accent-primary opacity-80 group-hover:opacity-100 transition-opacity duration-300">↗</span>
      </div>
      <p className="text-zinc-300 text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 pt-2">
        {tags.map(tag => (
          <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-all duration-300">
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}


