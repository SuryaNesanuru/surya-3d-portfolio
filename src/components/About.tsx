import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Heart, Target } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimizing for speed and user experience'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'User-Centric',
      description: 'Creating interfaces that users love to interact with'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Goal-Oriented',
      description: 'Delivering solutions that meet business objectives'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Frontend Developer with 4+ years of experience building modern web applications. 
            I specialize in React, Next.js, and TypeScript, creating seamless user experiences that blend 
            beautiful design with robust functionality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              My passion for web development began with curiosity about how websites work. Over the years, 
              I've evolved from writing simple HTML pages to architecting complex React applications for 
              enterprise clients like Caterpillar and Bed Bath & Beyond.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies. My approach 
              combines technical expertise with creative problem-solving to deliver exceptional digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-lg border border-white/20 flex items-center justify-center">
              <div className="w-60 h-60 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-6xl font-bold">
                Surya
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-primary mb-4">{item.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;