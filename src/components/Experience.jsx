import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { experience } from "../data/resume";
import Reveal from "./motion/Reveal";
import "./Experience.css";

export default function Experience() {
  const trackRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // useScroll tracks how far `trackRef` has passed through the viewport
  // (0 → just entered, 1 → fully scrolled past). We feed that straight
  // into a vertical scaleY, so the accent line genuinely grows as the
  // person scrolls rather than just animating in once.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.8", "end 0.35"],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal direction="up">
          <div className="section-head">
            <span className="section-index">03</span>
            <h2 className="section-title">Experience</h2>
          </div>
        </Reveal>

        <div className="timeline" ref={trackRef}>
          <span className="timeline__track" aria-hidden="true" />
          <motion.span
            className="timeline__track-fill"
            aria-hidden="true"
            style={
              prefersReducedMotion
                ? { transform: "scaleY(1)" }
                : { scaleY: lineProgress }
            }
          />

          {experience.map((job, i) => (
            <Reveal
              key={job.company}
              as="article"
              direction={i % 2 === 0 ? "left" : "right"}
              delay={0.05}
              className="timeline__item"
            >
              <div className="timeline__marker" />
              <div className="timeline__content">
                <div className="timeline__heading">
                  <h3>{job.title}</h3>
                  <span className="timeline__period">{job.period}</span>
                </div>
                <p className="timeline__meta">
                  {job.company} · {job.location}
                </p>
                <ul className="timeline__points">
                  {job.points.map((point, pi) => (
                    <li key={pi}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
