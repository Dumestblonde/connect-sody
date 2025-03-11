
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundClass?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundClass = 'bg-gradient-to-br from-white to-sody-100 dark:from-sody-950 dark:to-sody-900',
}) => {
  return (
    <section className={`${backgroundClass} pt-32 pb-20 md:pt-40 md:pb-32 px-6`}>
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-sody-100 text-sody-800 dark:bg-sody-800 dark:text-sody-100 mb-6">
            .sody network
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-sody-600 dark:text-sody-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {ctaText && ctaLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to={ctaLink}
              className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 bg-sody-900 rounded-full hover:bg-sody-800 focus:shadow-outline focus:outline-none"
            >
              {ctaText}
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};
