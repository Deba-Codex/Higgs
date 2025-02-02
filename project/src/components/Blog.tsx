import React from 'react';
import { Twitter, Youtube, Calendar } from 'lucide-react';

const blogPosts = [
  {
    title: 'Understanding Higgs Boson Decay Channels',
    excerpt: 'A deep dive into the various ways a Higgs boson can decay and how we detect these events.',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Physics'
  },
  {
    title: 'Visualizing Particle Collisions with ROOT',
    excerpt: 'Learn how to create beautiful and informative visualizations using the ROOT framework.',
    date: '2024-03-10',
    readTime: '8 min read',
    category: 'Technical'
  }
];

const upcomingEvents = [
  {
    name: 'ICHEP 2024',
    date: 'July 10-17, 2024',
    location: 'Virtual Conference',
    description: 'Submit abstracts by May 30'
  },
  {
    name: 'CERN Summer School',
    date: 'August 1-15, 2024',
    location: 'Geneva, Switzerland',
    description: 'Applications open now'
  }
];

export function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Blog & Updates</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Blog Posts */}
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <button className="text-teal-400 hover:text-teal-300 transition-colors">
                      Read more →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Social Media Widget */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Stay Connected</h2>
              <div className="space-y-4">
                <a
                  href="https://twitter.com/CERN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-teal-400 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span>Follow @CERN</span>
                </a>
                <a
                  href="https://www.youtube.com/user/CERNTV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-teal-400 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                  <span>CERN YouTube</span>
                </a>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-teal-400 pl-4 py-2"
                  >
                    <h3 className="font-semibold text-white">{event.name}</h3>
                    <div className="text-sm text-gray-400 space-y-1">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <p>{event.location}</p>
                      <p className="text-teal-400">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}