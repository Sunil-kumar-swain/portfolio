import { motion, useReducedMotion } from "framer-motion";
import { skills } from "../data/resume";
import Reveal from "./motion/Reveal";
import "./Skills.css";

// Note on design: the resume data has no numeric proficiency ratings, so
// rather than invent percentages (which would misrepresent the source
// content), each group gets a lightweight animated "signal" indicator
// instead of a fabricated progress bar — it reflects how many skills are
// in that group, not a made-up mastery score.
const chipContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } },
};
const chipItem = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();
  const maxItems = Math.max(...skills.map((g) => g.items.length));

  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal direction="up">
          <div className="section-head">
            <span className="section-index">02</span>
            <h2 className="section-title">Skills</h2>
          </div>
        </Reveal>

        <div className="skills__grid">
          {/* .map() turns each data object into JSX — the core React
              pattern for rendering lists. `key` must be unique per item
              so React can track which DOM node is which across renders. */}
          {skills.map((group, groupIndex) => (
            <Reveal
              key={group.group}
              direction={groupIndex % 2 === 0 ? "up" : "scale"}
              delay={(groupIndex % 3) * 0.06}
            >
              <div className="skills__card">
                <div className="skills__card-head">
                  <h3 className="skills__group">{group.group}</h3>
                  <span className="skills__signal" aria-hidden="true">
                    {Array.from({ length: maxItems }).map((_, i) => (
                      <span
                        key={i}
                        className={`skills__signal-bar ${i < group.items.length ? "is-lit" : ""}`}
                        style={{ transitionDelay: `${i * 0.03}s` }}
                      />
                    ))}
                  </span>
                </div>
                <motion.ul
                  className="skills__chips"
                  variants={chipContainer}
                  initial={prefersReducedMotion ? false : "hidden"}
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {group.items.map((item) => (
                    <motion.li key={item} className="skills__chip" variants={chipItem}>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
