interface SpeedProps {
  speed: number;
}

const Speed = ({ speed }: SpeedProps) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-white font-bold text-[26px] mt-15">{speed}x</p>
      <p className="text-gray-300 text-[16px]">m/s</p>
    </div>
  );
};

export default Speed;
