import { useState } from "react";

interface LightControlProps {
  setLightMode: (lightMode: string) => void; // Function to set speed
}

const LightControl = ({ setLightMode }: LightControlProps) => {
  const [selectedLightMode, setSelectedLightMode] = useState("Laser");

  const handleClick = (lightMode: string) => {
    setSelectedLightMode(lightMode); // Update selected button
    setLightMode(lightMode); // Call the setSpeed function
  };

  // Create the dots in a 2x3 table layout (2 columns, 3 rows)
  const renderDots = (lightMode: string) => {
    const dots = [];
    for (let i = 0; i < 3; i++) {
      // 3 rows
      dots.push(
        <div key={i} className="flex">
          {/* 2 columns in each row */}
          <div
            className={`w-1 h-1 mt-0.5 mx-0.5 ${
              selectedLightMode === lightMode ? "bg-yellow-500" : "bg-black"
            }`}
          ></div>
          <div
            className={`w-1 h-1 mt-0.5 mx-0  ${
              selectedLightMode === lightMode ? "bg-yellow-500" : "bg-black"
            }`}
          ></div>
        </div>
      );
    }
    return dots;
  };

  return (
    <div className="w-fit border-8 border-gray-900 rounded-e-md mt-2">
      <div className="flex flex-col items-center w-fit">
        {["Light", "Spot Light", "Laser"].map((lightMode) => (
          <button
            key={lightMode}
            onClick={() => handleClick(lightMode)}
            className={`flex items-center px-6 py-2 w-full transition-all duration-200  ${
              selectedLightMode === lightMode
                ? "opacity-100 bg-gray-500 text-white"
                : "opacity-60 bg-gray-500 text-white"
            }`}
          >
            {/* Dot Table aligned to the right and in a 2x3 grid layout */}
            <div className="flex flex-col items-start mr-4">
              {renderDots(lightMode)}
            </div>
            {/* Speed Text */}
            <span className="mr-4">{lightMode}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LightControl;
