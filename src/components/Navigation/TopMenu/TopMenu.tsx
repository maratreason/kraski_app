import React from "react";
import { Link } from "react-router-dom";

import classes from "./TopMenu.module.css";

const TopMenu = () => {
    return (
        <div className={classes.TopMenu}>
            <div className={classes.Container}>
                <div className={classes.leftBlock}>
                    <Link to={"/"} className={classes.ModalButton}>
                        Казань
                    </Link>
                    <div className={classes.p}>
                        В Казани осуществляется доставка всей продукции с помощью тк
                    </div>
                </div>
                <div className={classes.rightBlock}>
                    <ul className={classes.TopMenu}>
                        <li>
                            <Link className={classes.MenuItems} to={"/"}>
                                О компании
                            </Link>
                        </li>
                        <li>
                            <Link className={classes.MenuItems} to={"/"}>
                                Доставка по РФ
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopMenu;
