import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { jobs } from '../data/employment';

const Employment: React.FC = () => {

  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <motion.h2 
                className="text-xl font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Experience
              </motion.h2>
            </div>
          </motion.div>
          <motion.div 
            className="relative mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="absolute left-3 md:left-6 top-0 h-full w-[2px] bg-gradient-to-b from-green-500/10 via-neutral-800 to-green-500/10"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6 }}
            />
            <div className="space-y-12">
              {jobs.map((job, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.8 + index * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <motion.div 
                    className="relative group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="absolute left-3 md:left-6 top-6 h-[2px] w-4 md:w-6 bg-neutral-800 group-hover:bg-neutral-700 transition-colors"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                    />
                    <motion.div 
                      className="absolute left-2 md:left-5 top-5 flex h-[14px] w-[14px] items-center justify-center"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                    >
                      <motion.div 
                        className="h-full w-full rounded-full border border-neutral-800 bg-neutral-950 group-hover:border-neutral-700 transition-colors"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      />
                      <motion.div 
                        className="absolute h-1.5 w-1.5 rounded-full bg-green-500/50 group-hover:bg-green-500 transition-colors"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 1.4 + index * 0.2 }}
                      />
                    </motion.div>
                    <motion.div 
                      className="ml-10 md:ml-16 group-hover:translate-x-0.5 transition-transform"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                        <div className="space-y-1">
                          <motion.div 
                            className="flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.8 + index * 0.2 }}
                          >
                            <motion.h3 
                              className="text-sm font-medium"
                              whileHover={{ scale: 1.05, color: "#ffffff" }}
                            >
                              {job.title}
                            </motion.h3>
                            {job.link && (
                              <motion.div 
                                className="group/link"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <a target="_blank" href={job.link}>
                                  <motion.div
                                    whileHover={{ rotate: 45 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <ArrowUpRight className="h-3.5 w-3.5 text-neutral-600 transition-colors group-hover/link:text-purple-500" />
                                  </motion.div>
                                </a>
                              </motion.div>
                            )}
                          </motion.div>
                          <motion.div 
                            className="flex flex-wrap items-center gap-1.5"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 2 + index * 0.2 }}
                          >
                            <span className="text-xs text-neutral-400">{job.role}</span>
                            <span className="text-xs text-neutral-600">•</span>
                            <span className="text-xs text-neutral-500">{job.type}</span>
                          </motion.div>
                        </div>
                        <motion.span 
                          className="text-xs text-neutral-500 sm:text-right whitespace-nowrap"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 2.2 + index * 0.2 }}
                        >
                          {job.period}
                        </motion.span>
                      </div>
                      <motion.p 
                        className="mt-2 text-xs text-neutral-400 max-w-2xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 2.4 + index * 0.2 }}
                        whileHover={{ color: "#a3a3a3" }}
                      >
                        {job.description}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Employment;
