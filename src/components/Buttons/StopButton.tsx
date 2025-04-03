interface StopButtonProps {
  children: string;
  onClick: () => void;
}
const StopButton = ({ children, onClick }: StopButtonProps) => {
  return (
    <div className="w-fit border-8 border-gray-900 rounded-e-md mt-2 mr-4">
      <button onClick={onClick} className="opacity-90 bg-red-500 text-white">
        {children}
      </button>
    </div>
  );
};

export default StopButton;
