interface HudProps {
  driveMode: string; // Drive mode (e.g., Manual, Autonomous)
  light: string; // Light mode (e.g., Light, Spot Light, Laser)
  mapMode: string; // Map mode (e.g., Camera, Map)
}
const Hud = ({ driveMode, light, mapMode }: HudProps) => {
  const gap = 150;
  return (
    <div
      className=" text-center flex flex-row justify-center absolute top-60 left-1/2 transform -translate-x-1/2"
      style={{ width: "600px", gap: `${gap}px` }} // Adjust width as needed
    >
      <div className="flex flex-col items-center">
        <img
          style={{ width: "100px", height: "100px" }}
          src="src/assets/driveMode.png"
        />
        <p className="bg-gray-800 rounded-xl w-25 h-8 mt-1">{driveMode}</p>
      </div>

      <div className="flex flex-col items-center">
        <img
          style={{ width: "100px", height: "100px" }}
          src="src/assets/mapMode.png"
        />
        <p className="bg-gray-800 rounded-xl w-25 h-8 mt-1 ">{mapMode}</p>
      </div>

      <div className="flex flex-col items-center">
        <img
          style={{ width: "100px", height: "100px" }}
          src="src/assets/lightMode.png"
        />
        <p className="bg-gray-800 rounded-xl w-25 h-8 mt-1">{light}</p>
      </div>
    </div>
  );
};
export default Hud;
