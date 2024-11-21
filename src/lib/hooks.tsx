import {
  DOMKeyframesDefinition,
  ElementOrSelector,
  stagger,
  useAnimate,
  useInView,
} from "framer-motion";
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
        threshold: 0.2,
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

export function useStaggerAnimation(
  elementTag: ElementOrSelector,
  initialState: DOMKeyframesDefinition,
  endState: DOMKeyframesDefinition,
  duration = 0.05,
  startDelay = 0,
  once = true
) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: once });

  const staggerList = stagger(duration, { startDelay: startDelay });

  useEffect(() => {
    animate(elementTag, isInView ? endState : initialState, {
      delay: isInView ? staggerList : 1,
    });
  }, [animate, staggerList, isInView, elementTag, initialState, endState]);

  return scope;
}
