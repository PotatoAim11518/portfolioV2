import { useEffect, useState } from "react";

export function useWindowSize() {
  const [size, setSize] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const handleSize = () => {
      setSize((prev) => ({
        ...prev,
        height: window.innerHeight,
        width: window.innerWidth,
      }));
    };

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return size;
}
