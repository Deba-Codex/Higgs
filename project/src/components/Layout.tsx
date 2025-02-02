import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AtomIcon, Menu, X, Github } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Visualizations', href: '/visualizations' },
    { name: 'Higgs Explorer', href: '/explorer' },
    { name: 'Education', href: '/education' },
    { name: 'Research', href: '/research' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <AtomIcon className="h-8 w-8 text-teal-500" />
                <span className="font-bold text-xl">Higgs Insights</span>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`${
                      location.pathname === item.href
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="https://github.com/yourusername/your-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  Source Code
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    location.pathname === item.href
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } block px-3 py-2 rounded-md text-base font-medium`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://github.com/yourusername/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Github className="h-5 w-5" />
                Source Code
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>{children}</main>

      <footer className="bg-gray-800 mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4">
          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
          </div>
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Higgs Insights. Open source on {' '}
            <a
              href="https://github.com/Deba-Codex/Higgs_Insights"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
