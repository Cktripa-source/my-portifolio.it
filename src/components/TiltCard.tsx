import  { useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glare?: boolean;
}

const TiltCard = ({ children, className = '', glare = false }: TiltCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Using springs for smooth animation
  const x = useSpring(0, { stiffness: 150, damping: 20 });
  const y = useSpring(0, { stiffness: 150, damping: 20 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center
    const distanceX = (e.clientX - centerX) / (rect.width / 2);
    const distanceY = (e.clientY - centerY) / (rect.height / 2);
    
    // Apply rotation (limited to 10 degrees max)
    x.set(distanceY * -8);
    y.set(distanceX * 8);
  };
  
  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX: x,
        rotateY: y,
        transformStyle: 'preserve-3d',
      }}
    >
      {glare && isHovered && (
        <div 
          className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-xl"
          style={{
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 80%)',
            transform: 'translateZ(1px)',
          }}
        />
      )}
      <div style={{ transform: 'translateZ(0)' }}>
        {children}
      </div>
    </motion.div>
  );
};

export default TiltCard;
 