import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { PLACEHOLDERS } from '../utils/placeholders'
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
} from 'react-icons/fa';
import Button from '../components/common/Button';
import SocialLinks from '../components/common/SocialLinks';
import { useForm } from '../hooks/useForm';
import { CONTACT_INFO } from '../utils/constants';
import { isValidEmail, formatPhoneNumber } from '../utils/helpers';
import { sendContactMessage } from '../services/api';
import type { ContactFormData } from '../types';

const ContactPage: React.FC = () => {
  const validate = (values: ContactFormData): Partial<Record<keyof ContactFormData, string>> => {
    const errors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!values.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!values.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(values.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!values.country.trim()) {
      errors.country = 'Country is required';
    }

    if (!values.message.trim()) {
      errors.message = 'Message is required';
    } else if (values.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    return errors;
  };

  const handleSubmit = async (values: ContactFormData) => {
    try {
      await sendContactMessage(values);
      toast.success("Message sent successfully! I'll get back to you soon.");
    } catch {
      toast.error('Failed to send message. Please try again.');
    }
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit: onSubmit } = useForm<ContactFormData>({
    initialValues: {
      name: '',
      email: '',
      country: '',
      message: '',
    },
    onSubmit: handleSubmit,
    validate,
  });

  return (
    <>
      <Helmet>
        <title>Contact | Caleb Anafuwe - Get in Touch</title>
        <meta
          name="description"
          content="Get in touch with Caleb Anafuwe for AI engineering, web development, or graphic design projects."
        />
        <link rel="canonical" href="https://calebanafuwe.com/contact" />
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
              Get in Touch
            </h1>
            <p className="text-grayMedium text-lg md:text-xl max-w-3xl mx-auto">
              Have a question or want to work together? I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.62283124574!2d3.1438721!3d6.5480357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1679000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Image & Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="relative mb-8">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  // In the image section, update the onError handler:
                  <img
                    src="/assets/images/caleb-contact.jpg"
                    alt="Contact Caleb"
                    className="w-full h-auto"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = PLACEHOLDERS.contact;
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-2xl -z-10" />
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="heading-secondary">Contact Information</h2>
                
                <div className="space-y-4">
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex items-center gap-4 p-4 bg-grayLight rounded-xl hover:bg-primary hover:text-secondary transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary group-hover:bg-secondary rounded-lg flex items-center justify-center">
                      <FaPhone className="text-secondary group-hover:text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-grayDark group-hover:text-grayMedium">Phone</p>
                      <p className="font-medium">{formatPhoneNumber(CONTACT_INFO.phone)}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-4 p-4 bg-grayLight rounded-xl hover:bg-primary hover:text-secondary transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary group-hover:bg-secondary rounded-lg flex items-center justify-center">
                      <FaEnvelope className="text-secondary group-hover:text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-grayDark group-hover:text-grayMedium">Email</p>
                      <p className="font-medium break-all">{CONTACT_INFO.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-grayLight rounded-xl">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <FaMapMarkerAlt className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-grayDark">Location</p>
                      <p className="font-medium">{CONTACT_INFO.location}</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <p className="text-grayDark mb-3">Follow me on social media</p>
                  <SocialLinks variant="dark" size="md" />
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card">
                <h2 className="heading-secondary mb-6">Send a Message</h2>
                <p className="text-grayDark mb-8">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>

                <form onSubmit={onSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`input-field ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Country Field */}
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-primary mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={values.country}
                      onChange={handleChange}
                      placeholder="Enter your country"
                      className={`input-field ${errors.country ? 'border-red-500 focus:ring-red-500' : ''}`}
                    />
                    {errors.country && (
                      <p className="mt-1 text-sm text-red-500">{errors.country}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows={5}
                      className={`input-field resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      loading={isSubmitting}
                      className="flex-1"
                    >
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </Button>
                    <Button
                      href={CONTACT_INFO.serviceFormUrl}
                      external
                      variant="outline"
                      size="lg"
                      className="flex-1"
                    >
                      Request a Service
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;