import { useState } from "react";
import Joystick from "./components/HUD/Joystick.tsx";
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
import Hud from "./components/Hud.tsx";
import ZoomControl from "./components/Buttons/ZoomControl.tsx";

interface Location {
  x: number; // X coordinate
  y: number;
  absX: number;
  absY: number; // Y coordinate
}
interface LocationDMS {
  x: string;
  y: string;
}
//vercel ready
const App = () => {
  const [speed, setSpeed] = useState(1);
  const [driveMode, setDriveMode] = useState("Manual");
  const [mapMode, setMapMode] = useState("Camera");
  const [lightMode, setLightMode] = useState("Laser");
  const [battery] = useState(89);
  const [zoom, setZoom] = useState(1); // Initial zoom level
  const [location, setLocation] = useState<Location>({
    x: 0,
    y: 0,
    absX: 0,
    absY: 0,
  });
  const [distance, setDistance] = useState(0);
  const [locationDMS, setLocationDMS] = useState<LocationDMS>({
    x: "0° 0' 0'' N",
    y: "0° 0' 0'' E",
  });

  const [menuAlertVis, setMenuAlertVis] = useState(false);
  const [stopAlertVis, setStopAlertVis] = useState(false);

  return (
    <div className="w-screen min-h-screen">
      <Bar
        battery={battery}
        locationDMS={locationDMS}
        distance={distance}
        zoom={zoom}
      ></Bar>
      <div className="mt-50 z-10 absolute top-25 left-1/2 transform -translate-x-1/2">
        {stopAlertVis && (
          <StopAlert onClose={() => setStopAlertVis(false)}>
            EMERGENCY STOP
          </StopAlert>
        )}
        {menuAlertVis && (
          <MenuAlert onClose={() => setMenuAlertVis(false)}>
            Menu Screen
          </MenuAlert>
        )}
      </div>
      <div className=" mt-20">
        <Hud driveMode={driveMode} mapMode={mapMode} light={lightMode}></Hud>
      </div>
      <div className=" ml-12 mr-12 flex justify-between">
        <MenuButton onClick={() => setMenuAlertVis(true)}>Menu</MenuButton>

        <StopButton onClick={() => setStopAlertVis(true)}>STOP</StopButton>
      </div>
      <div className="flex ml-12  space-x-4 mt-20 mr-12 justify-between">
        <DriveControl setDriveMode={setDriveMode}></DriveControl>
        <LightControl setLightMode={setLightMode}></LightControl>
      </div>
      <div className="flex ml-12 mr-12 mt-20 space-x-4 justify-between">
        <SpeedControl setSpeed={setSpeed} />
        <ZoomControl setZoomLevel={setZoom}></ZoomControl>
      </div>
      <div className="flex ml-30 mr-30  justify-between items-center mt-10">
        <div className="ml-30 mt-20">
          <Joystick
            distance={distance}
            location={location}
            setLocationDMS={setLocationDMS}
            setLocation={setLocation}
            setDistance={setDistance}
          />
        </div>
        <Speed speed={speed}></Speed>
        <div className="mr-30 mt-20">
          <Joystick
            distance={distance}
            location={location}
            setLocationDMS={setLocationDMS}
            setLocation={setLocation}
            setDistance={setDistance}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <MapControl setMapMode={setMapMode}></MapControl>
      </div>
    </div>
  );
};

export default App;
