import React, { useRef, useState, useEffect } from "react";
import { Music, X } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { navItems } from "../data/navigation";
import yousefImage from "../assets/yousef.jpeg";

const Navbar: React.FC = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isImageOpen, setIsImageOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 100], [0, -20]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0.8]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (isImageOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isImageOpen]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const moveX = x * 0.35;
    const moveY = y * 0.35;

    const rotation = Math.atan2(y, x) * (180 / Math.PI) * 0.1;

    buttonRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.08) rotate(${rotation}deg)`;
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = "translate(0px, 0px) scale(1)";
    }
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const cursorTrail = Array.from({ length: 5 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-green-500/30 rounded-full pointer-events-none"
      style={{
        left: mousePosition.x - 4,
        top: mousePosition.y - 4,
      }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 0.8, 0],
      }}
      transition={{
        duration: 0.5,
        delay: i * 0.1,
        repeat: Infinity,
        repeatDelay: 2,
      }}
    />
  ));

  return (
    <>
      {/* Floating cursor trail */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {cursorTrail}
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {isImageOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setIsImageOpen(false)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-green-500 transition-colors z-[101]"
              onClick={() => setIsImageOpen(false)}
            >
              <X size={32} />
            </button>

            {/* Fullscreen Image */}
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={yousefImage}
              alt="Yousef Saad"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        className="w-full backdrop-blur-sm mt-4 sm:mt-6 md:mt-8 relative z-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ y, opacity, scale }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between gap-4 md:gap-3 lg:gap-6 py-3 sm:py-4">
            {/* Left Side - Avatar + Name + Music */}
            <motion.div
              className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-center gap-2 sm:gap-3 md:gap-3 lg:gap-3 md:w-full lg:w-auto md:justify-center lg:justify-start"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Profile Image - Simple, No Animation, Clickable for Fullscreen */}
              <div
                onClick={() => setIsImageOpen(true)}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-neutral-800 overflow-hidden cursor-pointer transition-opacity hover:opacity-80"
              >
                <img
                  src={yousefImage}
                  alt="Yousef Saad"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 25%" }}
                />
              </div>

              {/* Name */}
              <motion.span
                className="text-xs sm:text-sm text-neutral-200 text-center sm:text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{
                  scale: 1.05,
                  color: "#ffffff",
                }}
              >
                Hey, I'm{" "}
                <motion.span
                  className="text-green-500"
                  whileHover={{
                    color: "#22c55e",
                    textShadow: "0 0 10px rgba(34, 197, 94, 0.5)",
                  }}
                >
                  Yousef Saad
                </motion.span>
                .
              </motion.span>
            </motion.div>

            {/* Right Side - Navigation + Button */}
            <motion.div
              className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-center gap-3 sm:gap-4 md:w-full lg:w-auto md:justify-center lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Navigation Links */}
              <div className="flex flex-row items-center gap-3 sm:gap-4">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.name}
                      target="_blank"
                      className="group relative transform transition-all duration-500 hover:-translate-y-1 hover:scale-105"
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      whileHover={{
                        y: -3,
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Hover background effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-lg -z-10"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      <span className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-neutral-400 hover:text-white transition-all duration-500 relative z-10">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon
                            size={14}
                            className="stroke-[1.5px] transition-transform duration-500 group-hover:scale-110 sm:w-4 sm:h-4"
                          />
                        </motion.div>
                        <motion.span
                          className="transition-transform duration-500 group-hover:translate-x-0.5"
                          whileHover={{ x: 2 }}
                        >
                          {item.name}
                        </motion.span>
                      </span>
                    </motion.a>
                  );
                })}
              </div>

              {/* Get in Touch Button */}
              <motion.a
                ref={buttonRef}
                className="rounded-full border border-neutral-800 bg-neutral-950 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs transition-all duration-300 hover:bg-neutral-900 hover:shadow-lg hover:shadow-neutral-900/50 cursor-pointer magnetic-btn relative overflow-hidden"
                onClick={() => scrollToSection("#solopreneur")}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.1 }}
                />
                <span className="relative z-10">Get in Touch</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
