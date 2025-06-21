import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, color: '#61DAFB', code: 'const App = () => <div>Hello React!</div>' },
        { name: 'TypeScript', level: 90, color: '#3178C6', code: 'interface User { name: string; age: number; }' },
        { name: 'Next.js', level: 88, color: '#000000', code: 'export default function Page() { return <h1>Next.js</h1> }' },
        { name: 'Tailwind CSS', level: 92, color: '#06B6D4', code: 'className="flex items-center justify-center"' },
      ]
    },
    {
      title: 'State Management',
      skills: [
        { name: 'Redux', level: 85, color: '#764ABC', code: 'const store = configureStore({ reducer: rootReducer })' },
        { name: 'Zustand', level: 80, color: '#FF6B6B', code: 'const useStore = create((set) => ({ count: 0 }))' },
      ]
    },
    {
      title: 'Testing & Tools',
      skills: [
        { name: 'Jest', level: 82, color: '#C21325', code: 'test("should render component", () => { ... })' },
        { name: 'GraphQL', level: 75, color: '#E10098', code: 'query GetUser($id: ID!) { user(id: $id) { name } }' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
                {category.title}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                    className="p-6 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 hover:border-primary/50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </h4>
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>

                    <AnimatePresence>
                      {selectedSkill === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 p-3 rounded-lg bg-gray-800 dark:bg-gray-900 font-mono text-sm text-green-400 overflow-hidden"
                        >
                          <code>{skill.code}</code>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;