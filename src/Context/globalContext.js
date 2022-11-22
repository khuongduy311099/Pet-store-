import React, { useState, createContext, useEffect } from "react";
import i18n from "../translation/i18n";
import EnFlag from "../assets/Logo/united-kingdom.png";
import VnFlag from "../assets/Logo/vietnam.png";
import KorFlag from "../assets/Logo/south-korea.png";
import { Avatar } from "antd";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [route, setRoute] = useState();
  const [darkmode, setDarkmode] = useState(false);
  const handleChangeLanguage = (lang) => {
    localStorage.setItem("currentLanguage", JSON.stringify(lang));
    i18n.changeLanguage(lang);
  };

  const languageIcon = (lang) => {
    let icon = <Avatar size={27} src={EnFlag} />;
    switch (lang) {
      case "en":
        icon = <Avatar size={27} src={EnFlag} />;
        break;
      case "vi":
        icon = <Avatar size={27} src={VnFlag} />;
        break;
      case "kr":
        icon = <Avatar size={27} src={KorFlag} />;
        break;

      default:
        break;
    }

    return icon;
  };

  const currentItemValue = {
    handleChangeLanguage,
    languageIcon,
    route,
    setRoute,
    darkmode,
    setDarkmode,
  };

  return (
    <GlobalContext.Provider value={currentItemValue}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
