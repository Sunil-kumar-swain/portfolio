import { motion, useReducedMotion } from "framer-motion";

/**
 * Reveal — wraps any block of content and animates it in once, the first
 * time it enters the viewport. This is the single mechanism behind every
 * "section fades/slides/scales into view while scrolling" effect on the
 * site: sections don't write their own animation code, they just wrap
 * their existing JSX in <Reveal>.
 *
 * direction: "up" | "down" | "left" | "right" | "scale" | "none"
 * delay:     stagger offset in seconds (used for lists of cards)
 * once:      always true by default — per the spec, each reveal fires once
 */
const OFFSETS = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { y: 0, x: 28 },
  right: { y: 0, x: -28 },
  scale: { y: 0, x: 0 },
  none: { y: 0, x: 0 },
};

export default function Reveal({
  children,
  as = "div",
  direction = "up",
  delay = 0,
  duration = 0.55,
  amount = 0.2,
  className,
  style,
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  const offset = OFFSETS[direction] || OFFSETS.up;

  if (prefersReducedMotion) {
    // No motion at all — content is simply present. Respecting this is
    // a hard requirement, not a nice-to-have.
    const Tag = as;
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{
        opacity: 0,
        y: offset.y,
        x: offset.x,
        scale: direction === "scale" ? 0.94 : 1,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
