import { ReactNode, useState, useEffect } from "react";

interface BarProps {
  children: ReactNode;
  battery: number;
}
const Bar = ({ children, battery }: BarProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-10 h-20 bg-black">
      <div className="flex items-center h-20 justify-between">
        <div className="flex items-center">
          <div className="flex items-center">{children}</div>
          <div className=" text-white text-[24px] font-semibold ml-2">
            Oinride
          </div>
          <div className="mt-1 text-zinc-500 text-[18px] font-medium ml-6">
            ControlWire
          </div>
        </div>
        <div
          style={{
            background: "lightblue",
            clipPath:
              "polygon(0% 0%, 20% 100%, 100% 100%, 80% 0%, 80% 0%, 20% 0%)",
            transform: "scaleY(1)",
            transformOrigin: "top",
          }}
          className="flex items-center border-b-30  border-black flex-col content-center h-25 w-40 ml-2 self-start" // 'h-25' is your defined height class
        >
          <p className="mt-4">Manga</p>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col items-center mr-8">
            <img
              style={{
                width: 25,
                height: 20,
              }}
              src="src/assets/battery.png"
            ></img>
            <p className="text-xs">{battery}%</p>
          </div>
          <div className="mr-8">
            <p>{currentTime.toLocaleDateString()}</p>
            <p>{currentTime.toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
