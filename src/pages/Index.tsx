
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { ProfessionCard } from '@/components/ProfessionCard';
import { ProfilePreview } from '@/components/ProfilePreview';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Music, Camera, Video, Headphones, FileText, DollarSign } from 'lucide-react';

const professions = [
  {
    title: 'DJ',
    description: 'Connect with top DJs and music creators from around the world.',
    icon: <Music className="h-5 w-5" />,
    link: '/dj',
  },
  {
    title: 'Photography',
    description: 'Find photographers who can capture your vision perfectly.',
    icon: <Camera className="h-5 w-5" />,
    link: '/photography',
  },
  {
    title: 'Videography',
    description: 'Discover talented videographers for your next production.',
    icon: <Video className="h-5 w-5" />,
    link: '/videography',
  },
  {
    title: 'Producing',
    description: 'Connect with innovative producers who can elevate your content.',
    icon: <Headphones className="h-5 w-5" />,
    link: '/producing',
  },
  {
    title: 'Script Writing',
    description: 'Find writers who can bring your story to life with compelling scripts.',
    icon: <FileText className="h-5 w-5" />,
    link: '/script-writing',
  },
  {
    title: 'Booking',
    description: 'Hire top entertainment professionals for your events and projects.',
    icon: <DollarSign className="h-5 w-5" />,
    link: '/booking',
  },
];

// Mock data for featured profiles
const featuredProfiles = [
  {
    name: 'Alex Rivera',
    title: 'DJ / Music Producer',
    imageSrc: 'https://images.unsplash.com/photo-1516417156595-3ca5df62a3a4?q=80&w=1000&auto=format&fit=crop',
    location: 'Los Angeles, CA',
  },
  {
    name: 'Sophia Chen',
    title: 'Professional Photographer',
    imageSrc: 'https://images.unsplash.com/photo-1564019472231-4586c552dc27?q=80&w=1000&auto=format&fit=crop',
    location: 'New York, NY',
  },
  {
    name: 'Marcus Johnson',
    title: 'Videographer',
    imageSrc: 'https://images.unsplash.com/photo-1633113093730-47449a9a7b28?q=80&w=1000&auto=format&fit=crop',
    location: 'Chicago, IL',
  },
  {
    name: 'Emma Rodriguez',
    title: 'Music Producer',
    imageSrc: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop',
    location: 'Miami, FL',
  },
];

const Index = () => {
  return (
    <Layout>
      <Hero
        title="Connect with the best entertainment professionals"
        subtitle="Join our creative network of DJs, photographers, videographers, producers, and script writers to collaborate and grow together."
        ctaText="Join Network"
        ctaLink="/booking"
      />

      {/* Professions Section */}
      <section className="py-20 px-6 bg-sody-50 dark:bg-sody-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-sody-100 text-sody-800 dark:bg-sody-800 dark:text-sody-100 mb-4">
                Explore Professions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Specialized networks for entertainment professionals
              </h2>
              <p className="text-lg text-sody-600 dark:text-sody-300 max-w-2xl mx-auto">
                Connect with like-minded professionals in your specific field to share ideas,
                collaborate on projects, and advance your career.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professions.map((profession, index) => (
              <ProfessionCard
                key={profession.title}
                title={profession.title}
                description={profession.description}
                icon={profession.icon}
                link={profession.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Professionals */}
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
                Featured Professionals
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Discover talent in the network
              </h2>
              <p className="text-lg text-sody-600 dark:text-sody-300 max-w-2xl mx-auto">
                These entertainment professionals are making waves in their industries. Connect, 
                collaborate, or hire them for your next project.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProfiles.map((profile, index) => (
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

          <div className="text-center mt-12">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center h-12 px-8 font-medium text-sody-900 transition duration-200 border border-sody-200 dark:border-sody-800 dark:text-white rounded-full hover:bg-sody-50 dark:hover:bg-sody-900 focus:shadow-outline focus:outline-none"
            >
              View All Professionals
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-sody-900 to-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to connect with entertainment professionals?
            </h2>
            <p className="text-lg text-sody-200 mb-8">
              Whether you're looking to network with peers or hire talent for your next project,
              .sody gives you access to the best in the industry.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-sody-900 transition duration-200 bg-white rounded-full hover:bg-sody-100 focus:shadow-outline focus:outline-none"
              >
                Hire Professionals
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 border border-white rounded-full hover:bg-white/10 focus:shadow-outline focus:outline-none"
              >
                Join Network
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
