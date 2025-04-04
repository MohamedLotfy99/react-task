interface StopButtonProps {
  children: string;
  onClick: () => void;
}
const StopButton = ({ children, onClick }: StopButtonProps) => {
  return (
    <div className="w-40 h-16 border-8 border-gray-900 rounded-2xl">
      <button
        onClick={onClick}
        className="opacity-90 bg-red-500 text-white h-full w-full"
      >
        {children}
      </button>
    </div>
  );
};

export default StopButton;
