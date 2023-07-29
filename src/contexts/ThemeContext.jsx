import { createContext, useState, useEffect, useCallback } from "react";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

export const ThemeContext = createContext({});

export function ThemeContextProvider({ children }) {
  const getCurrentTheme = useCallback(() => {
    const currentTheme = JSON.parse(sessionStorage.getItem("currentTheme"));
    return currentTheme ? currentTheme : light;
  }, []);

  const [theme, setTheme] = useState(getCurrentTheme);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  useEffect(() => {
    sessionStorage.setItem("currentTheme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
