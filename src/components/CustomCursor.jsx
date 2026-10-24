import { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

// A small ring that follows the pointer and grows over clickable
// elements. Only mounts its listeners when the device actually has a
// fine pointer (mouse/trackpad) — on touch devices this component
// renders nothing, so it costs zero on mobile.
export default function CustomCursor() {
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(canHover && !reduced);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let raf = null;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    function handleMove(e) {
      x = e.clientX;
      y = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
        raf = null;
      });
    }

    function handleOver(e) {
      const interactive = e.target.closest(
        "a, button, input, textarea, [role='button']"
      );
      setHovering(Boolean(interactive));
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      className={`custom-cursor ${hovering ? "is-hovering" : ""}`}
      aria-hidden="true"
    />
  );
}
