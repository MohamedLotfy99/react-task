interface ControlsProps {
  setSpeed: (speed: number) => void; // Function to set speed
  setDriveMode: (mode: string) => void; // Function to set drive mode
  setLighting: (light: string) => void; // Function to set lighting mode
  setMapMode: (mode: string) => void; // Function to set map mode
}

const Controls = ({
  setSpeed,
  setDriveMode,
  setLighting,
  setMapMode,
}: ControlsProps) => {
  return (
    <div className="w-full bg-gray-700 p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-bold">Controls</h2>

      <div className="flex justify-around mt-2">
        <button
          onClick={() => setDriveMode("Auto")}
          className="bg-blue-500 px-4 py-2 rounded"
        >
          Auto
        </button>
        <button
          onClick={() => setDriveMode("Semi-Auto")}
          className="bg-blue-500 px-4 py-2 rounded"
        >
          Semi-Auto
        </button>
        <button
          onClick={() => setDriveMode("Manual")}
          className="bg-blue-500 px-4 py-2 rounded"
        >
          Manual
        </button>
      </div>

      <div className="flex justify-around mt-2">
        <button
          onClick={() => setSpeed(0.5)}
          className="bg-green-500 px-4 py-2 rounded"
        >
          0.5x
        </button>
        <button
          onClick={() => setSpeed(1)}
          className="bg-green-500 px-4 py-2 rounded"
        >
          1x
        </button>
        <button
          onClick={() => setSpeed(2)}
          className="bg-green-500 px-4 py-2 rounded"
        >
          2x
        </button>
      </div>

      <div className="flex justify-around mt-2">
        <button
          onClick={() => setLighting("Light")}
          className="bg-yellow-500 px-4 py-2 rounded"
        >
          Light
        </button>
        <button
          onClick={() => setLighting("Spot Light")}
          className="bg-yellow-500 px-4 py-2 rounded"
        >
          Spot Light
        </button>
        <button
          onClick={() => setLighting("Laser")}
          className="bg-yellow-500 px-4 py-2 rounded"
        >
          Laser
        </button>
      </div>

      <div className="flex justify-around mt-2">
        <button
          onClick={() => setMapMode("3D Map")}
          className="bg-green-500 px-4 py-2 rounded"
        >
          3D Map
        </button>
        <button
          onClick={() => setMapMode("Camera")}
          className="bg-green-500 px-4 py-2 rounded"
        >
          Camera
        </button>
        <button
          onClick={() => setMapMode("2D Map")}
          className="bg-green-500 px-4 py-2 rounded"
        >
          2D Map
        </button>
      </div>
    </div>
  );
};

export default Controls;
