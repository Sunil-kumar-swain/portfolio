import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { profile } from "../data/resume";
import "./LoadingScreen.css";

// A short branded splash that covers the page for a beat while fonts/
// layout settle, then wipes away. `visible` is owned by App so it can be
// tied to real readiness signals instead of an arbitrary timer.
export default function LoadingScreen({ visible }) {
  const prefersReducedMotion = useReducedMotion();
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, ease: "easeInOut" }}
        >
          <motion.div
            className="loading-screen__mark"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {initials}
          </motion.div>
          <motion.div
            className="loading-screen__bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
