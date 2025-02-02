import React from 'react';
import { BookOpen, Code, Database, ChevronDown, ExternalLink } from 'lucide-react';

const tools = [
  {
    name: 'ROOT Framework',
    description: 'Data analysis backbone for particle physics.',
    features: ['TTree', 'TH1F', 'PyROOT'],
    link: 'https://root.cern/',
    icon: Code
  },
  {
    name: 'JSROOT',
    description: 'JavaScript implementation of ROOT for web browsers.',
    features: ['Interactive Plots', 'WebGL Support', 'Data Export'],
    link: 'https://root.cern/js/',
    icon: BookOpen
  },
  {
    name: 'CMSSW',
    description: 'CMS Software framework for event processing.',
    features: ['Event Processing', 'Analysis Tools', 'Reconstruction'],
    link: 'https://cms-sw.github.io/',
    icon: Database
  }
];

const resources = [
  {
    title: 'CERN Academic Training',
    description: 'Comprehensive courses on particle physics and computing.',
    link: 'https://indico.cern.ch/category/72/'
  },
  {
    title: 'Data Formats & Analysis',
    description: 'Learn about NanoAOD and other CERN data formats.',
    link: '#'
  },
  {
    title: 'Computing Resources',
    description: 'Access to grid computing and analysis facilities.',
    link: '#'
  }
];

export function Education() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Educational Resources</h1>

        {/* Tools Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-teal-500/20 rounded-lg p-3 mr-4">
                  <tool.icon className="h-6 w-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{tool.name}</h3>
              </div>
              <p className="text-gray-300 mb-4">{tool.description}</p>
              <ul className="space-y-2 mb-6">
                {tool.features.map((feature, i) => (
                  <li key={i} className="text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
              >
                Learn More
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* CERN Resources Section */}
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <h2 className="text-2xl font-bold text-white p-6 border-b border-gray-700">
            CERN Resources
          </h2>
          <div className="divide-y divide-gray-700">
            {resources.map((resource, index) => (
              <details
                key={index}
                className="group"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-700 transition-colors">
                  <div>
                    <h3 className="text-lg font-medium text-white">{resource.title}</h3>
                    <p className="mt-1 text-gray-400">{resource.description}</p>
                  </div>
                  <ChevronDown className="h-5 w-5 text-gray-400 transform group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-300">
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    Access Resource
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}