import { createContext, useState, ReactNode } from "react";

export const GlobalContext = createContext<IGlobalContext>({
  activeTab: 0,
  setActiveTab: () => {},
  scrollProgress: 0,
  setScrollProgress: () => {},
});

interface IGlobalContext {
  activeTab: number;
  setActiveTab: (activeTab: number) => void;
  scrollProgress: number;
  setScrollProgress: (scrollProgress: number) => void;
}

interface IGlobalProvider {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: IGlobalProvider) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  return (
    <GlobalContext.Provider
      value={{ activeTab, setActiveTab, scrollProgress, setScrollProgress }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
