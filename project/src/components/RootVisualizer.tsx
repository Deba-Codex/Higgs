import React, { useEffect, useRef } from "react";

interface RootVisualizerProps {
  fileUrls: string[];
  objectNames: string[];
  width?: string;
  height?: string;
}

export const RootVisualizer: React.FC<RootVisualizerProps> = ({
  fileUrls,
  objectNames,
  width = '100%',
  height = '400px',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    
    const loadAndVisualize = async () => {
      try {
        if (!containerRef.current || !isMounted.current) return;
        
        // Clear previous content
        containerRef.current.innerHTML = "";
        
        const JSROOT = await import("jsroot");
        if (!isMounted.current) return;

        for (let i = 0; i < fileUrls.length; i++) {
          const fileUrl = fileUrls[i];
          const objectName = objectNames[i];

          const rootFileUrl = `${window.location.origin}${fileUrl}`;
          const file = await JSROOT.openFile(rootFileUrl);
          if (!file || !isMounted.current) break;

          const obj = await file.readObject(objectName);
          if (!obj || !isMounted.current) break;

          const frame = document.createElement("div");
          frame.style.width = width;
          frame.style.height = height;
          containerRef.current.appendChild(frame);

          await JSROOT.draw(frame, obj, "hist");
        }
      } catch (error) {
        if (isMounted.current) {
          console.error("ROOT Visualization Error:", error);
          if (containerRef.current) {
            containerRef.current.innerHTML = `<div style='color: red; padding: 10px;'>${error}</div>`;
          }
        }
      }
    };

    loadAndVisualize();

    return () => {
      isMounted.current = false;
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [fileUrls, objectNames, width, height]);

  return (
    <div 
      className="bg-gray-800 rounded-lg p-4 border border-gray-700"
      style={{ width, height }}
    >
      <div ref={containerRef} className="h-full flex items-center justify-center">
        {fileUrls.length === 0 && (
          <div className="text-center">
            <p className="text-gray-400 mb-2">No ROOT file selected</p>
          </div>
        )}
      </div>
    </div>
  );
};