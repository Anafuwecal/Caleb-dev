import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeading from '../common/SectionHeading';
import { PROJECTS } from '../../utils/constants';

const PortfolioSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  // Split projects into two rows for zigzag effect
  const firstRowProjects = PROJECTS.filter((_, index) => index % 2 === 0);
  const secondRowProjects = PROJECTS.filter((_, index) => index % 2 !== 0);

  const ProjectCard: React.FC<{ project: (typeof PROJECTS)[0]; reverse?: boolean }> = ({
    project,
    reverse = false,
  }) => (
    <div
      className={`flex-shrink-0 w-80 md:w-96 mx-4 ${
        reverse ? 'mt-12' : ''
      }`}
    >
      <div className="card overflow-hidden group">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden rounded-lg mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          </div>
        </div>

        {/* Project Info */}
        <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
        <p className="text-grayDark text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stacks.slice(0, 4).map((stack, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-grayLight text-grayDark text-xs rounded-full"
            >
              {stack}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-secondary transition-colors text-sm font-medium"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 bg-primary text-secondary rounded-lg hover:bg-grayDark transition-colors text-sm font-medium"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="section-padding bg-grayLight overflow-hidden"
    >
      <div className="section-container mb-12">
        <SectionHeading
          title="Featured Projects"
          subtitle="A showcase of my recent work in AI, web development, and design.
                   Each project represents a unique challenge and creative solution."
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* First Row - Left to Right */}
        <Marquee speed={40} gradient={false} className="mb-8">
          {firstRowProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Marquee>

        {/* Second Row - Right to Left (Zigzag) */}
        <Marquee speed={40} gradient={false} direction="right">
          {secondRowProjects.map((project) => (
            <ProjectCard key={project.id} project={project} reverse />
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
};

export default PortfolioSection;