
import React from 'react';
import { motion } from 'framer-motion';

interface ProfilePreviewProps {
  name: string;
  title: string;
  imageSrc: string;
  location: string;
  index: number;
}

export const ProfilePreview: React.FC<ProfilePreviewProps> = ({
  name,
  title,
  imageSrc,
  location,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-sody-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-sody-100 dark:border-sody-800"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-sody-600 dark:text-sody-300 text-sm mb-3">{title}</p>
        <div className="flex items-center text-sody-500 dark:text-sody-400 text-xs">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          {location}
        </div>
      </div>
    </motion.div>
  );
};
