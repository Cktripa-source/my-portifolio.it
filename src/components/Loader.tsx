import  { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-dark flex items-center justify-center z-50">
      <div className="relative">
        <motion.div
          className="w-16 h-16 border-4 border-primary-light rounded-full"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.8, 1, 0.8],
            rotate: [0, 360],
            borderWidth: ['4px', '2px', '4px'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute inset-0 m-auto w-10 h-10 border-4 border-secondary rounded-full"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 0.8, 1],
            rotate: [360, 0],
            borderWidth: ['4px', '2px', '4px'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
 