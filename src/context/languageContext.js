import React, { createContext } from "react";
import { UZ } from "../const/uz";
import { EN } from "../const/en";
import { RU } from "../const/ru";
import { useState } from "react";
import { LANGUAGE } from "../const";

export const languageContext = createContext();

const LanguageContext = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem(LANGUAGE));
  const getLang = (lan) => {
    switch (lan) {
      case "uz":
        return UZ;
      case "en":
        return EN;
      case "ru":
        return RU;
      default:
        return UZ;
    }
  };
  const changeLang = (lan) => {
    setLang(lan);
    localStorage.setItem(LANGUAGE, lan);
  };
  return (
    <languageContext.Provider value={{ lang: getLang(lang), changeLang }}>
      {children}
    </languageContext.Provider>
  );
};

export default LanguageContext;