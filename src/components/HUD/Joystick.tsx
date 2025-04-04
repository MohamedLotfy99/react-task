import { useState, useRef } from "react";

interface Location {
  x: number;
  y: number;
  absX: number;
  absY: number;
}

interface JoystickProps {
  location: Location;
  setLocation: (location: Location | ((prev: Location) => Location)) => void;
  setLocationDMS: (locationDMS: { x: string; y: string }) => void;

  distance: number;
  setDistance: (distance: number) => void;
}

// Helper function to convert decimal degrees to DMS (Degrees, Minutes, Seconds)
const convertToDMS = (decimal: number, isLatitude: boolean) => {
  const degrees = Math.floor(decimal);
  const minutes = Math.floor((decimal - degrees) * 60);
  const seconds = ((decimal - degrees) * 60 - minutes) * 60;

  let direction = "";
  if (isLatitude) {
    direction = degrees >= 0 ? "N" : "S";
  } else {
    direction = degrees >= 0 ? "E" : "W";
  }

  // Convert to string format
  return `${Math.abs(degrees)}° ${Math.abs(minutes)}' ${Math.abs(
    parseFloat(seconds.toFixed(2))
  )}" ${direction}`;
};

const Joystick = ({
  setLocation,
  setDistance,
  setLocationDMS,
}: JoystickProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const joystickRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const movementInterval = useRef<NodeJS.Timeout | null>(null);
  const directionRef = useRef({ x: 0, y: 0 }); // Track movement direction

  const maxRadius = 55; // Joystick UI movement limit
  const movementSpeed = 0.5; // How fast location updates

  // Start continuous movement
  const startDrag = () => {
    isDragging.current = true;
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchmove", handleDrag, { passive: false });
    document.addEventListener("touchend", stopDrag);

    // Start updating location continuously
    movementInterval.current = setInterval(() => {
      setLocation((prev) => {
        const newX = prev.x + directionRef.current.x * movementSpeed;
        const newY = prev.y + directionRef.current.y * movementSpeed;

        const absX =
          prev.absX + Math.abs(directionRef.current.x) * movementSpeed;
        const absY =
          prev.absY + Math.abs(directionRef.current.y) * movementSpeed;
        // Update location
        setDistance(Math.sqrt(absX * absX + absY * absY)); // Update distance
        // Convert latitude (y) and longitude (x) to DMS format
        const latitudeDMS = convertToDMS(newY, true);
        const longitudeDMS = convertToDMS(newX, false);

        setLocationDMS({ x: longitudeDMS, y: latitudeDMS });
        // // Log the DMS values for debugging
        // console.log(`Latitude: ${latitudeDMS}`);
        // console.log(`Longitude: ${longitudeDMS}`);

        return { x: newX, y: newY, absX, absY };
      });
    }, 50);
  };

  // Handle joystick movement
  const handleDrag = (event: MouseEvent | TouchEvent) => {
    if (!isDragging.current) return;
    event.preventDefault();

    let clientX, clientY;
    if ("touches" in event) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }

    if (!joystickRef.current) return;
    const rect = joystickRef.current.getBoundingClientRect();
    const dx = clientX - (rect.left + rect.width / 2);
    const dy = clientY - (rect.top + rect.height / 2);

    // Constrain joystick movement
    const distance = Math.sqrt(dx * dx + dy * dy);
    let newX = dx,
      newY = dy;
    if (distance > maxRadius) {
      const angle = Math.atan2(dy, dx);
      newX = Math.cos(angle) * maxRadius;
      newY = Math.sin(angle) * maxRadius;
    }

    setPosition({ x: newX, y: newY });

    // Store movement direction (unit vector)
    const magnitude = Math.sqrt(newX * newX + newY * newY);
    directionRef.current = {
      x: magnitude === 0 ? 0 : newX / magnitude,
      y: magnitude === 0 ? 0 : -newY / magnitude,
    };
  };

  // Stop dragging
  const stopDrag = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setPosition({ x: 0, y: 0 }); // Reset joystick handle
    directionRef.current = { x: 0, y: 0 }; // Stop movement

    if (movementInterval.current) {
      clearInterval(movementInterval.current);
      movementInterval.current = null;
    }

    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("mouseup", stopDrag);
    document.removeEventListener("touchmove", handleDrag);
    document.removeEventListener("touchend", stopDrag);
  };

  return (
    <div className="flex justify-center items-center mt-4">
      {/* Joystick Base */}
      <div
        ref={joystickRef}
        className="relative w-44 h-44 bg-gray-600/60 border-6 border-gray-900 rounded-full flex justify-center items-center"
      >
        {/* Joystick Handle */}
        <div
          className="w-22 h-22 border-yellow-500 border-6 rounded-full absolute cursor-pointer"
          style={{
            opacity: 1,
            background: "radial-gradient(circle, black 30%, gray 100%)",
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: isDragging.current ? "none" : "0.2s ease-out",
          }}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
        />
      </div>
    </div>
  );
};

export default Joystick;

//Arrows
// interface JoystickProps {
//   location: { x: number; y: number };
//   setLocation: (location: { x: number; y: number }) => void;
// }

// const Joystick = ({ location, setLocation }: JoystickProps) => {
//   const move = (dx: number, dy: number) => {
//     setLocation({ x: location.x + dx, y: location.y + dy });
//   };
//   return (
//     <div className="w-full bg-gray-600 p-4 rounded-lg shadow-md mt-4 flex justify-center">
//       <button
//         onClick={() => move(-1, 0)}
//         className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center mb-2"
//       >
//         ⬅️
//       </button>
//       <div className="flex flex-col ml-4">
//         <button
//           onClick={() => move(0, 1)}
//           className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center"
//         >
//           ⬆️
//         </button>

//         <button
//           onClick={() => move(0, -1)}
//           className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center mt-2"
//         >
//           ⬇️
//         </button>
//       </div>
//       <button
//         onClick={() => move(1, 0)}
//         className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center ml-4"
//       >
//         ➡️
//       </button>
//     </div>
//   );
// };

// export default Joystick;
