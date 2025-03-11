
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProfessionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  index: number;
}

export const ProfessionCard: React.FC<ProfessionCardProps> = ({
  title,
  description,
  icon,
  link,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={cn(
        'rounded-2xl overflow-hidden p-6 h-full transition-all duration-300',
        'bg-white dark:bg-sody-900 shadow-sm hover:shadow-md',
        'border border-sody-100 dark:border-sody-800'
      )}
    >
      <Link to={link} className="flex flex-col h-full">
        <div className="mb-4 p-3 rounded-full bg-sody-50 dark:bg-sody-800 w-12 h-12 flex items-center justify-center text-sody-900 dark:text-white">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        
        <p className="text-sody-600 dark:text-sody-300 text-sm mb-4 flex-grow">
          {description}
        </p>
        
        <div className="mt-auto">
          <span className="inline-flex items-center text-sm font-medium text-sody-900 dark:text-white">
            Explore
            <svg
              className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
};
