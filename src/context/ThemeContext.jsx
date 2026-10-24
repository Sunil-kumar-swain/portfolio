import { createContext, useContext, useState, useEffect } from "react";

// The four themes your site can switch between. Each one is just a set
// of CSS custom properties (variables) — see src/index.css for where
// these get applied. Add a new theme by adding an entry here AND a
// matching `[data-theme="..."]` block in index.css.
export const THEMES = [
  { id: "circuit", label: "Circuit" },
  { id: "daylight", label: "Daylight" },
  { id: "midnight", label: "Midnight" },
  { id: "sandstone", label: "Sandstone" },
];

const ThemeContext = createContext(null);

const STORAGE_KEY = "portfolio-theme";

export function ThemeProvider({ children }) {
  // Lazy initializer: this function only runs ONCE, on first render,
  // instead of on every render — important when the initial value
  // requires work (reading localStorage).
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && THEMES.some((t) => t.id === saved)) return saved;
    return "circuit";
  });

  // useEffect runs AFTER React commits changes to the DOM.
  // Here, any time `theme` changes, we:
  //   1. write the choice to localStorage so it survives a refresh
  //   2. set a data-theme attribute on <html> so our CSS can react to it
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook: components call useTheme() instead of importing
// useContext + ThemeContext everywhere. Small convenience, very common
// pattern in real React codebases.
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
