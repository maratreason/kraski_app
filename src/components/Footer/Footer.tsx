import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.FooterWrapper}>
            <div className={classes.Container}>
                <div className={classes.topFooter}>
                    <div>
                        <Link className={classes.Logo} to="/">
                            Logo
                        </Link>
                    </div>
                    <hr />
                    <div className={classes.title}>
                        ЛАКОКРАСОЧНЫЕ МАТЕРИАЛЫ ДЛЯ АНТИКОРРОЗИОННОЙ ЗАЩИТЫ
                    </div>
                </div>
            </div>
            <div className={classes.ContainerSeparate}>
                <div className={classes.leftBlock}>
                    <div className={classes.textBlock}>
                        <p>ООО Фабрика &quot;Краски Хеми&quot;</p>
                        <p>614065, г. Пермь, ул. Промышленная, д.59</p>
                        <p>
                            Тел./Факс:{" "}
                            <Link className={classes.link} to="/">
                                +7(342) 296-35-77
                            </Link>
                        </p>
                        <p>
                            Email:{" "}
                            <Link className={classes.link} to="/">
                                info@kraskichemi.ru
                            </Link>
                        </p>
                        <p>Рабочие часы: 09:00-18:00</p>
                    </div>
                    <div className={classes.textBlock}>
                        <p>
                            <b>Отдел оптовых продаж:</b>
                        </p>
                        <p>
                            Тел./Факс:{" "}
                            <Link className={classes.link} to="/">
                                +7(342) 296-36-77
                            </Link>
                        </p>
                        <p>
                            Email:{" "}
                            <Link className={classes.link} to="/">
                                sale@kraskichemi.ru
                            </Link>
                        </p>
                    </div>
                </div>
                <div className={classes.rightBlock}>
                    <ul>
                        <li>
                            <Link to="/">Ферра</Link>
                        </li>
                        <li>
                            <Link to="/">Архитектор</Link>
                        </li>
                        <li>
                            <Link to="/">Пенетрекс</Link>
                        </li>
                        <li>
                            <Link to="/">Растворители</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/">Доставка по РФ</Link>
                        </li>
                        <li>
                            <Link to="/">О компании</Link>
                        </li>
                        <li>
                            <Link to="/">Новости</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/">Тех. поддержка</Link>
                        </li>
                        <li>
                            <Link to="/">Технические материалы</Link>
                        </li>
                        <li>
                            <Link to="/">LAB@KRASKICHEMI.RU</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
