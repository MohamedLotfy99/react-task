import { useState } from "react";

interface SpeedProps {
  setSpeed: (speed: number) => void; // Function to set speed
  color?: string;
}

const Speed = ({ setSpeed, color = "primary" }: SpeedProps) => {
  const [selectedSpeed, setSelectedSpeed] = useState<number | null>(null);

  const handleClick = (speed: number) => {
    setSelectedSpeed(speed); // Update selected button
    setSpeed(speed); // Call the setSpeed function
  };

  return (
    <div className="w-fit bg-gray-700 p-4 rounded-lg space-y-4 shadow-md mt-4">
      <h2 className="text-lg font-bold text-white">Speed</h2>

      <div className="flex flex-col items-center space-y-2">
        {[0.5, 1, 2].map((speed) => (
          <button
            key={speed}
            onClick={() => handleClick(speed)}
            className={`px-6 py-2 rounded w-full transition-all duration-200 ${
              selectedSpeed === speed
                ? "btn btn-primary text-white"
                : "btn btn-success text-white"
            }`}
          >
            {speed}x
          </button>
        ))}
      </div>
    </div>
  );
};

export default Speed;
