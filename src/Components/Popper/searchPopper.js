import {
    faCircleXmark,
    faDeleteLeft,
    faFileCircleXmark,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./Popper.scss";
import Tippy from "@tippyjs/react";
import {useState} from "react";

//translations
import i18n from "../../translation/i18n";
import {useTranslation} from "react-i18next";
function SearchPopper({children}) {
    const [t] = useTranslation();

    const [searchValue, setSearchValue] = useState("");

    const handleClear = () => {
        setSearchValue("");
    };

    const handleHide = () => {
        if (!!searchValue) {
            return false;
        } else return true;
    };
    return (
        <Tippy
            onHide={handleHide}
            render={(attr) => (
                <div className="search-wrapper">
                    <input
                        className="search-input"
                        placeholder={t("Search your favorites pet")}
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                    />
                    <FontAwesomeIcon
                        icon={faDeleteLeft}
                        onClick={handleClear}
                        className="del-search-icon"
                    />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </div>
            )}
            hideOnClick={false}
            onHidden={() => setSearchValue("")}
            interactive
            animation={false}
            placement="bottom-start"
            offset={[-40, 10]}
            delay={[200, 700]}
        >
            {children}
        </Tippy>
    );
}

export default SearchPopper;
