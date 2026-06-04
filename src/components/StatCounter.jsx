import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function StatCounter({ label, value, suffix = '', icon = null, delay = 0 }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const end = parseInt(value, 10);
    if (isNaN(end)) return;
    
    const duration = 2000; // total count duration in ms
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Use easeOutQuad for smooth deceleration at the end
      const easeProgress = progress * (2 - progress);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [inView, value, delay]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="text-center"
    >
      {icon && (
        <div className="text-4xl mb-4 text-tertiary dark:text-tertiary-fixed-dim" aria-hidden="true">
          {icon}
        </div>
      )}
      <div className="font-display-xl text-4xl md:text-5xl font-bold text-tertiary dark:text-tertiary-fixed-dim mb-2">
        {count}{suffix}
      </div>
      <p className="font-body-md text-on-surface-variant dark:text-on-surface-variant text-lg">
        {label}
      </p>
    </motion.div>
  );
}
