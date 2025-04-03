interface MenuButtonProps {
  children: string;
  onClick: () => void;
}
const MenuButton = ({ children, onClick }: MenuButtonProps) => {
  return (
    <div className="w-fit border-8 border-gray-900 rounded-e-md mt-2">
      <button onClick={onClick} className="opacity-90 bg-gray-500 text-white">
        {children}
      </button>
    </div>
  );
};

export default MenuButton;
