
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { ProfilePreview } from '@/components/ProfilePreview';
import { motion } from 'framer-motion';
import { Headphones } from 'lucide-react';

// Mock data for producer profiles
const producerProfiles = [
  {
    name: 'Emma Rodriguez',
    title: 'Music Producer / Songwriter',
    imageSrc: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop',
    location: 'Miami, FL',
  },
  {
    name: 'Tyler Johnson',
    title: 'Hip Hop Producer',
    imageSrc: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop',
    location: 'Atlanta, GA',
  },
  {
    name: 'Aria Chen',
    title: 'EDM Producer / DJ',
    imageSrc: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1000&auto=format&fit=crop',
    location: 'Los Angeles, CA',
  },
  {
    name: 'Marcus Williams',
    title: 'R&B Producer',
    imageSrc: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
    location: 'New York, NY',
  },
  {
    name: 'Sophia Adams',
    title: 'Pop Music Producer',
    imageSrc: 'https://images.unsplash.com/photo-1549213783-8284d0336c4f?q=80&w=1000&auto=format&fit=crop',
    location: 'Nashville, TN',
  },
  {
    name: 'David Kim',
    title: 'Film Score Composer',
    imageSrc: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop',
    location: 'Los Angeles, CA',
  },
  {
    name: 'Olivia Garcia',
    title: 'Indie Producer / Engineer',
    imageSrc: 'https://images.unsplash.com/photo-1571935441005-16504e046e6d?q=80&w=1000&auto=format&fit=crop',
    location: 'Portland, OR',
  },
  {
    name: 'Jason Taylor',
    title: 'Electronic Music Producer',
    imageSrc: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop',
    location: 'Chicago, IL',
  },
];

const Producing = () => {
  return (
    <Layout>
      <Hero
        title="Connect with Professional Producers"
        subtitle="Network with music producers and composers specializing in all genres from hip-hop to film scores."
        backgroundClass="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-sody-950 dark:to-purple-950"
      />

      {/* Producing Network Overview */}
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
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300 mb-6">
                <Headphones className="h-6 w-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why join our Producing network?
              </h2>
              <p className="text-lg text-sody-600 dark:text-sody-300 mb-6">
                The .sody Producing network connects you with artists, labels, studios, and fellow producers to expand your professional opportunities and enhance your career.
              </p>
              <ul className="space-y-4">
                {[
                  'Connect with artists looking for your unique production style',
                  'Access exclusive opportunities with labels and publishing companies',
                  'Share techniques, samples, and industry insights with peers',
                  'Build relationships with engineers, mixers, and mastering professionals',
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
                  src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1000&auto=format&fit=crop"
                  alt="Music producer in studio"
                  className="w-full aspect-video object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Producers */}
      <section className="py-20 px-6 bg-sody-50 dark:bg-sody-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 mb-4">
                Meet The Producers
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Featured Producers in our network
              </h2>
              <p className="text-lg text-sody-600 dark:text-sody-300 max-w-2xl mx-auto">
                Connect with these talented producers for collaborations, advice, or hire them for your next project.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {producerProfiles.map((profile, index) => (
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
    </Layout>
  );
};

export default Producing;
