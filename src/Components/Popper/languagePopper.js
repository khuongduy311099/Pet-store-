import styles from "./Popper.scss";
import Tippy from "@tippyjs/react";
import {useState} from "react";
import {useTranslation} from "react-i18next";

function LanguagePopper({children}) {
    const languages = [
        {
            name: "Tiếng Việt",
            short: "vi",
        },

        {
            name: "English",
            short: "en",
        },

        {
            name: "Le Français",
            short: "fra",
        },

        {
            name: "Español",
            short: "esp",
        },

        {
            name: "한국어",
            short: "kr",
        },
    ];

    const {t, i18n} = useTranslation([]);
    const handleChangeLanguage = (lang) => {
        localStorage.setItem("currentLanguage", JSON.stringify(lang));
        i18n.changeLanguage(lang);
    };
    return (
        <Tippy
            render={(attr) => (
                <div className="language-wrapper">
                    {languages.map((language, index) => (
                        <div
                            onClick={() => {
                                handleChangeLanguage(`${language.short}`);
                            }}
                            className="language-item"
                            key={index}
                        >
                            {language.name}
                        </div>
                    ))}
                </div>
            )}
            interactive
            animation={false}
            hideOnClick={false}
        >
            {children}
        </Tippy>
    );
}

export default LanguagePopper;
