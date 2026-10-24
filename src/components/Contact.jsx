import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/resume";
import Reveal from "./motion/Reveal";
import Magnetic from "./motion/Magnetic";
import "./Contact.css";

export default function Contact() {
  // A "controlled form": each input's value is driven by React state,
  // and every keystroke updates that state via onChange. This is the
  // standard React way to read form input (as opposed to plain HTML
  // forms, where the DOM holds the value).
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [shakeField, setShakeField] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleInvalid(e) {
    // Native HTML5 validation already blocks submission; we just borrow
    // its event to trigger a brief shake on the offending field so the
    // error reads as feedback rather than a silent no-op.
    const { name } = e.target;
    setShakeField(name);
    setTimeout(() => setShakeField(null), 420);
  }

  function handleSubmit(e) {
    e.preventDefault(); // stop the browser's default full-page-reload submit
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="section" style={{ borderBottom: "none" }}>
      <div className="container">
        <Reveal direction="up">
          <div className="section-head">
            <span className="section-index">06</span>
            <h2 className="section-title">Contact</h2>
          </div>
        </Reveal>

        <div className="contact__grid">
          <Reveal direction="left" className="contact__info">
            <p className="contact__lead">
              Open to full stack and backend-focused roles. The fastest way to reach me:
            </p>
            <ul className="contact__list">
              <li>
                <Mail size={16} />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <Phone size={16} />
                <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </li>
              <li>
                <MapPin size={16} />
                <span>{profile.location}</span>
              </li>
            </ul>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <motion.form
              className="contact__form"
              onSubmit={handleSubmit}
              animate={sent ? { opacity: 0.6 } : { opacity: 1 }}
            >
              <motion.label
                animate={shakeField === "name" ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
                transition={{ duration: 0.4 }}
              >
                Name
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  onInvalid={handleInvalid}
                  placeholder="Your name"
                  disabled={sent}
                />
              </motion.label>
              <motion.label
                animate={shakeField === "email" ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
                transition={{ duration: 0.4 }}
              >
                Email
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  onInvalid={handleInvalid}
                  placeholder="you@example.com"
                  disabled={sent}
                />
              </motion.label>
              <motion.label
                animate={shakeField === "message" ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
                transition={{ duration: 0.4 }}
              >
                Message
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  onInvalid={handleInvalid}
                  placeholder="What are you building?"
                  disabled={sent}
                />
              </motion.label>

              <Magnetic strength={10} className="contact__submit-wrap">
                <button type="submit" className="btn btn--primary" disabled={sent}>
                  <AnimatePresence mode="wait" initial={false}>
                    {sent ? (
                      <motion.span
                        key="sent"
                        className="contact__submit-label"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckCircle2 size={16} /> Opening your email app…
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        className="contact__submit-label"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.2 }}
                      >
                        Send message
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </Magnetic>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
