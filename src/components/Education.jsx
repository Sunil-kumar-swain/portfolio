import { education, additional } from "../data/resume";
import Reveal from "./motion/Reveal";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <Reveal direction="up">
          <div className="section-head">
            <span className="section-index">05</span>
            <h2 className="section-title">Education</h2>
          </div>
        </Reveal>

        <div className="education__grid">
          <Reveal direction="left">
            <ul className="education__list">
              {education.map((edu, i) => (
                <Reveal as="li" key={edu.degree} direction="up" delay={i * 0.08} className="education__item">
                  <h3>{edu.degree}</h3>
                  <p>{edu.school}</p>
                  <span>{edu.period}</span>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right">
            <ul className="education__list">
              {additional.map((item, i) => (
                <Reveal as="li" key={item.title} direction="up" delay={i * 0.08} className="education__item">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <span>{item.period}</span>
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
