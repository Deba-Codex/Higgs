import React, { useState } from 'react';
import { RootVisualizer } from './RootVisualizer';
import { PlusCircle, Trash2 } from 'react-feather'; // Import react-feather icons

// Define the structure of your root files and their contents
const rootFiles = [
  {
    name: "AngularityDistribution.root",
    path: "/root-files/AngularityDistribution.root",
    objects: ["c1"],
    description: "Distribution of jet angularity for QCD and signal events."
  },
  {
    name: "ClassificationScoreDistribution.root",
    path: "/root-files/ClassificationScoreDistribution.root",
    objects: ["c1"],
    description: "Distribution of classification scores for background and signal events."
  },
  {
    name: "InvariantMassDileptonJet.root",
    path: "/root-files/InvariantMassDileptonJet.root",
    objects: ["c1"],
    description: "Invariant mass distribution of dilepton-jet system."
  },
  {
    name: "ModifiedEnergyCorrelation.root",
    path: "/root-files/ModifiedEnergyCorrelation.root",
    objects: ["c1"],
    description: "Modified energy correlation function for jet substructure analysis."
  },
  {
    name: "PostFitDileptonJetMass.root",
    path: "/root-files/PostFitDileptonJetMass.root",
    objects: ["c1"],
    description: "Post-fit invariant mass distribution of the dilepton-jet system."
  },
  {
    name: "PreFitDileptonJetMass.root",
    path: "/root-files/PreFitDileptonJetMass.root",
    objects: ["c1"],
    description: "Pre-fit invariant mass distribution of the dilepton-jet system."
  },
  {
    name: "PredictedMass.root",
    path: "/root-files/PredictedMass.root",
    objects: ["c1"],
    description: "Predicted mass distribution from machine learning models."
  },
  {
    name: "UpperLimits_gg.root",
    path: "/root-files/UpperLimits_gg.root",
    objects: ["c2"],
    description: "Upper limits on cross-section for gluon-gluon fusion processes."
  },
  {
    name: "UpperLimits_qq.root",
    path: "/root-files/UpperLimits_qq.root",
    objects: ["c1"],
    description: "Upper limits on cross-section for quark-quark annihilation processes."
  },
  {
    name: "Zboson_transverse_momentum.root",
    path: "/root-files/ZbosonMomentumVis.root",
    objects: ["c1"],
    description: "Transverse momentum distribution of Z bosons."
  }
];

export function Visualizations() {
  const [selectedFiles, setSelectedFiles] = useState<string[]>([rootFiles[0].path]);
  const [selectedObjects, setSelectedObjects] = useState<string[]>([rootFiles[0].objects[0]]);

  const handleAddFile = () => {
    // Add the next file in the list as the placeholder
    const nextFileIndex = selectedFiles.length % rootFiles.length;
    setSelectedFiles([...selectedFiles, rootFiles[nextFileIndex].path]);
    setSelectedObjects([...selectedObjects, rootFiles[nextFileIndex].objects[0]]);
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    const newObjects = selectedObjects.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    setSelectedObjects(newObjects);
  };

  const handleFileChange = (index: number, value: string) => {
    const newFiles = [...selectedFiles];
    newFiles[index] = value;
    
    // Find corresponding objects for the selected file
    const selectedFile = rootFiles.find(f => f.path === value);
    const newObjects = [...selectedObjects];
    newObjects[index] = selectedFile?.objects[0] || "";
    
    setSelectedFiles(newFiles);
    setSelectedObjects(newObjects);
  };

  const getObjectsForFile = (filePath: string) => {
    return rootFiles.find(f => f.path === filePath)?.objects || [];
  };

  const getDescriptionForFile = (filePath: string) => {
    return rootFiles.find(f => f.path === filePath)?.description || "No description available.";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Physics Visualizations</h1>
        
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedFiles.map((file, index) => {
              const availableObjects = getObjectsForFile(file);
              const description = getDescriptionForFile(file);
              
              return (
                <div key={index} className="bg-gray-800 p-4 rounded-lg relative group">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-white">
                      {rootFiles.find(f => f.path === file)?.name}
                    </h2>
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(index)}
                      className="text-red-500 hover:text-red-600 transition-opacity opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <select
                      value={file}
                      onChange={(e) => handleFileChange(index, e.target.value)}
                      className="bg-gray-700 text-white rounded px-3 py-2 w-full text-sm"
                    >
                      {rootFiles.map((fileOption, i) => (
                        <option key={i} value={fileOption.path}>
                          {fileOption.name}
                        </option>
                      ))}
                    </select>

                    <select
                      value={selectedObjects[index]}
                      onChange={(e) => {
                        const newObjects = [...selectedObjects];
                        newObjects[index] = e.target.value;
                        setSelectedObjects(newObjects);
                      }}
                      className="bg-gray-700 text-white rounded px-3 py-2 w-full text-sm"
                    >
                      {availableObjects.map((obj, i) => (
                        <option key={i} value={obj}>
                          {obj}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleAddFile}
            className="mt-4 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 text-sm"
          >
            <PlusCircle size={18} className="mr-2" />
            Add Another File
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {selectedFiles.map((file, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-700">
                <h2 className="text-xl font-semibold text-white">{rootFiles.find(f => f.path === file)?.name}</h2>
                <p className="text-gray-400 mt-1">{getDescriptionForFile(file)}</p>
              </div>
              <div className="p-4">
                <RootVisualizer 
                  fileUrls={[file]} 
                  objectNames={[selectedObjects[index]]} 
                  height="300px"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">About These Visualizations</h2>
          <p className="text-gray-300">
            These visualizations are powered by JSROOT, allowing interactive exploration of particle physics data.
            You can zoom, pan, and interact with the plots to better understand the underlying physics phenomena.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Visualizations;