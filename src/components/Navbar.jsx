import { useEffect, useState } from "react";
import { Menu, X, Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, THEMES } from "../context/ThemeContext";
import { profile } from "../data/resume";
import Magnetic from "./motion/Magnetic";
import "./Navbar.css";

const LINKS = [
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Navbar() {
  // Local UI state: is the mobile menu open? Is the theme dropdown open?
  // These don't need to live in context because no other component
  // cares about them.
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("about");
  const { theme, setTheme } = useTheme();

  function handleNavClick() {
    setMenuOpen(false);
  }

  // Sticky navbar gets a slightly denser glass background once the page
  // has scrolled past the hero — a subtle cue rather than a hard jump.
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: watch every section referenced in LINKS and mark whichever
  // one is most visible as "active", driving the sliding underline below.
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand">
          {profile.name.split(" ")[0]}
          <span className="navbar__brand-dot">.</span>
        </a>

        <nav className={`navbar__links ${menuOpen ? "is-open" : ""}`}>
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className={activeId === link.id ? "is-active" : ""}
            >
              {link.label}
              {activeId === link.id && (
                <motion.span
                  className="navbar__indicator"
                  layoutId="navbar-indicator"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <div className="theme-switcher">
            <Magnetic strength={8}>
              <button
                className="theme-switcher__trigger"
                onClick={() => setThemeMenuOpen((open) => !open)}
                aria-label="Change theme"
                aria-expanded={themeMenuOpen}
              >
                <Palette size={17} />
                <span>{THEMES.find((t) => t.id === theme)?.label}</span>
              </button>
            </Magnetic>

            <AnimatePresence>
              {themeMenuOpen && (
                <motion.ul
                  className="theme-switcher__menu"
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                >
                  {THEMES.map((t) => (
                    <li key={t.id}>
                      <button
                        className={t.id === theme ? "is-active" : ""}
                        onClick={() => {
                          setTheme(t.id);
                          setThemeMenuOpen(false);
                        }}
                      >
                        <span
                          className="theme-switcher__swatch"
                          data-swatch={t.id}
                        />
                        {t.label}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <button
            className="navbar__burger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="navbar__burger-icon"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>
    </header>
  );
}
