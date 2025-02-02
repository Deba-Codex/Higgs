import React from 'react';
import { Database, FileText, Link2, Copy, ExternalLink } from 'lucide-react';

const datasets = [
  {
    title: 'ATLAS Higgs 2016',
    description: '13 TeV, 139 fb⁻¹ luminosity',
    link: 'https://www.hepdata.net/'
  },
  {
    title: 'CMS Top Quark',
    description: 'Run 2 Dataset, 13 TeV',
    link: 'http://opendata.cern.ch/'
  },
  {
    title: 'LHCb Beauty Mesons',
    description: 'Run 3 Preliminary',
    link: 'https://home.cern/news/news/experiments/lhcb-presents-latest-study-beauty-oscillations'
  },
  {
    title: 'ALICE Heavy Ions',
    description: 'PbPb Collisions',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0375947414004515'
  },
  {
    title: 'Combined H→ZZ',
    description: 'Full Run 2 Analysis',
    link: 'https://indico.cern.ch/event/442390/contributions/1096119/attachments/1289753/1920931/HiggsStrandberg.pdf'
  },
  {
    title: 'Exotic Searches',
    description: 'New Physics Results',
    link: 'https://doi.org/10.1016/j.nuclphysbps.2024.10.003'
  }
];

const publications = [
  {
    title: 'Observation of Higgs boson decay to bottom quarks',
    journal: 'Physical Review Letters',
    doi: '10.1103/PhysRevLett.121.121801',
    year: 2023,
    citation: '@article{ATLAS:2023higgs,\n  title={Observation of Higgs...},\n  author={ATLAS Collaboration},\n  journal={Phys. Rev. Lett.},\n  year={2023}\n}'
  },
  {
    title: 'Measurements of Higgs boson production cross-sections',
    journal: 'Journal of High Energy Physics',
    doi: '10.1007/JHEP01(2023)001',
    year: 2023,
    citation: '@article{CMS:2023measurements,\n  title={Measurements of Higgs...},\n  author={CMS Collaboration},\n  journal={JHEP},\n  year={2023}\n}'
  }
];

export function Research() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Research</h1>

        {/* Dataset Wall */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Database className="h-6 w-6 mr-2" />
            Datasets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {datasets.map((dataset, index) => (
              <a
                key={index}
                href={dataset.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-teal-500/20"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400">
                  {dataset.title}
                </h3>
                <p className="text-gray-400">{dataset.description}</p>
                <div className="mt-4 flex items-center text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link2 className="h-4 w-4 mr-2" />
                  <span className="text-sm">View Dataset</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <FileText className="h-6 w-6 mr-2" />
            Publications
          </h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{pub.title}</h3>
                <div className="text-gray-400 mb-4">
                  <p>{pub.journal} • {pub.year}</p>
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 inline-flex items-center mt-1"
                  >
                    DOI: {pub.doi}
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => copyToClipboard(pub.citation)}
                    className="inline-flex items-center px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition-colors"
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Citation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}