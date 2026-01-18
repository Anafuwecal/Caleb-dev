import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { PLACEHOLDERS } from '../utils/placeholders';
import Button from '../components/common/Button';
import { PROJECTS, CONTACT_INFO } from '../utils/constants';

type CategoryFilter = 'all' | 'web' | 'ai' | 'design';

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const filters: { value: CategoryFilter; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'ai', label: 'AI & ML' },
    { value: 'design', label: 'Design' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Portfolio | Caleb Anafuwe - Projects & Work</title>
        <meta
          name="description"
          content="Explore Caleb Anafuwe's portfolio of AI, web development, and design projects."
        />
        <link rel="canonical" href="https://calebanafuwe.com/portfolio" />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-grayDark text-secondary">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              My Portfolio
            </h1>
            <p className="text-grayMedium text-lg md:text-xl max-w-3xl mx-auto">
              A collection of my best work in AI engineering, web development,
              and graphic design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="section-padding">
        <div className="section-container">
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.value
                    ? 'bg-primary text-secondary'
                    : 'bg-grayLight text-grayDark hover:bg-primary hover:text-secondary'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="card overflow-hidden group"
                >
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden rounded-lg mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = PLACEHOLDERS.project;
                      }}
                    />
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform"
                      >
                        <FaGithub size={24} />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform"
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      project.category === 'web'
                        ? 'bg-blue-100 text-blue-700'
                        : project.category === 'ai'
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-pink-100 text-pink-700'
                    }`}
                  >
                    {project.category === 'web'
                      ? 'Web Development'
                      : project.category === 'ai'
                      ? 'AI & ML'
                      : 'Design'}
                  </span>

                  {/* Project Info */}
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-grayDark mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stacks.map((stack, idx) => (
                      <span
                        key={idx}
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
                      className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-secondary transition-colors font-medium"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-secondary rounded-lg hover:bg-grayDark transition-colors font-medium"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-grayLight">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-primary mb-4">Have a Project in Mind?</h2>
            <p className="text-grayDark text-lg mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new and challenging projects.
            </p>
            <Button
              href={CONTACT_INFO.serviceFormUrl}
              external
              variant="primary"
              size="lg"
            >
              Start a Project
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;