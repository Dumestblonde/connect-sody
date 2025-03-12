
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { ProfilePreview } from '@/components/ProfilePreview';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

// Mock data for scriptwriter profiles
const scriptwriterProfiles = [
  {
    name: 'Alex Morgan',
    title: 'Screenwriter / Film',
    imageSrc: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=1000&auto=format&fit=crop',
    location: 'Los Angeles, CA',
  },
  {
    name: 'Sarah Chen',
    title: 'TV Series Writer',
    imageSrc: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop',
    location: 'New York, NY',
  },
  {
    name: 'Michael Johnson',
    title: 'Commercial Copywriter',
    imageSrc: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1000&auto=format&fit=crop',
    location: 'Chicago, IL',
  },
  {
    name: 'Priya Patel',
    title: 'Documentary Scriptwriter',
    imageSrc: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop',
    location: 'San Francisco, CA',
  },
  {
    name: 'James Wilson',
    title: 'Narrative Game Writer',
    imageSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop',
    location: 'Seattle, WA',
  },
  {
    name: 'Elena Rodriguez',
    title: 'Social Media Content Writer',
    imageSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
    location: 'Miami, FL',
  },
  {
    name: 'David Kim',
    title: 'Animation Scriptwriter',
    imageSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
    location: 'Portland, OR',
  },
  {
    name: 'Olivia Thomas',
    title: 'Podcast Writer / Producer',
    imageSrc: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
    location: 'Austin, TX',
  },
];

const ScriptWriting = () => {
  return (
    <Layout>
      <Hero
        title="Connect with Professional Script Writers"
        subtitle="Network with writers specializing in film, TV, commercials, documentaries, and digital content."
        backgroundClass="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-sody-950 dark:to-emerald-950"
      />

      {/* Script Writing Network Overview */}
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
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-300 mb-6">
                <FileText className="h-6 w-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why join our Script Writing network?
              </h2>
              <p className="text-lg text-sody-600 dark:text-sody-300 mb-6">
                The .sody Script Writing network connects you with producers, directors, agencies, and fellow writers to expand your professional opportunities and enhance your career.
              </p>
              <ul className="space-y-4">
                {[
                  'Access exclusive writing opportunities with production companies and studios',
                  'Connect with directors and producers looking for your writing style',
                  'Share techniques, resources, and industry insights with peers',
                  'Build relationships with agents, editors, and industry insiders',
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
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop"
                  alt="Scriptwriter at work"
                  className="w-full aspect-video object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Scriptwriters */}
      <section className="py-20 px-6 bg-sody-50 dark:bg-sody-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100 mb-4">
                Meet The Script Writers
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Featured Script Writers in our network
              </h2>
              <p className="text-lg text-sody-600 dark:text-sody-300 max-w-2xl mx-auto">
                Connect with these talented script writers for collaborations, advice, or hire them for your next project.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {scriptwriterProfiles.map((profile, index) => (
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

export default ScriptWriting;
