import { createContext, useContext, useState } from "react";
import languages from "../constants/Language";
import { TLanguage, TLanguageKey } from "../typings/Language";

type LanguageProviderProps = {
  children: React.ReactNode;
};

type LanguageContextProps = {
  languageCode: keyof TLanguage;
  translate: (key: TLanguageKey) => string;
  handleChangeLanguage: (language: keyof TLanguage) => void;
};

export const LanguageContext = createContext({} as LanguageContextProps);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [languageCode, setLanguageCode] = useState<keyof TLanguage>("en");

  const translate = (key: TLanguageKey) => {
    const getLanguage = languages[key][languageCode];
    return getLanguage;
  };

  const handleChangeLanguage = (language: keyof TLanguage) => {
    setLanguageCode(language);
  };

  return (
    <LanguageContext.Provider
      value={{ languageCode, translate, handleChangeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
