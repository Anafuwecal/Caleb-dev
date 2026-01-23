import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import SocialLinks from '../common/SocialLinks';
import { CONTACT_INFO } from '../../utils/constants';
import { PLACEHOLDERS } from '../../utils/placeholders';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-secondary via-grayLight to-secondary">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-grayDark font-medium mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4"
            >
              Caleb Anafuwe
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              <span className="px-4 py-2 bg-primary text-secondary rounded-full text-sm font-medium">
                AI Engineer
              </span>
              <span className="px-4 py-2 bg-grayDark text-secondary rounded-full text-sm font-medium">
                Full-Stack Developer
              </span>
              <span className="px-4 py-2 border-2 border-primary text-primary rounded-full text-sm font-medium">
                Graphic Designer
              </span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-grayDark text-lg mb-8 max-w-lg"
            >
              I craft intelligent solutions, build scalable web applications,
              and design compelling visuals that bring ideas to life.
              Let's create something extraordinary together.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button
                href={CONTACT_INFO.serviceFormUrl}
                external
                variant="primary"
                size="lg"
              >
                Get Started
              </Button>
              <Button href="/portfolio" variant="outline" size="lg">
                View Portfolio
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-grayDark text-sm mb-3">Follow me on</p>
              <SocialLinks variant="dark" size="md" />
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Background Decorations */}
              <div className="absolute -top-4 -left-4 w-72 h-72 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -right-4 w-48 h-48 md:w-64 md:h-64 bg-grayDark/10 rounded-full blur-2xl" />
              
              {/* Main Image */}
              <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[40px] overflow-hidden border-4 border-primary shadow-2xl bg-grayLight">
                <img
                  src="/assets/images/hero/hero-image.jpg"
                  alt="Caleb Anafuwe"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = PLACEHOLDERS.hero;
                  }}
                />
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;