'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Blog({
  title,
  summary,
  link,
  image,
}: {
  title: string;
  summary: string;
  link: string;
  image: string;
}) {
  // Ref for the scroll target
  const ref = useRef<HTMLDivElement>(null);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Apply transformations
  const scaleProgress = useTransform(scrollYProgress || 0, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress || 0, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <motion.div
        whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)" }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative flex flex-col rounded-xl bg-gray-100 text-black shadow-md dark:bg-gray-800 dark:shadow-lg w-full h-[400px] sm:h-[400px]" // Set fixed width and height
      >
        {/* Card Header */}
        <motion.div
          className="relative w-full h-48 overflow-hidden rounded-xl shadow-lg"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>

        {/* Card Body */}
        <div className="p-6 flex-1">
          <motion.h5
            className="mb-2 block text-xl font-semibold leading-snug dark:text-white text-black"
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h5>
          <p className="block text-base leading-relaxed dark:text-gray-300 text-black">
            {summary}
          </p>
        </div>

        {/* Card Button */}
        <div className="p-6 pt-0">
          <a href={link} target="_blank" rel="noopener noreferrer" >
            <motion.button
              type="button"
              className="select-none rounded-lg dark:bg-white/10 dark:text-white/60 py-3 px-6 text-center font-sans text-xs font-bold uppercase text-black dark:text-white shadow-md transition-all hover:bg-gray-200 focus:opacity-90 active:opacity-80"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#BFBFBF", // Darker blue on hover
              }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
            </motion.button>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
