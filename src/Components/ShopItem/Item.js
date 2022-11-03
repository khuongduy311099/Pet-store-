import styles from "./shopItem.scss";
//itemcontext
import {useContext} from "react";
import {ItemContext} from "../../itemContext/itemContext";

//translations
import i18n from "../../translation/i18n";
import {useTranslation} from "react-i18next";
function Item({items, name}) {
    const [t] = useTranslation();
    const itemContext = useContext(ItemContext);
    return (
        <div
            onClick={() => itemContext.handleProductLayout(name)}
            className="item-wrapper"
        >
            <div className="item-image">
                <img
                    className="item-1st-image"
                    src={items.img1}
                    alt="product"
                />
                <img
                    className="item-2nd-image"
                    src={items.img2}
                    alt="product"
                />
            </div>
            <div className="item-info-wrapper">
                <div className="item-info">
                    {t("Age")}: {`${items.age} ${t("months")}`}
                </div>
                <div className="item-info">
                    {t("color")}: {`${t(items.color)}`}
                </div>
                <div className="item-info">
                    {t("type")}: {`${items.type}`}
                </div>
            </div>
        </div>
    );
}

export default Item;
