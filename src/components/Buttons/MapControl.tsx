import { useState } from "react";

interface MapControlProps {
  setMapMode: (mapMode: string) => void; // Function to set speed
}

const MapControl = ({ setMapMode }: MapControlProps) => {
  const [selectedMapMode, setSelectedMapMode] = useState("Camera");

  const handleClick = (mapMode: string) => {
    setSelectedMapMode(mapMode); // Update selected button
    setMapMode(mapMode); // Call the setSpeed function
  };

  // Create the dots in a 2x3 table layout (2 columns, 3 rows)
  const renderDots = (mapMode: string) => {
    const dots = [];
    for (let i = 0; i < 2; i++) {
      // 2 rows
      dots.push(
        <div key={i} className="flex">
          {/* 3 columns in each row */}
          <div
            className={`w-1 h-1 mt-0.5 mx-0.5 ${
              selectedMapMode === mapMode ? "bg-yellow-500" : "bg-black"
            }`}
          ></div>
          <div
            className={`w-1 h-1 mt-0.5 mx-0.5 ${
              selectedMapMode === mapMode ? "bg-yellow-500" : "bg-black"
            }`}
          ></div>
          <div
            className={`w-1 h-1 mt-0.5 mx-0.5 ${
              selectedMapMode === mapMode ? "bg-yellow-500" : "bg-black"
            }`}
          ></div>
        </div>
      );
    }
    return dots;
  };

  return (
    <div className="w-fit h-full border-8 border-gray-900 rounded-md mt-2">
      <div className="flex flex-row items-stretch text-s">
        {["3D Map", "Camera", "2D Map"].map((mapMode) => (
          <button
            key={mapMode}
            onClick={() => handleClick(mapMode)}
            className={`flex flex-col items-center px-6 py-2 w-40 transition-all duration-200 ${
              selectedMapMode === mapMode
                ? "opacity-100 bg-gray-500 text-white"
                : "opacity-60 bg-gray-500 text-white"
            }`}
          >
            {/* Dot Table aligned above the text and in a 2x3 horizontal grid */}
            <div className="flex flex-col items-center mb-2">
              {renderDots(mapMode)}
            </div>

            {/* Map Mode Text */}
            <span>{mapMode}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MapControl;
