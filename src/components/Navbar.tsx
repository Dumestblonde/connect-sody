
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'DJ', path: '/dj' },
    { name: 'Photography', path: '/photography' },
    { name: 'Videography', path: '/videography' },
    { name: 'Producing', path: '/producing' },
    { name: 'Script Writing', path: '/script-writing' },
    { name: 'Booking', path: '/booking', highlight: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-8 lg:px-12',
        isScrolled ? 'py-3 glass-morphism dark:glass-morphism-dark' : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="relative z-50 group">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sody-800 to-sody-600 dark:from-white dark:to-sody-200 font-display tracking-tight">
              .sody
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden lg:flex items-center space-x-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {links.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300',
                link.highlight
                  ? 'bg-sody-900 text-white hover:bg-sody-800 ml-2'
                  : isActive(link.path)
                  ? 'text-sody-900 dark:text-white'
                  : 'text-sody-600 hover:text-sody-800 dark:text-sody-200 dark:hover:text-white'
              )}
            >
              {link.name}
              {isActive(link.path) && !link.highlight && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-sody-900 dark:bg-white rounded-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </motion.nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="relative w-6 h-5">
            <span
              className={cn(
                'absolute w-6 h-0.5 bg-sody-900 dark:bg-white transform transition-all duration-300 ease-in-out',
                mobileMenuOpen ? 'top-2 rotate-45' : 'top-0'
              )}
            />
            <span
              className={cn(
                'absolute w-6 h-0.5 bg-sody-900 dark:bg-white transform transition-all duration-300 ease-in-out',
                mobileMenuOpen ? 'opacity-0' : 'top-2 opacity-100'
              )}
            />
            <span
              className={cn(
                'absolute w-6 h-0.5 bg-sody-900 dark:bg-white transform transition-all duration-300 ease-in-out',
                mobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'
              )}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <motion.div
          className={cn(
            'fixed inset-0 z-40 lg:hidden glass-morphism dark:glass-morphism-dark',
            mobileMenuOpen ? 'block' : 'hidden'
          )}
          initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
          animate={
            mobileMenuOpen
              ? { opacity: 1, clipPath: 'circle(150% at top right)' }
              : { opacity: 0, clipPath: 'circle(0% at top right)' }
          }
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <nav className="flex flex-col items-center space-y-6">
              {links.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      'text-xl font-medium',
                      link.highlight
                        ? 'bg-sody-900 text-white px-6 py-2 rounded-full'
                        : isActive(link.path)
                        ? 'text-sody-900 dark:text-white'
                        : 'text-sody-600 dark:text-sody-200'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
        </motion.div>
      </div>
    </header>
  );
};
