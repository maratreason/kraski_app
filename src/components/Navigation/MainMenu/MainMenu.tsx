import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainMenu.module.css";

import katalog from "../../../uploads/list.png";
import ferra from "../../../uploads/ferra-icon.png";
import architect from "../../../uploads/architect-icon.png";
import penetreks from "../../../uploads/penetreks-icon.png";

const MainMenu = () => {
    return (
        <div className={classes.MainMenu}>
            <div className={classes.Container}>
                <Link to="/katalog" className={classes.MainMenuItem}>
                    <div className={classes.MainMenuItemText}>
                        <h3>Каталог</h3>
                        <p>Лакокрасочные материалы и оборудование</p>
                    </div>
                    <img src={katalog} alt="" />
                </Link>
                <Link to="/katalog" className={classes.MainMenuItem}>
                    <div className={classes.MainMenuItemText}>
                        <h3>Ферра</h3>
                        <p>Антикоррозийные материалы</p>
                    </div>
                    <img src={ferra} alt="" />
                </Link>
                <Link to="/katalog" className={classes.MainMenuItem}>
                    <div className={classes.MainMenuItemText}>
                        <h3>Архитектор</h3>
                        <p>Для строительства и ремонта</p>
                    </div>
                    <img src={architect} alt="" />
                </Link>
                <Link to="/katalog" className={classes.MainMenuItem}>
                    <div className={classes.MainMenuItemText}>
                        <h3>Пенетрекс</h3>
                        <p>Защита и красота дерева</p>
                    </div>
                    <img src={penetreks} alt="" />
                </Link>
            </div>
        </div>
    );
};

export default MainMenu;
