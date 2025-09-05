import { motion } from 'framer-motion';

type SkillItemProps = {
  name: string;
  level?: number; // 0-100
  icon?: React.ReactNode;
};

export default function SkillItem({ name, level = 80, icon }: SkillItemProps) {
  return (
    <motion.div whileHover={{ y: -4 }} className="glass p-4 flex items-center gap-3">
      <div className="text-2xl">{icon || '🧩'}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <span className="font-medium">{name}</span>
          <span className="text-xs text-white/70">{level}%</span>
        </div>
        <div className="mt-2 h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            className="h-full bg-gradient-to-r from-neon-blue via-neon-green to-neon-purple"
          />
        </div>
      </div>
    </motion.div>
  );
}


