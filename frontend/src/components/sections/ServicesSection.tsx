import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaCode, 
  FaPalette, 
  FaLayerGroup, 
  FaMobile, 
  FaUsers 
} from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { SERVICES, CONTACT_INFO } from '../../utils/constants';

const iconMap: Record<string, React.ElementType> = {
  brain: FaBrain,
  code: FaCode,
  palette: FaPalette,
  layout: FaLayerGroup,
  smartphone: FaMobile,
  users: FaUsers,
};

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={sectionRef} id="services" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="Services I Offer"
          subtitle="From AI solutions to web development and creative design,
                   I provide comprehensive services to bring your vision to life."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="card group hover:bg-primary"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary group-hover:bg-secondary rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="text-2xl text-secondary group-hover:text-primary transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary group-hover:text-secondary mb-4 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-grayDark group-hover:text-grayMedium mb-6 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-grayDark group-hover:text-grayMedium transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 bg-primary group-hover:bg-secondary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  href={CONTACT_INFO.serviceFormUrl}
                  external
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-secondary group-hover:text-primary group-hover:border-secondary"
                >
                  Get Started
                </Button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;