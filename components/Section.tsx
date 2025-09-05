import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
  delay?: number;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay } }),
};

export default function Section({ id, className = '', children, delay = 0 }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={delay} variants={variants}>
        {children}
      </motion.div>
    </section>
  );
}


