import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { technologies } from '../data/technologies';

const Stack: React.FC = () => {
  // Enhanced 3D Magnetic card component
  const MagneticCard: React.FC<{ tech: typeof technologies[0]; index: number }> = ({ 
    tech, 
    index 
  }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
    const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
    
    const springConfig = { damping: 25, stiffness: 200 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      mouseX.set(distanceX * 0.3);
      mouseY.set(distanceY * 0.3);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ 
          duration: 0.8,
          delay: index * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        className="cursor-pointer"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          ref={cardRef}
          className="flex flex-col items-center space-y-2 rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-center group hover:bg-neutral-900/50 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-900/50 magnetic-btn relative overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          style={{ 
            x,
            y,
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
          whileHover={{ 
            scale: 1.05,
            z: 50,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-neutral-500/10 via-neutral-600/10 to-neutral-700/10 rounded-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Floating particles effect */}
          {isHovered && (
            <>
              {Array.from({ length: 6 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-neutral-400/60 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.random() * 10 - 5, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              ))}
            </>
          )}

          <motion.div 
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 relative z-10"
            whileHover={{ 
              rotate: 360,
              scale: 1.1
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.3,
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 0.4 }}
              style={{ color: tech.color }}
            >
              <tech.icon size={20} />
            </motion.div>
            
            {/* Icon glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-neutral-500/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.2, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <motion.h3 
              className="text-sm font-medium"
              whileHover={{ 
                scale: 1.05
              }}
            >
              {tech.name}
            </motion.h3>
            <motion.p 
              className="text-xs text-neutral-400"
              whileHover={{ 
                color: "#a3a3a3",
                scale: 1.02
              }}
            >
              {tech.category}
            </motion.p>
          </motion.div>

          {/* Hover border effect */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-neutral-500/50"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <motion.section 
      id="stack" 
      className="py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <motion.h2 
                className="text-xl font-medium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Stack
              </motion.h2>
            </div>
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {technologies.map((tech, index) => (
              <MagneticCard key={index} tech={tech} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Stack;
