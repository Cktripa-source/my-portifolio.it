import  { useEffect, useState, useRef } from 'react';
import { animate } from 'framer-motion';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter = ({ 
  from, 
  to, 
  duration = 2, 
  className = '',
  suffix = '',
  prefix = ''
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    
    if (node) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          setCount(value);
        },
        ease: 'easeOut',
      });
      
      return () => controls.stop();
    }
  }, [from, to, duration]);

  return (
    <span ref={nodeRef} className={className}>
      {prefix}{Math.floor(count)}{suffix}
    </span>
  );
};

export default AnimatedCounter;
 