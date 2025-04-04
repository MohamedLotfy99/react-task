import { ReactNode } from "react";

interface StopAlertProps {
  children: ReactNode;
  onClose: () => void;
}

const StopAlert = ({ children, onClose }: StopAlertProps) => {
  return (
    <div className="flex justify-center h-100 w-150 items-center bg-red-700 text-white p-4 rounded-md shadow-md">
      <div className="flex items-center">{children}</div>
      <button
        type="button"
        className="ml-4 text-white hover:text-gray-300"
        onClick={onClose}
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-fit"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="5"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default StopAlert;
