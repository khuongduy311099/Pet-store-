import React, {useState, createContext} from "react";
import {dogData} from "../Data";
const ItemContext = createContext();
const items = dogData;

function ItemProvider({children}) {
    const [currentItem, setCurrentItem] = useState({});
    const [currentQuantity, setCurrentQuantity] = useState(
        JSON.parse(localStorage.getItem("currentCartQuantity"))
    );
    const [localCart, setLocalCart] = useState(
        JSON.parse(localStorage.getItem("currentCart"))
            ? JSON.parse(localStorage.getItem("currentCart"))
            : []
    );

    const [total, setTotal] = useState(0);

    const handleChange = (totalPrice, changedItem) => {
        let flag = false;
        localCart.length > 0 &&
            localCart.map((item, index) => {
                if (item.name === changedItem.name) {
                    item.quantity = changedItem.quantity;
                    flag = true;
                }
                return item;
            });
        if (!flag) setLocalCart([...localCart, localCart.push(changedItem)]);
        setTotal(totalCart(localCart));
        localStorage.setItem("currentCart", JSON.stringify([...localCart]));

        // cart quantity changed
        localStorage.setItem(
            "currentCartQuantity",
            parseInt(
                JSON.stringify(
                    JSON.parse(localStorage.getItem("currentCart")).reduce(
                        (prev, curr) => prev + curr.quantity,
                        0
                    )
                )
            )
        );
        setCurrentQuantity(
            JSON.parse(localStorage.getItem("currentCartQuantity"))
        );
    };

    const totalCart = (localCart) => {
        let totalCart = 0;
        localCart &&
            localCart.map((item) => {
                totalCart += item.quantity
                    ? item.quantity * item.price
                    : item.price;
                return totalCart;
            });

        return totalCart;
    };
    const handleAddToCart = (item) => {
        setLocalCart([...localCart, item]);
    };
    const handleLocalCart = (item) => {
        let currCart = !!JSON.parse(localStorage.getItem("currentCart"))
            ? JSON.parse(localStorage.getItem("currentCart"))
            : [];
        if (currCart.length >= 1) {
            let flag = false;
            currCart.map((currCartItem, index) => {
                if (currCartItem.name === item.name) {
                    flag = true;
                    currCartItem.quantity = item.quantity;
                }
                return item;
            });
            if (!flag) currCart.push(item);
            localStorage.setItem("currentCart", JSON.stringify(currCart));
        } else if (currCart.length === 0) {
            localStorage.setItem("currentCart", JSON.stringify([item]));
        }
        localStorage.setItem(
            "currentCartQuantity",
            parseInt(
                JSON.stringify(
                    JSON.parse(localStorage.getItem("currentCart")).reduce(
                        (prev, curr) => prev + curr.quantity,
                        0
                    )
                )
            )
        );
        setCurrentQuantity(
            JSON.parse(localStorage.getItem("currentCartQuantity"))
        );
    };

    const handleProductLayout = (name) => {
        setCurrentItem(items.filter((item) => item.name === name));
    };

    const currentItemValue = {
        totalCart,
        handleChange,
        localCart,
        setLocalCart,
        total,
        setTotal,
        currentQuantity,
        handleLocalCart,
        listItem: items,
        currentItem,
        handleProductLayout,
        handleAddToCart,
    };

    return (
        <ItemContext.Provider value={currentItemValue}>
            {children}
        </ItemContext.Provider>
    );
}

export {ItemContext, ItemProvider};
