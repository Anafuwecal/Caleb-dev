import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PLACEHOLDERS } from '../utils/placeholders';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from '../components/common/SectionHeading';
import SkillBar from '../components/common/SkillBar';
import Button from '../components/common/Button';
import { SKILLS, CONTACT_INFO } from '../utils/constants';

const AboutPage: React.FC = () => {
  const skillsRef = useRef<HTMLElement>(null);
  const isSkillsVisible = useScrollAnimation(skillsRef);

  const experiences = [
    {
      year: 'OCTOBER 2024 - CURRENT',
      title: 'FULL-STACK DEVELOPER',
      company: 'VYRE.AFRICA',
      description: 'Deployed, maintained and Collaborated with cross-functional teams to ensure code quality through Git version control and code reviews.',
    },
    {
      year: 'JUNE 2024 – SEPT 2024',
      title: 'FRONT-END DEVELOPER',
      company: 'MICROGRAPHIA',
      description: 'Established responsive web pages optimized for different devices and built best practices for coding standards within team environment.',
    },
    {
      year: 'JANUARY 2025 - MAY 2025',
      title: 'Graphic Designer',
      company: 'MEGAFROST FOOD',
      description: 'Created brand identities, marketing materials, and UI designs for various clients.',
    },
  ];

  const education = [
    {
      year: '2025',
      degree: 'B.Sc. Management Information Technology',
      institution: 'ESAE University',
      description: 'Graduated with Second Class Honours, focusing on AI and Software Technologies.',
    },
    {
      year: '2025',
      degree: 'Fullstack Development',
      institution: 'Regonet.Global',
      description: 'Completed advanced courses in Frontend and Backend Development.',
    },
  ];

  const aiSkills = SKILLS.filter((skill) => skill.category === 'ai');
  const graphicsSkills = SKILLS.filter((skill) => skill.category === 'graphics');
  const fullstackSkills = SKILLS.filter((skill) => skill.category === 'fullstack');

  return (
    <>
      <Helmet>
        <title>About Caleb Anafuwe | AI Engineer & Full-Stack Developer</title>
        <meta
          name="description"
          content="Learn about Caleb Anafuwe's journey as an AI Engineer, Full-Stack Developer, and Graphic Designer."
        />
        <link rel="canonical" href="https://calebanafuwe.com/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-grayLight to-secondary">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/images/hero/herot.jpg"
                  alt="Caleb Anafuwe"
                  className="w-full h-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = PLACEHOLDERS.about;
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary rounded-2xl -z-0" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="heading-primary mb-6">About Me</h1>
              <p className="font-bold text-grayDark text-lg mb-6">
                Hi! I'm Caleb Anafuwe, a passionate technologist and creative
                professional based in Nigeria. With over 3+ years of experience
                in the tech industry, I've had the privilege of working on
                diverse projects ranging from AI-powered applications to
                stunning brand identities.
              </p>
              <p className="text-grayDark mb-6">
                My journey began with a fascination for how technology can solve
                real-world problems. This curiosity led me to explore artificial
                intelligence, web development, and graphic design.
              </p>
              <p className="text-grayDark mb-8">
                When I'm not coding or designing, you'll find me exploring new
                technologies, contributing to open-source projects, or mentoring
                aspiring developers.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button
                  href={CONTACT_INFO.serviceFormUrl}
                  external
                  variant="primary"
                >
                  Hire Me
                </Button>
                <Button href="/portfolio" variant="outline">
                  View My Work
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="section-padding">
        <div className="section-container">
          <SectionHeading
            title="My Skills"
            subtitle="A comprehensive overview of my technical expertise across AI, development, and design."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSkillsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* AI Engineering */}
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-bold text-primary">AI Engineering</h3>
              </div>
              <div className="space-y-4">
                {aiSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>

            {/* Graphics Design */}
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-bold text-primary">Graphics Design</h3>
              </div>
              <div className="space-y-4">
                {graphicsSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={index * 100 + 400}
                  />
                ))}
              </div>
            </div>

            {/* Full-Stack Development */}
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-bold text-primary">Full-Stack Dev</h3>
              </div>
              <div className="space-y-4">
                {fullstackSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={index * 100 + 800}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-grayLight">
        <div className="section-container">
          <SectionHeading
            title="Work Experience"
            subtitle="My professional journey and the roles that shaped my expertise."
          />

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-8 border-l-2 border-primary last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-secondary rounded-full" />
                </div>
                <div className="card">
                  <span className="inline-block px-3 py-1 bg-primary text-secondary text-sm rounded-full mb-3">
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-bold text-primary mb-1">{exp.title}</h3>
                  <p className="text-grayDark font-medium mb-2">{exp.company}</p>
                  <p className="text-grayDark">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            title="Education & Certifications"
            subtitle="Academic background and professional certifications."
          />

          <div className="max-w-3xl mx-auto grid gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card flex flex-col md:flex-row gap-6"
              >
                <div className="flex-shrink-0">
                  <span className="inline-block px-4 py-2 bg-primary text-secondary font-bold rounded-lg">
                    {edu.year}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">{edu.degree}</h3>
                  <p className="text-grayDark font-medium mb-2">{edu.institution}</p>
                  <p className="text-grayDark">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-secondary">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-grayMedium text-lg mb-8 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'm available for freelance
              projects, full-time positions, and collaborations.
            </p>
            <Button
              href={CONTACT_INFO.serviceFormUrl}
              external
              variant="secondary"
              size="lg"
            >
              Get Started Now
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;