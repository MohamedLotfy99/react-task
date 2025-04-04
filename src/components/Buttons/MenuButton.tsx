interface MenuButtonProps {
  children: string;
  onClick: () => void;
}
const MenuButton = ({ children, onClick }: MenuButtonProps) => {
  return (
    <div className="w-40 h-16 border-8 border-gray-900 rounded-2xl">
      <button
        onClick={onClick}
        className="opacity-90 h-full w-full bg-gray-600 text-white"
      >
        {children}
      </button>
    </div>
  );
};

export default MenuButton;
