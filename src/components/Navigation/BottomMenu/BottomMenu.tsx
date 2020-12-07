import React from "react";
import classes from "./BottomMenu.module.css";

import Input from "../../Forms/Input/Input";
import { Link } from "react-router-dom";

const BottomMenu = () => {
    return <div className={classes.BottomMenu}>
        <div className={classes.Container}>
            <Input />
            <ul className={classes.BottomMenuUl}>
                <li>
                    <Link className={classes.MenuItems} to={"/"}>
                        Контакты
                    </Link>
                </li>
                <li>
                    <Link className={classes.MenuItems} to={"/"}>
                        Фирменные магазины
                    </Link>
                </li>
                <li>
                    <Link className={classes.MenuItems} to={"/"}>
                        Партнеры
                    </Link>
                </li>
                <li>
                    <Link className={classes.MenuItems} to={"/"}>
                        Тех. поддержка
                    </Link>
                </li>
            </ul>
        </div>
    </div>;
};

export default BottomMenu;
