import { useState } from "react";
import Hud from "./components/Hud";
import Joystick from "./components/Joystick";
// import CameraFeed from "./components/CameraFeed.tsx";
import Bar from "./components/HUD/Bar";
import "./App.css";
import SpeedControl from "./components/Buttons/SpeedControl.tsx";
import DriveControl from "./components/Buttons/DriveControl.tsx";
import LightControl from "./components/Buttons/LightControl.tsx";
import MapControl from "./components/Buttons/MapControl.tsx";
import Speed from "./components/HUD/Speed.tsx";
import MenuAlert from "./components/Alerts/MenuAlert.tsx";
import MenuButton from "./components/Buttons/MenuButton.tsx";
import StopButton from "./components/Buttons/StopButton.tsx";
import StopAlert from "./components/Alerts/StopAlert.tsx";

interface Location {
  x: number; // X coordinate
  y: number; // Y coordinate
}
const App = () => {
  const [speed, setSpeed] = useState(1);
  const [driveMode, setDriveMode] = useState("Manual");
  const [mapMode, setMapMode] = useState("Camera");
  const [light, setLightMode] = useState("Laser");
  const [battery] = useState(89);
  const [location, setLocation] = useState<Location>({ x: 0, y: 0 });

  const [menuAlertVis, setMenuAlertVis] = useState(false);
  const [stopAlertVis, setStopAlertVis] = useState(false);

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
      {/* <CameraFeed /> */}
      <div className="ml-4 flex justify-between">
        <MenuButton onClick={() => setMenuAlertVis(true)}>Menu</MenuButton>
        {menuAlertVis && (
          <MenuAlert onClose={() => setMenuAlertVis(false)}>
            Menu Screen
          </MenuAlert>
        )}

        {stopAlertVis && (
          <StopAlert onClose={() => setStopAlertVis(false)}>
            EMERGENCY STOP
          </StopAlert>
        )}
        <StopButton onClick={() => setStopAlertVis(true)}>STOP</StopButton>
      </div>
      <div className="flex ml-4 space-x-4 justify-between">
        <DriveControl setDriveMode={setDriveMode}></DriveControl>
        <LightControl setLightMode={setLightMode}></LightControl>
      </div>
      <div className="flex ml-4 space-x-4 justify-between">
        <SpeedControl setSpeed={setSpeed} />
      </div>
      <div className="flex ml-30 mr-30  justify-between items-center mt-60">
        <Joystick location={location} setLocation={setLocation} />
        <Speed speed={speed}></Speed>
        <Joystick location={location} setLocation={setLocation} />
      </div>
      <div className="flex items-center justify-center">
        <MapControl setMapMode={setMapMode}></MapControl>
      </div>
    </div>
  );
};

export default App;
