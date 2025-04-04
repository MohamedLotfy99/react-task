import { useState, useEffect } from "react";

interface BarProps {
  battery: number;
  // location: { x: number; y: number };
  distance: number;
  zoom: number;
  locationDMS: { x: string; y: string };
}
const Bar = ({ battery, distance, locationDMS, zoom }: BarProps) => {
  // const longtitude = location.x.toFixed(2);
  // const latitude = location.y.toFixed(2);
  const formattedDistance = distance.toFixed(2);

  const [startTime] = useState<number>(Date.now());
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      setElapsedTime(Date.now() - startTime);
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
  const hours = Math.floor(elapsedTime / 1000 / 3600);

  return (
    <div className="h-20 bg-black">
      <div className="flex items-center h-20 justify-between overflow-visible">
        <div className="flex items-center">
          <img src="src/assets/atom.png" className="h-12 ml-4 w-auto"></img>
          <div className=" text-white text-[24px] font-semibold ml-2">
            Oinride
          </div>
          <div className="mt-1 text-zinc-500 text-[18px] font-medium ml-6">
            ControlWire
          </div>
        </div>
        <svg
          className="overflow-y-visible absolute top-0 left-0"
          width="100%"
          viewBox="-2.5 0 131 13.5" // Increased height from 9 to 13.5 (1.5x)
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 17 0 L 19 3 C 21 6 21 6 39 6 L 35 0"
            stroke="#000000"
            stroke-width="0.4"
            fill="#2F2F2E"
          />
          <path
            d="M 35 0 L 39 6 C 41 9 41 9 56 9 L 50 0"
            stroke="#000000"
            stroke-width="0.4"
            fill="#464646"
          />
          <path
            d="M 50 0 L 56 9 C 58 12 58 12 63 12 C 68 12 68 12 70 9 L 76 0"
            stroke="#000000"
            stroke-width="0.4"
            fill="#5D5D5D"
          />
          <path
            d="M 76 0 L 70 9 C 85 9 85 9 87 6 L 91 0"
            stroke="#000000"
            stroke-width="0.4"
            fill="#464646"
          />
          <path
            d="M 91 0 L 87 6 C 107 6 107 6 109 3 L 111 0"
            stroke="#000000"
            stroke-width="0.4"
            fill="#2F2F2E"
          />
        </svg>

        <div
          style={{ columnGap: "1%" }}
          className="z-3 mt-5 absolute top-0 left-0 w-full flex flex-row justify-around px-90 items-start text-center"
        >
          <div className="flex w-65  gap-x-10 items-center justify-center">
            <div className="flex flex-col ml-16 gap-y-3 items-center justify-center">
              <p className="text-gray-400 font-semibold">Distance</p>
              <p className="font-bold">{formattedDistance} m</p>
            </div>
            <div className="flex flex-col  gap-y-3 items-center justify-center">
              <p className="text-gray-400 font-semibold">Running</p>
              <p className="font-bold">{`${hours}h ${minutes}m ${seconds}s`}</p>
            </div>
          </div>
          <div className="flex flex-col w-50 gap-y-5 ml-22 items-center justify-center">
            <p className="text-gray-400 text-2xl font-semibold">Latitude</p>
            <p className="font-bold text-2xl">{locationDMS.y}</p>
          </div>
          <div className="flex flex-col w-85 gap-y-10 items-center justify-center">
            <p className="font-bold text-gray-400 text-3xl">STATUS</p>
            <p
              className="bg-green-600 w-40 h-20 flex items-center text-3xl font-bold justify-center"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 10% 100% )",
              }}
            >
              OK
            </p>
          </div>
          <div className="flex flex-col w-52 mr-26 gap-y-5 items-center justify-center">
            <p className="text-gray-400 text-2xl font-semibold">Longtitude</p>
            <p className="font-bold text-2xl">{locationDMS.x}</p>
          </div>
          <div className="flex flex-row gap-x-16 mr-5 items-center justify-center">
            <div className="flex flex-col gap-y-3 items-center justify-center">
              <p className="text-gray-400 font-semibold">Elevation</p>
              <p className="font-bold">127 m</p>
            </div>
            <div className="flex flex-col gap-y-3 items-center justify-center">
              <p className="text-gray-400 font-semibold">Temperature</p>
              <p className="font-bold">21&#176;C</p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col items-center mr-10">
            <p className="font-bold">Zoom:</p>
            <p className="font-bold">{zoom}x</p>
          </div>
          <div className="flex flex-col items-center justify-center mr-10">
            <img
              style={{
                maxWidth: 100,
                maxHeight: 40,
              }}
              src="src/assets/battery.png"
            ></img>
            <p className="text-10">{battery}%</p>
          </div>
          <div className="mr-8 flex flex-col items-center justify-center">
            <p>{currentTime.toLocaleDateString()}</p>
            <p>{currentTime.toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
