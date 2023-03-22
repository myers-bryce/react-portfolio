import { createContext, useContext, useReducer, useEffect } from "react";
import themeReducer from "./themeReducer";

export const ThemeContext = createContext();

const initialThemeState = JSON.parse(localStorage.getItem("themeSettings")) || {
  primary: "color-2",
  background: "bg-2",
};

export function ThemeProvider({ children }) {
  const [themeState, dispatchTheme] = useReducer(
    themeReducer,
    initialThemeState
  );

  function themeHandler(buttonClassName) {
    dispatchTheme({ type: buttonClassName });
  }

  // save theme settings to local storage
  useEffect(() => {
    localStorage.setItem("themeSettings", JSON.stringify(themeState));
  }, [themeState.primary, themeState.background]);

  return (
    <ThemeContext.Provider value={{ themeState, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
