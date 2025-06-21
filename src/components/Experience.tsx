import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Onward Technologies',
      location: 'Bangalore, India',
      period: '2024 - Present',
      description: 'Leading frontend development for enterprise clients including Caterpillar and Bed Bath & Beyond. Architecting scalable React applications and mentoring junior developers.',
      achievements: [
        'Increased user engagement by 45% through UX improvements',
        'Reduced page load times by 60% with performance optimizations',
        'Led team of 5 developers on major platform redesign'
      ],
      tech: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'AWS']
    },
    {
      title: 'Frontend Developer',
      company: 'TCS',
      location: 'Bangalore, India',
      period: '2022 - 2024',
      description: 'Developed responsive web applications using React and modern frontend technologies. Collaborated with design teams to implement pixel-perfect interfaces.',
      achievements: [
        'Built 15+ production-ready React components',
        'Implemented automated testing increasing code coverage to 85%',
        'Optimized bundle size reducing initial load by 40%'
      ],
      tech: ['React', 'JavaScript', 'Sass', 'Jest', 'Webpack']
    },
    {
      title: 'Junior Frontend Developer',
      company: 'Advanced Infoscan',
      location: 'Bangalore, India',
      period: '2021 - 2022',
      description: 'Contributed to the development of a SaaS platform serving 10,000+ users. Gained experience in modern React ecosystem and agile development practices.',
      achievements: [
        'Delivered 30+ features across 8 product releases',
        'Improved accessibility score to 95% WCAG compliance',
        'Reduced customer support tickets by 25% through better UX'
      ],
      tech: ['React', 'JavaScript', 'Bootstrap', 'Node.js', 'MongoDB']
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
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
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            4+ years of crafting exceptional digital experiences across diverse industries
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary rounded-full" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-gray-900 z-10" />

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="p-6 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg text-primary font-semibold mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div className="flex items-center mb-1">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                        <Award size={16} className="mr-2 text-primary" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;