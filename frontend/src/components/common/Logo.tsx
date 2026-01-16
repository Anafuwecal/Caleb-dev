import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  };

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <Link to="/" className="flex items-center gap-2 group">
      {/* Logo Icon */}
      <div
        className={`${sizeClasses[size]} aspect-square rounded-lg flex items-center justify-center bg-transparent
          transition-transform duration-300 group-hover:scale-110`}
      >
        <span
          className={`font-heading font-bold ${
            variant === 'dark' ? 'text-secondary' : 'text-secondary'
          } ${size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl'}`}
        >
          <img src={logo} alt="logo" />
        </span>
      </div>
      
      {/* Logo Text */}
      <span
        className={`font-heading font-bold ${textSizeClasses[size]} ${
          variant === 'dark' ? 'text-primary' : 'text-secondary'
        }`}
      >
        {/*Caleb*/}
      </span>
    </Link>
  );
};

export default Logo;