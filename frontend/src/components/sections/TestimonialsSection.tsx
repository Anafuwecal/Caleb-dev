import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { FaQuoteLeft } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeading from '../common/SectionHeading';
import { TESTIMONIALS } from '../../utils/constants';

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  const TestimonialCard: React.FC<{ testimonial: (typeof TESTIMONIALS)[0] }> = ({
    testimonial,
  }) => (
    <div className="flex-shrink-0 w-80 md:w-96 mx-4">
      <div className="card h-full">
        {/* Company Logo */}
        <div className="h-12 mb-6">
          <img
            src={testimonial.logo}
            alt={testimonial.company}
            className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>

        {/* Quote Icon */}
        <FaQuoteLeft className="text-3xl text-primary/20 mb-4" />

        {/* Quote */}
        <p className="text-grayDark mb-6 italic leading-relaxed">
          "{testimonial.quote}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4 pt-4 border-t border-grayLight">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-bold text-primary">{testimonial.name}</p>
            <p className="text-sm text-grayDark">
              {testimonial.position} at {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="section-padding overflow-hidden"
    >
      <div className="section-container mb-12">
        <SectionHeading
          title="Client Testimonials"
          subtitle="What my clients say about working with me.
                   Their success is my greatest achievement."
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Marquee speed={30} gradient={false} pauseOnHover>
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;