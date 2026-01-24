import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Logo from '../common/Logo';
import Button from '../common/Button';
import SocialLinks from '../common/SocialLinks';
import { CONTACT_INFO } from '../../utils/constants';
import { isValidEmail, formatPhoneNumber } from '../../utils/helpers';
import { subscribeNewsletter } from '../../services/api';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    try {
      await subscribeNewsletter(email);
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-primary text-secondary">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Get Started */}
          <div className="space-y-6">
            <Logo variant="light" size="lg" />
            <p className="text-grayMedium">
              AI Engineer, Full-Stack Developer & Graphic Designer crafting
              digital experiences that inspire.
            </p>
            <Button
              href={CONTACT_INFO.serviceFormUrl}
              external
              variant="secondary"
              size="md"
            >
              Get Started
            </Button>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Support</h3>
            <div className="space-y-4">
              <div>
                <p className="text-grayMedium text-sm mb-1">Phone</p>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-grayMedium transition-colors"
                >
                  {formatPhoneNumber(CONTACT_INFO.phone)}
                </a>
              </div>
              <div>
                <p className="text-grayMedium text-sm mb-1">Email</p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-grayMedium transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
            <SocialLinks variant="light" size="sm" />
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold">Subscribe to Newsletter</h3>
            <p className="text-grayMedium">
              Be updated with all the latest trends, products, and insights
              in AI, web development, and design.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-grayDark text-secondary 
                         placeholder-grayMedium focus:outline-none focus:ring-2 
                         focus:ring-secondary"
                required
              />
              <Button
                type="submit"
                variant="secondary"
                loading={isLoading}
                className="w-full sm:w-auto"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-grayDark text-center">
          <p className="text-grayMedium">
            © {new Date().getFullYear()} Caleb Anafuwe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;