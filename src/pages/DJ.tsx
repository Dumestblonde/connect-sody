
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { ProfilePreview } from '@/components/ProfilePreview';
import { motion } from 'framer-motion';
import { Music } from 'lucide-react';

// Mock data for DJ profiles
const djProfiles = [
  {
    name: 'Alex Rivera',
    title: 'Electronic DJ / Producer',
    imageSrc: 'https://images.unsplash.com/photo-1516417156595-3ca5df62a3a4?q=80&w=1000&auto=format&fit=crop',
    location: 'Los Angeles, CA',
  },
  {
    name: 'Samantha Lee',
    title: 'House Music DJ',
    imageSrc: 'https://images.unsplash.com/photo-1588479839125-3a70c4ebb731?q=80&w=1000&auto=format&fit=crop',
    location: 'Miami, FL',
  },
  {
    name: 'Marcus Williams',
    title: 'Hip Hop DJ / Turntablist',
    imageSrc: 'https://images.unsplash.com/photo-1571266028243-1c8d5d193622?q=80&w=1000&auto=format&fit=crop',
    location: 'New York, NY',
  },
  {
    name: 'Nina Patel',
    title: 'Techno DJ / Producer',
    imageSrc: 'https://images.unsplash.com/photo-1519111128505-082b8f0cd69c?q=80&w=1000&auto=format&fit=crop',
    location: 'Berlin, Germany',
  },
  {
    name: 'James Chen',
    title: 'Wedding & Event DJ',
    imageSrc: 'https://images.unsplash.com/photo-1605641532626-3428a9595ef6?q=80&w=1000&auto=format&fit=crop',
    location: 'Chicago, IL',
  },
  {
    name: 'Elena Rodriguez',
    title: 'Latin & Reggaeton DJ',
    imageSrc: 'https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=1000&auto=format&fit=crop',
    location: 'San Juan, PR',
  },
  {
    name: 'David Kim',
    title: 'EDM Festival DJ',
    imageSrc: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1000&auto=format&fit=crop',
    location: 'Las Vegas, NV',
  },
  {
    name: 'Olivia Johnson',
    title: 'Lounge & Ambient DJ',
    imageSrc: 'https://images.unsplash.com/photo-1483393458019-411bc6bd104e?q=80&w=1000&auto=format&fit=crop',
    location: 'San Francisco, CA',
  },
];

const DJ = () => {
  return (
    <Layout>
      <Hero
        title="Connect with Professional DJs"
        subtitle="Network with DJs specializing in all genres, from electronic and hip hop to wedding and event specialists."
        backgroundClass="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-sody-950 dark:to-indigo-950"
      />

      {/* DJ Network Overview */}
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
                <Music className="h-6 w-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why join our DJ network?
              </h2>
              <p className="text-lg text-sody-600 dark:text-sody-300 mb-6">
                The .sody DJ network connects you with other music professionals, booking agents, event planners, and venues looking for your unique sound and style.
              </p>
              <ul className="space-y-4">
                {[
                  'Connect with other DJs for collaborations and back-to-back sets',
                  'Access exclusive booking opportunities for events and venues',
                  'Share techniques, music, and industry insights with peers',
                  'Build your professional profile and showcase your unique style',
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
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop"
                  alt="DJs performing"
                  className="w-full aspect-video object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured DJs */}
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
                Meet The DJs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Featured DJs in our network
              </h2>
              <p className="text-lg text-sody-600 dark:text-sody-300 max-w-2xl mx-auto">
                Connect with these talented DJs for collaborations, advice, or book them for your next event.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {djProfiles.map((profile, index) => (
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

      {/* Testimonials Section */}
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
                Success Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What DJs say about us
              </h2>
              <p className="text-lg text-sody-600 dark:text-sody-300 max-w-2xl mx-auto">
                Hear from DJs who have found success through our platform.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Since joining .sody, I've connected with venue owners across the country and doubled my booking rate. The networking opportunities are unmatched.",
                name: "Alex Rivera",
                title: "Electronic DJ / Producer",
                avatar: "https://images.unsplash.com/photo-1516417156595-3ca5df62a3a4?q=80&w=100&auto=format&fit=crop"
              },
              {
                quote: "As a wedding DJ, I was looking to connect with event planners. Through .sody, I've established relationships with top planners in my city, resulting in consistent bookings.",
                name: "James Chen",
                title: "Wedding & Event DJ",
                avatar: "https://images.unsplash.com/photo-1605641532626-3428a9595ef6?q=80&w=100&auto=format&fit=crop"
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-sody-900 p-8 rounded-2xl shadow-sm border border-sody-100 dark:border-sody-800"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <svg className="h-8 w-8 text-purple-500" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-lg text-sody-600 dark:text-sody-300 mb-8 flex-grow">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-sody-500 dark:text-sody-400">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DJ;
