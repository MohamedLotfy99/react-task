import { useState } from "react";

interface DriveControlProps {
  setDriveMode: (driveMode: string) => void; // Function to set speed
}

const DriveControl = ({ setDriveMode }: DriveControlProps) => {
  const [selectedDriveMode, setSelectedDriveMode] = useState("Auto");

  const handleClick = (drivemode: string) => {
    setSelectedDriveMode(drivemode); // Update selected button
    setDriveMode(drivemode); // Call the setSpeed function
  };

  // Create the dots in a 2x3 table layout (2 columns, 3 rows)
  const renderDots = (drivemode: string) => {
    const dots = [];
    for (let i = 0; i < 3; i++) {
      // 3 rows
      dots.push(
        <div key={i} className="flex">
          {/* 2 columns in each row */}
          <div
            className={`w-1 h-1 mt-0.5 mx-0.5 ${
              selectedDriveMode === drivemode ? "bg-yellow-500" : "bg-black"
            }`}
          ></div>
          <div
            className={`w-1 h-1 mt-0.5 mx-0  ${
              selectedDriveMode === drivemode ? "bg-yellow-500" : "bg-black"
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
        {["Auto", "Semi-Auto", "Manual"].map((driveMode) => (
          <button
            key={driveMode}
            onClick={() => handleClick(driveMode)}
            className={`flex items-center px-6 py-2 w-full transition-all duration-200  ${
              selectedDriveMode === driveMode
                ? "opacity-100 bg-gray-500 text-white"
                : "opacity-60 bg-gray-500 text-white"
            }`}
          >
            {/* Speed Text */}
            <span className="mr-4">{driveMode}</span>

            {/* Dot Table aligned to the right and in a 2x3 grid layout */}
            <div className="flex flex-col items-end ml-auto">
              {renderDots(driveMode)}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DriveControl;
