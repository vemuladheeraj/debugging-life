import { motion } from 'framer-motion';

type SkillItemProps = {
  name: string;
  level?: number; // 0-100
  icon?: React.ReactNode;
};

export default function SkillItem({ name, level = 80, icon }: SkillItemProps) {
  return (
    <motion.div whileHover={{ y: -6, scale: 1.02 }} className="glass glass-hover p-5 flex items-center gap-4">
      <div className="text-2xl">{icon || '🧩'}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold text-white">{name}</span>
          <span className="text-sm text-zinc-400 font-medium">{level}%</span>
        </div>
        <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary shadow-glow"
          />
        </div>
      </div>
    </motion.div>
  );
}


