import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Compétences', href: '#skills' },
  { name: 'Projets', href: '#projects' },
  { name: 'Parcours', href: '#experience' },
  { name: 'CV', href: '#resume' },
  { name: 'Hobbies', href: '#hobbies' },
  { name: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-white/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter text-slate-900 z-50">
          Abderrazak<span className="text-primary-600">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Nav Button */}
        <button
          className="md:hidden z-50 p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8 md:hidden shadow-lg"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-2xl font-semibold text-slate-800 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};