import { useEffect, useState } from "react";
import { Mail, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/resume";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import Magnetic from "./motion/Magnetic";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);

  // Back-to-top only appears once there's somewhere to go back to —
  // avoids a dead button sitting on screen for the first viewport.
  useEffect(() => {
    function handleScroll() {
      setShowTop(window.scrollY > 480);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {year} {profile.name}</span>

        <div className="footer__socials">
          <Magnetic strength={10}>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={16} />
            </a>
          </Magnetic>
          <Magnetic strength={10}>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon size={16} />
            </a>
          </Magnetic>
          <Magnetic strength={10}>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={16} />
            </a>
          </Magnetic>
        </div>

        <span className="footer__made">Built with React · Vite</span>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            className="footer__back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            initial={{ opacity: 0, y: 16, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.8 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
