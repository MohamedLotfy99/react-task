import { useState } from "react";
import Hud from "./components/Hud";
import Controls from "./components/Controls";
import Joystick from "./components/Joystick";
import CameraFeed from "./components/CameraFeed.tsx";
import Bar from "./components/HUD/Bar";
import "./App.css";
import Speed from "./components/HUD/Speed.tsx";
import DriveControl from "./components/HUD/DriveControl.tsx";

interface Location {
  x: number; // X coordinate
  y: number; // Y coordinate
}
const App = () => {
  const [speed, setSpeed] = useState(0.5);
  const [driveMode, setDriveMode] = useState("Manual");
  const [mapMode, setMapMode] = useState("Camera");
  const [light, setLightMode] = useState("Light");
  const [battery] = useState(85);
  const [location, setLocation] = useState<Location>({ x: 0, y: 0 });

  return (
    <div className="w-screen min-h-screen">
      <Bar>
        <img src="src/assets/atom.png" className="h-12 w-auto"></img>
      </Bar>
      <Hud
        speed={speed}
        battery={battery}
        location={location}
        driveMode={driveMode}
        light={light}
        mapMode={mapMode}
      />
      <CameraFeed />
      <Speed setSpeed={setSpeed} />
      <DriveControl setDriveMode={setDriveMode}></DriveControl>
      <Controls
        setMapMode={setMapMode}
        setSpeed={setSpeed}
        setDriveMode={setDriveMode}
        setLighting={setLightMode}
      />
      <Joystick location={location} setLocation={setLocation} />
    </div>
  );
};

export default App;
