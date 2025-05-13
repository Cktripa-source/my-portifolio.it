// components/Section.tsx
import { motion } from 'framer-motion';

export default function Section({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <section className="h-screen flex flex-col items-center justify-center snap-start text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
        className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-white/20 max-w-xl w-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {children}
      </motion.div>
    </section>
  );
}
