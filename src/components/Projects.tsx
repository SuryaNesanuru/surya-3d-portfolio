import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Caterpillar Parts eCommerce',
      description: 'A comprehensive eCommerce platform for heavy machinery parts with advanced search, filtering, and inventory management.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'TypeScript', 'Redux', 'Node.js', 'PostgreSQL'],
      features: [
        'Advanced parts catalog with 100k+ SKUs',
        'Real-time inventory tracking',
        'B2B pricing and bulk ordering',
        'Integration with ERP systems'
      ],
      metrics: {
        users: '50K+',
        conversion: '+35%',
        performance: '1.2s load time'
      }
    },
    {
      id: 2,
      title: 'Bed Bath & Beyond Redesign',
      description: 'Complete frontend redesign of the retail giant\'s web platform focusing on user experience and mobile optimization.',
      image: 'https://images.pexels.com/photos/4947563/pexels-photo-4947563.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'AWS'],
      features: [
        'Mobile-first responsive design',
        'Progressive Web App capabilities',
        'Advanced product recommendations',
        'Seamless checkout experience'
      ],
      metrics: {
        users: '2M+',
        conversion: '+42%',
        performance: '0.9s load time'
      }
    },
    {
      id: 3,
      title: 'Real-time Analytics Dashboard',
      description: 'Interactive dashboard for monitoring key business metrics with real-time data visualization and reporting.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'D3.js', 'Socket.io', 'Express', 'MongoDB'],
      features: [
        'Real-time data streaming',
        'Interactive charts and graphs',
        'Custom report generation',
        'Multi-tenant architecture'
      ],
      metrics: {
        users: '5K+',
        conversion: '+28%',
        performance: '0.8s load time'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing impactful solutions for enterprise clients and innovative personal projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 hover:border-primary/50 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
                >
                  <Eye size={20} />
                </motion.button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <Github size={16} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                    </motion.button>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-500">
                    {project.metrics.users} users
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {selectedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-white/20 p-6 bg-black/5 dark:bg-white/5"
                  >
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Features:</h4>
                    <ul className="space-y-2 mb-4">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-primary">{project.metrics.users}</div>
                        <div className="text-xs text-gray-500">Users</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-secondary">{project.metrics.conversion}</div>
                        <div className="text-xs text-gray-500">Conversion</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-accent">{project.metrics.performance}</div>
                        <div className="text-xs text-gray-500">Load Time</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;