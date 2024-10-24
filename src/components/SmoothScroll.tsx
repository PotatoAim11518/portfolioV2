import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

type SmoothScrollProps = {
  children?: React.ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const { scrollYProgress } = useScroll();
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 });
  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - window.innerHeight);
  });

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) setContentHeight(contentRef.current.scrollHeight);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [contentRef, children]);

  return (
    <>
      <motion.div
        ref={contentRef}
        style={{ y }}
        className="fixed flex flex-col items-center top-0"
      >
        {children}
      </motion.div>
      <div style={{ height: contentHeight }}></div>;
    </>
  );
}
