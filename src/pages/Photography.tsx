
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { ProfilePreview } from '@/components/ProfilePreview';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

// Mock data for photographer profiles
const photographerProfiles = [
  {
    name: 'Sophia Chen',
    title: 'Fashion Photographer',
    imageSrc: 'https://images.unsplash.com/photo-1564019472231-4586c552dc27?q=80&w=1000&auto=format&fit=crop',
    location: 'New York, NY',
  },
  {
    name: 'Michael Torres',
    title: 'Portrait Photographer',
    imageSrc: 'https://images.unsplash.com/photo-1600603405959-6d623e92445c?q=80&w=1000&auto=format&fit=crop',
    location: 'Los Angeles, CA',
  },
  {
    name: 'Emily Wilson',
    title: 'Wedding Photographer',
    imageSrc: 'https://images.unsplash.com/photo-1566758303763-e456d76a7853?q=80&w=1000&auto=format&fit=crop',
    location: 'Chicago, IL',
  },
  {
    name: 'Jamal Greene',
    title: 'Event Photographer',
    imageSrc: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=1000&auto=format&fit=crop',
    location: 'Atlanta, GA',
  },
  {
    name: 'Amara Singh',
    title: 'Nature & Landscape Photographer',
    imageSrc: 'https://images.unsplash.com/photo-1518156677180-95a2893f3499?q=80&w=1000&auto=format&fit=crop',
    location: 'Seattle, WA',
  },
  {
    name: 'Carlos Mendez',
    title: 'Commercial Photographer',
    imageSrc: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1000&auto=format&fit=crop',
    location: 'Miami, FL',
  },
  {
    name: 'Zoe Campbell',
    title: 'Food Photographer',
    imageSrc: 'https://images.unsplash.com/photo-1581699383226-17b72bc3c8db?q=80&w=1000&auto=format&fit=crop',
    location: 'Austin, TX',
  },
  {
    name: 'Lucas Parker',
    title: 'Architecture Photographer',
    imageSrc: 'https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?q=80&w=1000&auto=format&fit=crop',
    location: 'Boston, MA',
  },
];

const Photography = () => {
  return (
    <Layout>
      <Hero
        title="Connect with Professional Photographers"
        subtitle="Network with photographers specializing in fashion, weddings, portraits, events, and commercial photography."
        backgroundClass="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-sody-950 dark:to-cyan-950"
      />

      {/* Photography Network Overview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 mb-6">
                <Camera className="h-6 w-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why join our Photography network?
              </h2>
              <p className="text-lg text-sody-600 dark:text-sody-300 mb-6">
                The .sody Photography network connects you with clients, brands, publications, and fellow photographers to expand your professional opportunities and enhance your career.
              </p>
              <ul className="space-y-4">
                {[
                  'Access exclusive photography assignments from top brands and publications',
                  'Connect with other photographers for collaborations and knowledge sharing',
                  'Showcase your portfolio to potential clients looking for your specific style',
                  'Build relationships with models, stylists, and other industry professionals',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-sody-600 dark:text-sody-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=1000&auto=format&fit=crop"
                  alt="Photographer at work"
                  className="w-full aspect-video object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Photographers */}
      <section className="py-20 px-6 bg-sody-50 dark:bg-sody-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 mb-4">
                Meet The Photographers
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Featured Photographers in our network
              </h2>
              <p className="text-lg text-sody-600 dark:text-sody-300 max-w-2xl mx-auto">
                Connect with these talented photographers for collaborations, advice, or book them for your next project.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {photographerProfiles.map((profile, index) => (
              <ProfilePreview
                key={profile.name}
                name={profile.name}
                title={profile.title}
                imageSrc={profile.imageSrc}
                location={profile.location}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Photography Categories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-sody-100 text-sody-800 dark:bg-sody-800 dark:text-sody-100 mb-4">
                Photography Specializations
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Explore photography categories
              </h2>
              <p className="text-lg text-sody-600 dark:text-sody-300 max-w-2xl mx-auto">
                Our network includes photographers specializing in various genres and styles.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Fashion Photography', image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=800&auto=format&fit=crop' },
              { name: 'Wedding Photography', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop' },
              { name: 'Portrait Photography', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop' },
              { name: 'Event Photography', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop' },
              { name: 'Commercial Photography', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop' },
              { name: 'Food Photography', image: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=800&auto=format&fit=crop' },
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group rounded-2xl overflow-hidden h-64"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-medium p-6">{category.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Photography;
