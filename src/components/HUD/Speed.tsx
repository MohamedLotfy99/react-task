import { useState } from "react";

interface SpeedProps {
  setSpeed: (speed: number) => void; // Function to set speed
}

const Speed = ({ setSpeed }: SpeedProps) => {
  const [selectedSpeed, setSelectedSpeed] = useState(-1);

  const handleClick = (speed: number) => {
    setSelectedSpeed(speed); // Update selected button
    setSpeed(speed); // Call the setSpeed function
  };

  return (
    <div className="w-fit border-9 border-gray-800 mt-4 ">
      <div className="flex flex-col items-center w-max">
        {[0.5, 1, 2].map((speed) => (
          <button
            key={speed}
            onClick={() => handleClick(speed)}
            className={`relative px-6 py-2 w-full transition-all duration-200 ${
              selectedSpeed === speed
                ? "bg-gray-500 opacity-100 text-white"
                : "bg-gray-500 opacity-70 text-white"
            }`}
          >
            <span
              className={`absolute top-0 right-0 h-full rounded-l-md ${
                selectedSpeed === speed ? "bg-yellow-500 w-2" : "w-0"
              }`}
            ></span>
            {speed}x
          </button>
        ))}
      </div>
    </div>
  );
};

export default Speed;
