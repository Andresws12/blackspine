import { useState, useEffect } from "react";

interface MousePosition {
  x: number | null;
  y: number | null;
}

/**
 * Hook that tracks the current mouse position
 * @returns The current x and y coordinates of the mouse
 */
const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: null,
    y: null,
  });
  useEffect(() => {
    const updateMousePosition = (event: MouseEvent): void => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
