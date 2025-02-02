// Home.tsx
import React, { useState } from 'react';
import { ArrowRight, AtomIcon, Brain, BarChart as ChartBar, Database, Users, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div 
        className="relative overflow-hidden min-h-[80vh] group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0">
          <img
            src="https://cdn.britannica.com/63/164163-050-6E18421E/event-proton-proton-collisions-CMS-detector-pair-Large-2012.jpg?auto=format&fit=crop&w=2000&q=80"
            alt="CERN detector"
            className="w-full h-full object-cover transform scale-105 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 backdrop-blur-sm transition-all duration-500 group-hover:backdrop-blur-none" />
        </div>

        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <AtomIcon className={`w-32 h-32 text-teal-400/80 transform transition-all duration-1000 ${isHovered ? 'scale-[0.2] opacity-0' : 'scale-100 opacity-100'}`} />
              {isHovered && (
                <>
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-teal-400 rounded-full animate-particle1" />
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-teal-400 rounded-full animate-particle2" />
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-teal-400 rounded-full animate-particle3" />
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-teal-400 rounded-full animate-particle4" />
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-teal-400 rounded-full animate-particle5" />
                </>
              )}
            </div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            A Visual Journey into CERN Data
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Explore the mysteries of particle physics through the lens of CERN ROOT visualizations.
            Discover groundbreaking insights into Higgs boson decay and the fundamental forces of our universe.
          </p>
          <div className="mt-10 flex gap-4">
            <Link
              to="/visualizations"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-teal-400 hover:bg-teal-500 transition-colors"
            >
              Explore Visualizations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="https://github.com/yourusername/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Github className="mr-2 h-5 w-5" />
              View Source
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link to="/visualizations" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700/50 transition-colors">
              <div className="bg-teal-500/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <ChartBar className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Interactive Visualizations</h3>
              <p className="text-gray-400">
                Explore CERN ROOT data through dynamic, interactive plots with real-time filtering and analysis tools.
              </p>
            </Link>

            <Link to="/explorer" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700/50 transition-colors">
              <div className="bg-teal-500/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <AtomIcon className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Higgs Boson Explorer</h3>
              <p className="text-gray-400">
                Dive into 3D visualizations of Higgs boson decay events and understand particle interactions.
              </p>
            </Link>

            <Link to="/education" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700/50 transition-colors">
              <div className="bg-teal-500/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <Brain className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Educational Resources</h3>
              <p className="text-gray-400">
                Learn about particle physics, the ATLAS detector, and data analysis techniques.
              </p>
            </Link>

            <Link to="/research" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700/50 transition-colors">
              <div className="bg-teal-500/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <Database className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Research Integration</h3>
              <p className="text-gray-400">
                Access HepData records and DPHEP resources for comprehensive research analysis.
              </p>
            </Link>

            <Link to="/blog" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700/50 transition-colors">
              <div className="bg-teal-500/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <Users className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Collaboration</h3>
              <p className="text-gray-400">
                Connect with researchers and contribute to advancing particle physics visualization.
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to explore?</span>
            <span className="block text-teal-400">Let's turn data into discovery.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-teal-400 hover:bg-teal-500 transition-colors"
            >
              Collaborate with me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="https://github.com/Deba-Codex/Higgs_Insights"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Github className="mr-2 h-5 w-5" />
              View Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}