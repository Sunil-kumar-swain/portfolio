import { useEffect, useState } from "react";
import { Mail, ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { profile, heroMetrics } from "../data/resume";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import Magnetic from "./motion/Magnetic";
import "./Hero.css";

// Entrance stagger for the copy column. This runs once, on mount, not on
// scroll — the hero is already in view on load, so a viewport trigger
// would never fire the way it does for lower sections.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  // `lines` holds every metric line that has fully "typed" itself out.
  // `activeIndex` tracks which metric we're currently animating.
  const [lines, setLines] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // This effect re-runs every time `activeIndex` changes. It types out
  // heroMetrics[activeIndex] one character at a time, then — once
  // finished — pushes the completed line into `lines` and advances to
  // the next metric. When we run out of metrics, it simply stops.
  useEffect(() => {
    if (activeIndex >= heroMetrics.length) return;

    const metric = heroMetrics[activeIndex];
    const fullText = `> benchmark --check ${metric.label}`;
    let charIndex = 0;
    let currentText = "";

    const typing = setInterval(() => {
      charIndex += 1;
      currentText = fullText.slice(0, charIndex);
      setLines((prev) => {
        const next = [...prev];
        next[activeIndex] = { command: currentText, done: false };
        return next;
      });

      if (charIndex >= fullText.length) {
        clearInterval(typing);
        // brief pause after the command "runs", then reveal the result
        setTimeout(() => {
          setLines((prev) => {
            const next = [...prev];
            next[activeIndex] = { command: fullText, done: true, metric };
            return next;
          });
          setActiveIndex((i) => i + 1);
        }, 250);
      }
    }, 18);

    return () => clearInterval(typing);
  }, [activeIndex]);

  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <motion.div
          className="hero__copy"
          variants={container}
          initial={prefersReducedMotion ? false : "hidden"}
          animate="show"
        >
          <motion.p className="hero__eyebrow" variants={item}>
            // full stack developer
          </motion.p>
          <motion.h1 className="hero__name" variants={item}>
            {profile.name}
          </motion.h1>
          <motion.p className="hero__role" variants={item}>
            {profile.role}
          </motion.p>
          <motion.p className="hero__tagline" variants={item}>
            {profile.tagline}
          </motion.p>

          <motion.div className="hero__cta" variants={item}>
            <Magnetic strength={14}>
              <a href="#projects" className="btn btn--primary">
                View projects
              </a>
            </Magnetic>
            <Magnetic strength={14}>
              <a href="#contact" className="btn btn--ghost">
                Get in touch
              </a>
            </Magnetic>
          </motion.div>

          <motion.div className="hero__socials" variants={item}>
            <Magnetic strength={10}>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={18} />
              </a>
            </Magnetic>
            <Magnetic strength={10}>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
            </Magnetic>
            <Magnetic strength={10}>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__terminal"
          role="img"
          aria-label="Animated benchmark results"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__terminal-glow" aria-hidden="true" />
          <div className="hero__terminal-bar">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
            <span className="hero__terminal-title">production_metrics.sh</span>
          </div>
          <div className="hero__terminal-body">
            {lines.map((line, i) => (
              <div key={i} className="hero__terminal-line">
                <span className="hero__terminal-command">{line.command}</span>
                {line.done && (
                  <div className="hero__terminal-result">
                    <span className="hero__terminal-value">{line.metric.value}</span>
                    <span className="hero__terminal-detail">{line.metric.detail}</span>
                  </div>
                )}
              </div>
            ))}
            <span className="hero__cursor" aria-hidden="true">
              ▍
            </span>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
