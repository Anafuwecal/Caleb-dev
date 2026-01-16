import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  FaBrain,
  FaCode,
  FaPalette,
  FaLayerGroup,
  FaMobile,
  FaUsers,
  FaCheck,
} from 'react-icons/fa';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { SERVICES, CONTACT_INFO } from '../utils/constants';

const iconMap: Record<string, React.ElementType> = {
  brain: FaBrain,
  code: FaCode,
  palette: FaPalette,
  layout: FaLayerGroup,
  smartphone: FaMobile,
  users: FaUsers,
};

const ServicesPage: React.FC = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your goals, requirements, and vision for the project.',
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Creating a detailed roadmap, timeline, and strategy for successful delivery.',
    },
    {
      step: '03',
      title: 'Design & Development',
      description: 'Bringing your vision to life with cutting-edge technology and creative design.',
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Rigorous testing followed by a smooth deployment and ongoing support.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services | Caleb Anafuwe - AI, Web Development & Design</title>
        <meta
          name="description"
          content="Professional services in AI Engineering, Full-Stack Web Development, Graphic Design, UI/UX Design, and Mobile Development. Get started with your project today."
        />
        <link rel="canonical" href="https://calebanafuwe.com/services" />
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
              Services I Offer
            </h1>
            <p className="text-grayMedium text-lg md:text-xl max-w-3xl mx-auto mb-8">
              From AI-powered solutions to stunning web applications and creative designs,
              I provide comprehensive services to transform your ideas into reality.
            </p>
            <Button
              href={CONTACT_INFO.serviceFormUrl}
              external
              variant="secondary"
              size="lg"
            >
              Request a Service
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group hover:bg-primary transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary group-hover:bg-secondary rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon className="text-3xl text-secondary group-hover:text-primary transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary group-hover:text-secondary mb-4 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-grayDark group-hover:text-grayMedium mb-6 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-grayDark group-hover:text-grayMedium transition-colors duration-300"
                      >
                        <FaCheck className="text-primary group-hover:text-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    href={CONTACT_INFO.serviceFormUrl}
                    external
                    variant="outline"
                    className="w-full group-hover:bg-secondary group-hover:text-primary group-hover:border-secondary"
                  >
                    Get Started
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-grayLight">
        <div className="section-container">
          <SectionHeading
            title="My Work Process"
            subtitle="A structured approach to ensure successful project delivery every time."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-primary text-secondary rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-primary/30 -translate-y-1/2" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-grayDark">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="section-padding bg-primary text-secondary">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-grayMedium text-lg mb-8">
                Let's discuss your requirements and create something amazing together.
                I offer competitive pricing and flexible packages tailored to your needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  href={CONTACT_INFO.serviceFormUrl}
                  external
                  variant="secondary"
                  size="lg"
                >
                  Request a Quote
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-primary">
                  Contact Me
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-grayDark/50 rounded-xl p-6 text-center">
                <p className="text-4xl font-bold mb-2">50+</p>
                <p className="text-grayMedium">Projects Completed</p>
              </div>
              <div className="bg-grayDark/50 rounded-xl p-6 text-center">
                <p className="text-4xl font-bold mb-2">30+</p>
                <p className="text-grayMedium">Happy Clients</p>
              </div>
              <div className="bg-grayDark/50 rounded-xl p-6 text-center">
                <p className="text-4xl font-bold mb-2">5+</p>
                <p className="text-grayMedium">Years Experience</p>
              </div>
              <div className="bg-grayDark/50 rounded-xl p-6 text-center">
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-grayMedium">Client Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;