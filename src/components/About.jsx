import { profile } from "../data/resume";
import Reveal from "./motion/Reveal";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal direction="up">
          <div className="section-head">
            <span className="section-index">01</span>
            <h2 className="section-title">About</h2>
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <p className="about__text">{profile.summary}</p>
        </Reveal>
      </div>
    </section>
  );
}
