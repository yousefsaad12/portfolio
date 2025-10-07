import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  

  return (
    <motion.section 
      id="working-on" 
      className="container mt-12 sm:mt-16 mb-12 sm:mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="space-y-4">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-xl font-medium">Projects</h2>
          </div>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div 
              className="h-full" 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.a
                target="_blank"
                className="group block h-full rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden transition-colors hover:bg-neutral-900 hover:border-neutral-700"
                href={project.href}
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                {/* Image */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  <motion.img 
                    src={project.image}
                    alt={project.title}
                    className="h-32 w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Content */}
                <div className="p-4 flex h-full items-start justify-between">
                  <div className="flex flex-col h-full">
                    <h3 className="text-sm font-medium">{project.title}</h3>
                    <p className="mt-0.5 text-xs text-neutral-400">{project.description}</p>

                    {/* Tags */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag text-[10px] py-0.5">{tag}</span>
                        ))}
                      </div>
                    )}

                  </div>
                  <div>
                  {project.href && (
                              <motion.div 
                                className="group/link"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <a target="_blank" href={project.href}>
                                  <motion.div
                                    whileHover={{ rotate: 45 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <ArrowUpRight className="h-3.5 w-3.5 text-neutral-600 transition-colors group-hover/link:text-purple-500" />
                                  </motion.div>
                                </a>
                              </motion.div>
                            )}
                    
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;