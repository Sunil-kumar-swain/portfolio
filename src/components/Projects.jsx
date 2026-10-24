import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "../data/resume";
import Reveal from "./motion/Reveal";
import Magnetic from "./motion/Magnetic";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal direction="up">
          <div className="section-head">
            <span className="section-index">04</span>
            <h2 className="section-title">Projects</h2>
          </div>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <Reveal
              key={project.name}
              as="article"
              direction={i % 2 === 0 ? "up" : "scale"}
              delay={(i % 3) * 0.08}
              className="project-card"
            >
              {/* No project screenshots exist in the source data, so this
                  is an abstract, per-project gradient "cover" (seeded by
                  project index) that zooms on hover — it stands in for a
                  product shot without inventing fake imagery. */}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-card__cover"
                data-variant={i % 3}
                aria-label={`Open ${project.name}`}
              >
                <span className="project-card__cover-glyph">
                  {project.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <span className="project-card__overlay">
                  <span className="project-card__overlay-btn">
                    View project <ArrowUpRight size={15} />
                  </span>
                </span>
              </a>

              <div className="project-card__body">
                <div className="project-card__head">
                  <h3>{project.name}</h3>
                  <Magnetic strength={10}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${project.name}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </Magnetic>
                </div>

                <ul className="project-card__points">
                  {project.points.map((point, pi) => (
                    <li key={pi}>{point}</li>
                  ))}
                </ul>

                <div className="project-card__stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
