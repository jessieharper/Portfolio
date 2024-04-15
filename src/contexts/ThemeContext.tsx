import { createContext, useState, ReactNode } from "react";

export const ThemeContext = createContext<IThemeContext>({
  theme: null,
  setTheme: () => {},
});

interface IThemeContext {
  theme: null | string;
  setTheme: (theme: null | string) => void;
}

interface IThemeProvider {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
