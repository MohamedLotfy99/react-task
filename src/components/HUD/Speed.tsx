interface SpeedProps {
  speed: number;
}

const Speed = ({ speed }: SpeedProps) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-white font-bold text-[40px] mt-15">{speed}</p>
      <p className="text-gray-300 text-[21px]">m/s</p>
    </div>
  );
};

export default Speed;
