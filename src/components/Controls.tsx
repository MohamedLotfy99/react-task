interface ControlsProps {
  setSpeed: (speed: number) => void; // Function to set speed
  setDriveMode: (mode: string) => void; // Function to set drive mode
  setLighting: (light: string) => void; // Function to set lighting mode
  setMapMode: (mode: string) => void; // Function to set map mode
}

const Controls = ({ setLighting, setMapMode }: ControlsProps) => {
  return (
    <div className="w-full bg-gray-700 p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-bold">Controls</h2>

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
