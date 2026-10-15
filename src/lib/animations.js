// Centralized Framer Motion Animation System
// Consistent timing, professional easings, spring physics

export const TRANSITION_SMOOTH = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for snappy, editorial feel
};

export const TRANSITION_FAST = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1],
};

export const TRANSITION_SPRING = {
  type: "spring",
  stiffness: 260,
  damping: 24,
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: TRANSITION_SMOOTH 
  },
  exit: { opacity: 0, y: -20, transition: TRANSITION_FAST },
};

export const fadeDown = {
  initial: { opacity: 0, y: -30 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: TRANSITION_SMOOTH 
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.94 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: TRANSITION_SMOOTH 
  },
  exit: { opacity: 0, scale: 0.96, transition: TRANSITION_FAST },
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textReveal = {
  initial: { y: "100%", opacity: 0 },
  animate: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } 
  },
  exit: { 
    opacity: 0, 
    y: -16, 
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } 
  },
};

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: { 
    y: -6, 
    scale: 1.01,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } 
  }
};
