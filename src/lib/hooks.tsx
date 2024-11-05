import { MutableRefObject, useEffect, useState } from "react";

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

export function useVisibleSectionId(
  refs: MutableRefObject<(HTMLElement | null)[]>
) {
  const [visibleSectionId, setVisibleSectionId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSectionId(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, [refs]);

  return visibleSectionId;
}

export function usePathChange() {
  const [path, setPath] = useState("");

  useEffect(() => {
    const handlePathChange = () => {
      const path = window.location.hash;
      setPath(path);
    };
    handlePathChange();
    window.addEventListener("hashchange", handlePathChange);
    return () => window.removeEventListener("hashchange", handlePathChange);
  }, [path]);
}
