import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMobile } from "react-icons/fa";
import classes from "./CenterMenu.module.css";

import logo from "../../../uploads/logo.png";
import cart from "../../../uploads/cart.png";

const CenterMenu = () => {
    return (
        <div className={classes.CenterMenu}>
            <div className={classes.Container}>
                <Link to="/" className={classes.CenterMenuLogo}>
                    <img src={logo} alt="Logo" />
                </Link>
                <div className={classes.CenterMenuContact}>
                    <h4>Оптовые продажи:</h4>
                    <div>
                        <Link className={classes.MenuLinks} to="/">
                            <FaPhoneAlt /> +7 342 296 36 77
                        </Link>
                    </div>
                    <div>
                        <Link className={classes.MenuLinks} to="/">
                            <FaEnvelope /> sale@kraskichemi.ru
                        </Link>
                    </div>
                </div>
                <div className={classes.CenterMenuContact}>
                    <h4>Розничные продажи:</h4>
                    <div>
                        <Link className={classes.MenuLinks} to="/">
                            <FaPhoneAlt /> +7 342 296 35 77
                        </Link>
                    </div>
                    <div>
                        <Link className={classes.MenuLinks} to="/">
                            <FaMobile /> +7 912 882 18 31
                        </Link>
                    </div>
                </div>
                <div className={classes.CenterMenuCart}>
                    <img src={cart} alt="Cart" />
                    <div>Корзина</div>
                </div>
            </div>
        </div>
    );
};

export default CenterMenu;
