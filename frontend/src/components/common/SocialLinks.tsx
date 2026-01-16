import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../utils/constants';

interface SocialLinksProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
}) => {
  const iconMap: Record<string, React.ElementType> = {
    linkedin: FaLinkedinIn,
    github: FaGithub,
    twitter: FaTwitter,
    instagram: FaInstagram,
  };

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map((social) => {
        const Icon = iconMap[social.icon];
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              ${sizeClasses[size]} rounded-full flex items-center justify-center
              transition-all duration-300 transform hover:scale-110
              ${
                variant === 'dark'
                  ? 'bg-primary text-secondary hover:bg-grayDark'
                  : 'bg-secondary text-primary hover:bg-grayLight'
              }
            `}
            aria-label={social.name}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;