
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { ProfilePreview } from '@/components/ProfilePreview';
import { motion } from 'framer-motion';
import { Video } from 'lucide-react';

// Mock data for videographer profiles
const videographerProfiles = [
  {
    name: 'Marcus Johnson',
    title: 'Commercial Videographer',
    imageSrc: 'https://images.unsplash.com/photo-1633113093730-47449a9a7b28?q=80&w=1000&auto=format&fit=crop',
    location: 'Chicago, IL',
  },
  {
    name: 'Alicia Nguyen',
    title: 'Wedding Videographer',
    imageSrc: 'https://images.unsplash.com/photo-1452802447250-470a88ac82bc?q=80&w=1000&auto=format&fit=crop',
    location: 'Los Angeles, CA',
  },
  {
    name: 'Jordan Smith',
    title: 'Documentary Filmmaker',
    imageSrc: 'https://images.unsplash.com/photo-1585828292920-638a2a78cb38?q=80&w=1000&auto=format&fit=crop',
    location: 'New York, NY',
  },
  {
    name: 'Sophia Lee',
    title: 'Music Video Director',
    imageSrc: 'https://images.unsplash.com/photo-1553775282-20af80779df7?q=80&w=1000&auto=format&fit=crop',
    location: 'Atlanta, GA',
  },
  {
    name: 'Carlos Rodriguez',
    title: 'Event Videographer',
    imageSrc: 'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?q=80&w=1000&auto=format&fit=crop',
    location: 'Miami, FL',
  },
  {
    name: 'Emma Wilson',
    title: 'Corporate Video Producer',
    imageSrc: 'https://images.unsplash.com/photo-1567360425618-1594206637d2?q=80&w=1000&auto=format&fit=crop',
    location: 'Boston, MA',
  },
  {
    name: 'Kevin Park',
    title: 'Aerial Videographer',
    imageSrc: 'https://images.unsplash.com/photo-1595859703065-2259982784bb?q=80&w=1000&auto=format&fit=crop',
    location: 'Seattle, WA',
  },
  {
    name: 'Jasmine Taylor',
    title: 'Social Media Content Creator',
    imageSrc: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1000&auto=format&fit=crop',
    location: 'Austin, TX',
  },
];

const Videography = () => {
  return (
    <Layout>
      <Hero
        title="Connect with Professional Videographers"
        subtitle="Network with videographers specializing in commercials, documentaries, weddings, events, and creative content."
        backgroundClass="bg-gradient-to-br from-red-50 to-orange-50 dark:from-sody-950 dark:to-red-950"
      />

      {/* Videography Network Overview */}
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
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300 mb-6">
                <Video className="h-6 w-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why join our Videography network?
              </h2>
              <p className="text-lg text-sody-600 dark:text-sody-300 mb-6">
                The .sody Videography network connects you with clients, brands, agencies, and fellow videographers to expand your professional opportunities and enhance your career.
              </p>
              <ul className="space-y-4">
                {[
                  'Access exclusive video production projects from brands and agencies',
                  'Connect with other videographers and film professionals for collaborations',
                  'Showcase your portfolio and reel to potential clients',
                  'Build relationships with producers, directors, and industry insiders',
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
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop"
                  alt="Videographer at work"
                  className="w-full aspect-video object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Videographers */}
      <section className="py-20 px-6 bg-sody-50 dark:bg-sody-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 mb-4">
                Meet The Videographers
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Featured Videographers in our network
              </h2>
              <p className="text-lg text-sody-600 dark:text-sody-300 max-w-2xl mx-auto">
                Connect with these talented videographers for collaborations, advice, or book them for your next project.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {videographerProfiles.map((profile, index) => (
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

export default Videography;
