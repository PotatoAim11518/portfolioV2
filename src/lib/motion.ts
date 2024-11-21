export const viewVariants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  initialT: {
    y: -10,
    opacity: 0,
  },
  initialL: {
    x: "-1.5rem",
    opacity: 0,
  },
  initialR: {
    x: "1.5rem",
    opacity: 0,
  },
  visible: {
    y: 0,
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
};
