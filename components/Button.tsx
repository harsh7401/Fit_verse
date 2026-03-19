import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({ href, onClick, children, variant = 'primary', size = 'md', className = '', type = 'button' }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-bold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500';
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-black shadow hover:opacity-90',
    glass: 'bg-white/10 text-white border border-white/20 shadow hover:bg-white/20',
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
