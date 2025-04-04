import { useState } from "react";

interface SpeedProps {
  setSpeed: (speed: number) => void; // Function to set speed
}

const Speed = ({ setSpeed }: SpeedProps) => {
  const [selectedSpeed, setSelectedSpeed] = useState(1);

  const handleClick = (speed: number) => {
    setSelectedSpeed(speed); // Update selected button
    setSpeed(speed); // Call the setSpeed function
  };

  // Create the dots in a 2x3 table layout (2 columns, 3 rows)
  const renderDots = (speed: number) => {
    const dots = [];
    for (let i = 0; i < 3; i++) {
      // 3 rows
      dots.push(
        <div key={i} className="flex">
          {/* 2 columns in each row */}
          <div
            className={`w-1 h-1 mt-0.5 mx-0.5 ${
              selectedSpeed === speed ? "bg-yellow-500" : "bg-black"
            }`}
          ></div>
          <div
            className={`w-1 h-1 mt-0.5 mx-0  ${
              selectedSpeed === speed ? "bg-yellow-500" : "bg-black"
            }`}
          ></div>
        </div>
      );
    }
    return dots;
  };

  return (
    <div className="w-30 h-45 border-8 border-gray-900  rounded-2xl mt-2">
      <div className="flex flex-col items-center w-full h-full">
        {[0.5, 1, 2].map((speed) => (
          <button
            key={speed}
            onClick={() => handleClick(speed)}
            className={`flex items-center px-6 py-2 w-full transition-all duration-200  ${
              selectedSpeed === speed
                ? "opacity-100 bg-gray-500 text-white h-full border-b-2 border-black"
                : "opacity-80 bg-gray-600 text-white h-full border-b-2 border-black"
            }`}
          >
            {/* Speed Text */}
            <span className="mr-4">{speed}x</span>

            {/* Dot Table aligned to the right and in a 2x3 grid layout */}
            <div className="flex flex-col items-end ml-auto">
              {renderDots(speed)}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Speed;
