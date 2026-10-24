import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Magnetic — makes its child "pull" gently toward the cursor when hovered,
 * then spring back on mouse-leave. Used on primary CTAs and social icons.
 * Disabled entirely for touch devices (no hover to track) and for people
 * who prefer reduced motion.
 */
export default function Magnetic({ children, strength = 18, className }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    ref.current.style.setProperty("--mx", `${(relX / rect.width) * strength}px`);
    ref.current.style.setProperty("--my", `${(relY / rect.height) * strength}px`);
  }

  function handleMouseLeave() {
    if (!ref.current) return;
    ref.current.style.setProperty("--mx", `0px`);
    ref.current.style.setProperty("--my", `0px`);
  }

  if (prefersReducedMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      ref={ref}
      className={`magnetic ${className || ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.span>
  );
}
