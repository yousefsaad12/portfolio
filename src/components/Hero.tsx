import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText } from "lucide-react";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const buttonRef = useRef<HTMLAnchorElement>(null);

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

  const particleCount =
    typeof window !== "undefined" && window.innerWidth < 640 ? 10 : 20;

  const floatingParticles = Array.from({ length: particleCount }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-green-500/20 rounded-full"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, Math.random() * 20 - 10, 0],
        opacity: [0.2, 0.8, 0.2],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
    />
  ));

  return (
    <motion.section
      className="relative overflow-hidden py-16 sm:py-20 md:py-28"
      style={{ y, opacity }}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingParticles}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ✅ Alignment fix — text left on md+ */}
        <div className="max-w-5xl mx-auto md:mx-0 md:text-left text-center">
          <div className="space-y-6 sm:space-y-8">
            {/* Title & subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-2 sm:space-y-3">
                <motion.h1
                  className="font-medium text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                >
                  Yousef Saad
                </motion.h1>

                <motion.p
                  className="text-sm sm:text-lg md:text-xl text-green-500"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Software Engineer & Backend Engineer
                </motion.p>
              </div>
            </motion.div>

            {/* "Precision & intent" */}
            <motion.h4
              className="font-medium text-center md:text-left leading-snug"
              style={{
                fontSize: "clamp(1rem, 3.5vw, 2rem)", // Reduced from 1.2rem/4vw/2.5rem
                lineHeight: "1.25",
                letterSpacing: "0.015em",
                wordSpacing: "0.03em",
                whiteSpace: "normal",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              <span className="block md:inline lg:inline">
                Building digital solutions
              </span>
              <br className="hidden md:hidden lg:hidden" />
              <span className="block md:inline lg:inline">
                {" "}
                with{" "}
                <motion.span
                  className="text-neutral-400 relative inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  whileHover={{
                    scale: 1.1,
                    color: "#22c55e",
                    textShadow: "0 0 20px rgba(34, 197, 94, 0.5)",
                  }}
                >
                  precision
                  <motion.div
                    className="absolute -inset-2 bg-green-500/10 rounded-lg -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>{" "}
                and{" "}
                <motion.span
                  className="italic relative inline-block"
                  style={{
                    fontFamily: "Dancing Script, cursive, serif",
                    letterSpacing: "0.04em",
                    lineHeight: "1.1",
                    wordSpacing: "0.08em",
                    fontSize: "clamp(1.2rem, 4vw, 2.5rem)", // Reduced from 1.4rem/4.5vw/3rem
                    fontWeight: "500",
                  }}
                  initial={{ opacity: 0, rotateY: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                  transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    textShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
                  }}
                >
                  intent.
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-lg -z-10 blur-sm"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              </span>
            </motion.h4>

            <div className="space-y-3 sm:space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.p
                  className="text-xs sm:text-sm text-neutral-400 max-w-2xl text-center md:text-left leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.4 }}
                  whileHover={{
                    color: "#a3a3a3",
                    scale: 1.02,
                  }}
                >
                  I started using computers around age 8, and from that moment,
                  I wondered how these machines worked and how the games I
                  played came to exist. That curiosity stayed with me throughout
                  my childhood. At 18, I decided to take the next step and
                  pursue computer science. Now, at 22, I've graduated with a
                  degree in computer science. The journey that began with
                  childhood wonder has transformed into real knowledge and
                  skills, ready to take on the world of technology.{" "}
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <motion.div
                  className="flex flex-row items-center justify-center md:justify-start gap-3 text-xs sm:text-sm text-neutral-400"
                  whileHover={{
                    scale: 1.05,
                    color: "#22c55e",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2">
                    <motion.span
                      className="hidden sm:inline"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 2,
                      }}
                    >
                      •
                    </motion.span>
                    <span>Based in Cairo, Egypt</span>
                  </div>

                  <motion.a
                    ref={buttonRef}
                    href="https://drive.google.com/file/d/1JLV5fQ8wi-mbpVT-r6m523eTmaQKvPCL/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-neutral-800 bg-neutral-950 px-4 sm:px-5 py-1 sm:py-1.5 text-xs transition-all duration-300 hover:bg-neutral-900 hover:shadow-lg hover:shadow-neutral-900/50 cursor-pointer magnetic-btn relative overflow-hidden flex items-center gap-1.5"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <FileText size={14} className="relative z-10" />
                    <span className="relative z-10">CV</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
