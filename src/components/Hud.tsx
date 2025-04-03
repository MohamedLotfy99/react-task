interface HudProps {
  speed: number; // Speed in m/s
  battery: number; // Battery percentage
  location: { x: number; y: number }; // Location coordinates
  driveMode: string; // Drive mode (e.g., Manual, Autonomous)
  light: string; // Light mode (e.g., Light, Spot Light, Laser)
  mapMode: string; // Map mode (e.g., Camera, Map)
}
const Hud = ({
  speed,
  battery,
  location,
  driveMode,
  light,
  mapMode,
}: HudProps) => {
  return (
    <div className="w-full bg-gray-800 p-4 rounded-lg shadow-md text-center">
      <p className="text-lg font-bold">Robot HUD</p>
      <p>Speed: {speed} m/s</p>
      <p>Battery: {battery}%</p>
      <p>Drive Mode: {driveMode}</p>
      <p>Lightning: {light}</p>
      <p>Map Mode: {mapMode}</p>
      <p>
        Location: ({location.x}, {location.y})
      </p>
    </div>
  );
};
export default Hud;
