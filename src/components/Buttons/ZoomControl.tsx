import { useState } from "react";

interface ZoomControlProps {
  setZoomLevel: (zoom: number) => void; // Function to update the zoom level externally if needed
}

const ZoomControl = ({ setZoomLevel }: ZoomControlProps) => {
  const [zoom, setZoom] = useState(1); // Initial zoom level

  const handleZoomChange = (delta: number) => {
    const newZoom = Math.min(5, Math.max(1, zoom + delta)); // Clamp between 1 and 5
    setZoom(newZoom);
    setZoomLevel(newZoom);
  };

  return (
    <div className="w-fit border-8 border-gray-900 mr-4 rounded-2xl mt-2">
      <div className="flex flex-col items-center w-fit h-full">
        <button
          onClick={() => handleZoomChange(1)}
          className="flex items-center px-6 py-2 w-full transition-all duration-200 opacity-80 bg-gray-600 text-white h-full border-b-2 border-black hover:opacity-100"
        >
          <div className="flex flex-col items-start mr-4">
            {/* Simple + icon made of dots */}
            <div className="w-1 h-1 bg-yellow-500 my-0.5" />
            <div className="w-3 h-1 bg-yellow-500 my-0.5" />
            <div className="w-1 h-1 bg-yellow-500 my-0.5" />
          </div>
          <span className="mr-4">Zoom In</span>
        </button>

        <button
          onClick={() => handleZoomChange(-1)}
          className="flex items-center px-6 py-2 w-full transition-all duration-200 opacity-80 bg-gray-600 text-white h-full hover:opacity-100"
        >
          <div className="flex flex-col items-start mr-4">
            {/* Simple - icon made of dots */}
            <div className="w-3 h-1 bg-yellow-500 my-0.5" />
          </div>
          <span className="mr-4">Zoom Out</span>
        </button>
      </div>
    </div>
  );
};

export default ZoomControl;
