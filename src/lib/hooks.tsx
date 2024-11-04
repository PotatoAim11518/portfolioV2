import { useEffect, useState } from "react";

type WindowState = {
  height: number | null;
  width: number | null;
};

export function useWindowSize() {
  const [size, setSize] = useState<WindowState>({
    height: null,
    width: null,
  });

  useEffect(() => {
    const handleSize = () => {
      setSize((prev) => ({
        ...prev,
        height: window.innerHeight,
        width: window.innerWidth,
      }));
    };
    handleSize();
    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return size;
}
