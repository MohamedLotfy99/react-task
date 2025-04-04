interface SpeedProps {
  speed: number;
}

const Speed = ({ speed }: SpeedProps) => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Blurry Circle Background */}
      <div className="absolute w-30 h-30 top-12 bg-yellow-950/60 rounded-full blur-2xl z-[-1]" />

      <p className="text-white font-bold text-7xl mt-15">{speed}</p>
      <p className="text-gray-300 text-2xl">m/s</p>
    </div>
  );
};

export default Speed;
