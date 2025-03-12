import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { motion } from 'framer-motion';
import { DollarSign, Calendar, Mail, Bookmark, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ProfilePreview } from '@/components/ProfilePreview';

// Mock data for featured professionals
const featuredProfessionals = [
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
  {
    name: 'Carlos Mendez',
    title: 'Commercial Photographer',
    imageSrc: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1000&auto=format&fit=crop',
    location: 'Miami, FL',
  },
  {
    name: 'Tyler Johnson',
    title: 'Hip Hop Producer',
    imageSrc: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop',
    location: 'Atlanta, GA',
  },
  {
    name: 'Alicia Nguyen',
    title: 'Wedding Videographer',
    imageSrc: 'https://images.unsplash.com/photo-1452802447250-470a88ac82bc?q=80&w=1000&auto=format&fit=crop',
    location: 'Los Angeles, CA',
  },
  {
    name: 'Sarah Chen',
    title: 'TV Series Writer',
    imageSrc: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop',
    location: 'New York, NY',
  },
];

const Booking = () => {
  return (
    <Layout>
      <Hero
        title="Book Entertainment Professionals"
        subtitle="Find and hire the perfect DJ, photographer, videographer, producer, or script writer for your event or project."
        backgroundClass="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-sody-950 dark:to-amber-950"
      />

      {/* Booking Search Section */}
      <section className="py-16 px-6 bg-white dark:bg-sody-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white dark:bg-sody-900 rounded-2xl shadow-sm border border-sody-100 dark:border-sody-800"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
              <div className="w-full">
                <div className="relative">
                  <Input 
                    type="search" 
                    placeholder="Search by name, skill, or location..." 
                    className="pl-10 py-6 text-base"
                  />
                  <div className="absolute left-3 top-3 text-sody-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                </Button>
                <Button className="flex-grow md:flex-grow-0">Find Professionals</Button>
              </div>
            </div>

            <Tabs defaultValue="all">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="dj">DJs</TabsTrigger>
                <TabsTrigger value="photography">Photographers</TabsTrigger>
                <TabsTrigger value="videography">Videographers</TabsTrigger>
                <TabsTrigger value="producing">Producers</TabsTrigger>
                <TabsTrigger value="script-writing">Script Writers</TabsTrigger>
              </TabsList>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge className="bg-sody-100 text-sody-800 hover:bg-sody-200 dark:bg-sody-800 dark:text-sody-100">Available for booking</Badge>
                <Badge className="bg-sody-100 text-sody-800 hover:bg-sody-200 dark:bg-sody-800 dark:text-sody-100">Top rated</Badge>
                <Badge className="bg-sody-100 text-sody-800 hover:bg-sody-200 dark:bg-sody-800 dark:text-sody-100">Verified profile</Badge>
              </div>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {featuredProfessionals.map((profile, index) => (
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
              </TabsContent>
              <TabsContent value="dj" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {featuredProfessionals.filter(p => p.title.toLowerCase().includes('dj')).map((profile, index) => (
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
              </TabsContent>
              <TabsContent value="photography" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {featuredProfessionals.filter(p => p.title.toLowerCase().includes('photographer')).map((profile, index) => (
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
              </TabsContent>
              <TabsContent value="videography" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {featuredProfessionals.filter(p => p.title.toLowerCase().includes('videographer')).map((profile, index) => (
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
              </TabsContent>
              <TabsContent value="producing" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {featuredProfessionals.filter(p => p.title.toLowerCase().includes('producer')).map((profile, index) => (
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
              </TabsContent>
              <TabsContent value="script-writing" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {featuredProfessionals.filter(p => p.title.toLowerCase().includes('writer')).map((profile, index) => (
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
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100 mb-4">
                Booking Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How to book professionals on .sody
              </h2>
              <p className="text-lg text-sody-600 dark:text-sody-300 max-w-2xl mx-auto">
                Our streamlined booking process makes it easy to find and hire the right entertainment professional for your needs.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Filter className="h-6 w-6" />,
                title: "Search & Filter",
                description: "Browse our network of verified professionals and filter by location, specialty, and availability."
              },
              {
                icon: <Calendar className="h-6 w-6" />,
                title: "Check Availability",
                description: "View available dates, rates, and services offered by professionals before making a decision."
              },
              {
                icon: <Bookmark className="h-6 w-6" />,
                title: "Secure Booking",
                description: "Book securely through our platform with protected payments and confirmed reservations."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-sody-900 p-8 rounded-2xl shadow-sm border border-sody-100 dark:border-sody-800"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-300 mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-sody-600 dark:text-sody-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-sody-50 dark:bg-sody-950">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-sody-900 p-8 md:p-12 rounded-2xl shadow-sm border border-sody-100 dark:border-sody-800 text-center"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-300 mb-6 mx-auto">
              <Mail className="h-6 w-6" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need help with your booking?
            </h2>
            <p className="text-lg text-sody-600 dark:text-sody-300 max-w-2xl mx-auto mb-8">
              Our team of booking specialists can help you find the perfect professionals for your event or project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>Contact Support</span>
              </Button>
              <Button size="lg" variant="outline">
                View FAQ
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
