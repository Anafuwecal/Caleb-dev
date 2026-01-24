import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SkillBar from '../common/SkillBar';
import Button from '../common/Button';
import { SKILLS } from '../../utils/constants';
import { PLACEHOLDERS } from '../../utils/placeholders';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  const aiSkills = SKILLS.filter((skill) => skill.category === 'ai');
  const graphicsSkills = SKILLS.filter((skill) => skill.category === 'graphics');
  const fullstackSkills = SKILLS.filter((skill) => skill.category === 'fullstack');

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-grayLight"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-primary rounded-2xl transform rotate-3" />
              
              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/images/hero/herot.jpg"
                  alt="Caleb Anafuwe - About"
                  className="w-full h-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = PLACEHOLDERS.about;
                  }}
                />
              </div>
              
              {/* Experience Badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 
                           bg-primary text-secondary p-4 sm:p-6 rounded-lg sm:rounded-xl 
                           shadow-xl z-20"
              >
                <p className="text-2xl sm:text-3xl font-bold">3+</p>
                <p className="text-xs sm:text-sm">Years of Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="heading-primary mb-6">About Me</h2>
            
            <p className="font-bold text-grayDark text-lg mb-6">
              I'm Caleb Anafuwe, a passionate AI Engineer, Full-Stack Developer,
              and Graphic Designer based in Nigeria. With over 3+ years of experience,
              I specialize in creating intelligent solutions and beautiful digital
              experiences that make a difference.
            </p>
            
            <p className="text-grayDark mb-8">
              My journey in tech started with a curiosity about how things work.
              Today, I combine artificial intelligence, modern web technologies,
              and creative design to build products that solve real-world problems.
              I believe in clean code, intuitive design, and continuous learning.
            </p>

            {/* Skills Section */}
            <div className="space-y-8 mb-8">
              {/* AI Engineering Skills */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  AI Engineering
                </h3>
                <div className="space-y-3">
                  {aiSkills.slice(0, 3).map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      percentage={skill.percentage}
                      delay={index * 100}
                    />
                  ))}
                </div>
              </div>

              {/* Graphics Design Skills */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  Graphics Design
                </h3>
                <div className="space-y-3">
                  {graphicsSkills.slice(0, 3).map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      percentage={skill.percentage}
                      delay={index * 100 + 300}
                    />
                  ))}
                </div>
              </div>

              {/* Full-Stack Development Skills */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  Full-Stack Development
                </h3>
                <div className="space-y-3">
                  {fullstackSkills.slice(0, 3).map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      percentage={skill.percentage}
                      delay={index * 100 + 600}
                    />
                  ))}
                </div>
              </div>
            </div>

            <Button href="/about" variant="primary">
              Learn More About Me
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;