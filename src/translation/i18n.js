import i18n from "i18next";
import Backend from "i18next-http-backend";
import {initReactI18next} from "react-i18next";

// the translations
import English from "../assets/locales/en/translation.json";
import Vietnamese from "../assets/locales/vi/translation.json";
import Korean from "../assets/locales/kr/translation.json";
import French from "../assets/locales/fr/translation.json";
import Spanish from "../assets/locales/esp/translation.json";

const resources = {
    en: {
        translation: English,
    },
    vi: {
        translation: Vietnamese,
    },
    kr: {
        translation: Korean,
    },
    fra: {
        translation: French,
    },
    esp: {
        translation: Spanish,
    },
};
const lang = JSON.parse(localStorage.getItem("currentLanguage"));
i18n.use(Backend)
    .use(initReactI18next)
    .init({
        resources,
        lng: lang,
        fallbackLng: "en",
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
