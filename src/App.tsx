import React, { useState } from "react";
import "./App.css";
import { language } from "./constants/Language";
import { useLanguage } from "./contexts/LanguageContext";

function App() {
  const { handleChangeLanguage, translate, languageCode } = useLanguage();
  const [isLanguageActive, setIsLanguageActive] = useState(false);

  const handleLanguageOpen = () => {
    setIsLanguageActive((prev) => !prev);
  };
  return (
    <div className="app">
      <header>
        <h1>Multiple Language</h1>
        <div className="language-wrapper">
          <button onClick={handleLanguageOpen}>
            {language.find((lang) => lang.code.includes(languageCode))?.country}
          </button>
          <div
            className="language-options"
            style={{ display: isLanguageActive ? "block" : "none" }}
          >
            {language.map((lang) => (
              <h3
                onClick={() => {
                  handleChangeLanguage(lang.code);
                  setIsLanguageActive(false);
                }}
              >
                {lang.country}
              </h3>
            ))}
          </div>
        </div>
      </header>
      <section>
        <h3>{translate("changeLanguage")}</h3>
      </section>
    </div>
  );
}

export default App;
