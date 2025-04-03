import { ReactNode } from "react";

interface BarProps {
  children: ReactNode;
}
const Bar = ({ children }: BarProps) => {
  return (
    <div className="mb-5 h-20 bg-black ">
      <div className="flex items-left p-4">
        <div className="flex items-center">{children}</div>
        <div className="flex items-center text-white text-[24px] font-semibold ml-2">
          Oinride
        </div>
        <div className="flex items-center mt-2 text-zinc-500 text-[18px] font-medium ml-10">
          ControlWire
        </div>
      </div>
    </div>
  );
};

export default Bar;
