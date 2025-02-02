import React, { useState, useRef } from 'react';
import { Play, Pause, Maximize2, Volume2, VolumeX, Plus, Tag } from 'lucide-react';

export function Explorer() {
  const [isTheaterMode, setTheaterMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideo, setCurrentVideo] = useState({
    title: "Higgs Boson Understanding",
    path: "/Videos/Higgs Boson Understanding.mp4",
    description: "My Own Original research visualization created through analysis of CERN datasets and academic papers",
    date:""
  });

  const upcomingVideos = [
    currentVideo,
    { title: "Higgs → γγ Analysis", path: "", date: "Coming Soon" },
    { title: "Z Boson Decay Patterns", path: "", date: "Coming Soon" },
    { title: "Top Quark Studies", path: "", date: "Coming Soon" },
    { title: "W Boson Mass Analysis", path: "", date: "Coming Soon" },
    { title: "Tau Lepton Signatures", path: "", date: "Coming Soon" },
    { title: "QCD Jet Analysis", path: "", date: "Coming Soon" }
  ];

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={`transition-all duration-300 ${isTheaterMode ? 'bg-black' : 'bg-gray-900'}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${isTheaterMode ? 'max-w-none' : ''}`}>
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-3xl font-bold text-white">Higgs Explorer</h1>
            <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-teal-400 to-teal-600">
              <Tag className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Own Creation</span>
            </div>
          </div>

          <p className="text-gray-300 mb-8">
            Explore interactive 3D visualizations derived from my in-depth research on Higgs boson decay events, 
            showcasing my comprehensive understanding of particle interactions.
          </p>

          {/* Video Container */}
          <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-teal-500/10 to-teal-500/5 p-[1px]">
            <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={currentVideo.path}
                onClick={togglePlayPause}
              >
                Your browser does not support the video tag.
              </video>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={togglePlayPause}
                      className="text-white hover:text-teal-400 transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="h-6 w-6" />
                      ) : (
                        <Play className="h-6 w-6" />
                      )}
                    </button>
                    <button 
                      onClick={toggleMute}
                      className="text-white hover:text-teal-400 transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="h-6 w-6" />
                      ) : (
                        <Volume2 className="h-6 w-6" />
                      )}
                    </button>
                    <span className="text-sm text-gray-300">
                      {currentVideo.title}
                    </span>
                  </div>
                  <button 
                    onClick={() => setTheaterMode(!isTheaterMode)}
                    className="text-white hover:text-teal-400 transition-colors"
                  >
                    <Maximize2 className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Creator's Note */}
          <div className="mt-4 bg-gray-800/50 border border-teal-500/20 rounded-lg p-4">
            <h3 className="text-teal-400 font-semibold mb-2">Research & Production Notes</h3>
            <p className="text-sm text-gray-300">
              This visualization represents {currentVideo.description}. Created through:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-400 text-sm">
              <li>200+ hours of independent research</li>
              <li>Analysis of 50+ peer-reviewed papers</li>
              <li>Direct collaboration with CERN open data</li>
              <li>Custom ROOT framework visualizations</li>
            </ul>
          </div>
        </div>

        {/* Video Library Grid */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Research Video Library</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingVideos.map((video, index) => (
              <div 
                key={index}
                className="group relative aspect-video bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                {video.path ? (
                  <video
                    className="w-full h-full object-cover opacity-70 hover:opacity-90 transition-opacity"
                    src={video.path}
                    muted
                    loop
                    preload="metadata"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-teal-500/20 rounded-full p-3 mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Plus className="h-6 w-6 text-teal-400" />
                      </div>
                      <p className="text-white font-medium">{video.title}</p>
                      <p className="text-sm text-gray-400 mt-1">{video.date}</p>
                    </div>
                  </div>
                )}
                {video.path && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex items-end">
                    <p className="text-white font-medium">{video.title}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}