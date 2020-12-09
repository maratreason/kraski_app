import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import classes from "./Katalog.module.css";
import { FaShoppingCart } from "react-icons/fa";
import productImage from "../../uploads/products/penetreks-akva-23.jpg";

const Katalog = () => {
    return (
        <div className={classes.KatalogWrapper}>
            <div className={classes.FlexContainer}>
                <div className={classes.sitebar}>
                    <ul className={classes.katalogMenu}>
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
                </div>
                <div className={classes.katalog}>
                    <div className={classes.title}>Каталог</div>
                    <div className={classes.subtitle}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, pariatur
                        magnam vitae fuga laboriosam nemo corporis voluptates quos aspernatur ipsam!
                    </div>
                </div>
            </div>

            <div className={classes.FlexContainer}>
                <div className={classes.sitebar}></div>
                <div className={classes.katalog}>
                    <ul>
                        <li>
                            <Link to="/">Популярные</Link>
                        </li>
                        <li>
                            <Link to="/">По цене</Link>
                        </li>
                        <li>
                            <Link to="/">По названию</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={classes.FlexContainer}>
                <div className={classes.sitebar}>
                    <div className={classes.sitebarFilter}>
                        <div className={classes.name}>Тип продукции</div>
                        <label htmlFor="">
                            <input type="checkbox" value="Грунт" />
                            <span>
                                <Link to="/">Грунт</Link>
                            </span>
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" value="Эмаль" />
                            <span>
                                <Link to="/">Эмаль</Link>
                            </span>
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" value="Грунт-Эмаль" />
                            <span>
                                <Link to="/">Грунт-Эмаль</Link>
                            </span>
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" value="Растворитель" />
                            <span>
                                <Link to="/">Растворитель</Link>
                            </span>
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" value="Грунт" />
                            <span>
                                <Link to="/">Защитно-декоративные составы для дерева</Link>
                            </span>
                        </label>
                    </div>

                    <div className={classes.sitebarFilter}>
                        <div className={classes.name}>Фасовка</div>
                        <label htmlFor="">
                            <input type="checkbox" value="0,8 л" />
                            <span>
                                <Link to="/">0,8 л</Link>
                            </span>
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" value="0,9 л" />
                            <span>
                                <Link to="/">0,9 л</Link>
                            </span>
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" value="1 л" />
                            <span>
                                <Link to="/">1 л</Link>
                            </span>
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" value="2,3 л" />
                            <span>
                                <Link to="/">2,3 л</Link>
                            </span>
                        </label>
                    </div>

                    <div className={classes.sitebarFilter}>
                        <div className={classes.name}>Марка</div>
                        <label htmlFor="">
                            <input type="checkbox" value="Ферра" />
                            <span>
                                <Link to="/">Ферра</Link>
                            </span>
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" value="Архитектор" />
                            <span>
                                <Link to="/">Архитектор</Link>
                            </span>
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" value="Пенетрекс" />
                            <span>
                                <Link to="/">Пенетрекс</Link>
                            </span>
                        </label>
                    </div>

                    <div className={classes.sitebarFilter}>
                        <div className={classes.name}>Антикоррозийная защита металла</div>
                        <label htmlFor="">
                            <input type="checkbox" value="Алкидные материалы" />
                            <span>
                                <Link to="/">Алкидные материалы</Link>
                            </span>
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" value="Эпоксидные материалы" />
                            <span>
                                <Link to="/">Эпоксидные материалы</Link>
                            </span>
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" value="Полиуретановые материалы" />
                            <span>
                                <Link to="/">Полиуретановые материалы</Link>
                            </span>
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" value="Сополимерные материалы" />
                            <span>
                                <Link to="/">Сополимерные материалы</Link>
                            </span>
                        </label>
                    </div>

                    <div className={classes.sitebarFilter}>
                        <div className={classes.name}>Строительство и ремонт</div>
                        <label htmlFor="">
                            <input type="checkbox" value="Отделка интерьера" />
                            <span>
                                <Link to="/">Отделка интерьера</Link>
                            </span>
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" value="Отделка фасада" />
                            <span>
                                <Link to="/">Отделка фасада</Link>
                            </span>
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" value="Универсальные грунты и эмали" />
                            <span>
                                <Link to="/">Универсальные грунты и эмали</Link>
                            </span>
                        </label>
                    </div>

                    <div className={classes.sitebarFilter}>
                        <div className={classes.name}>Защита дерева</div>
                        <label htmlFor="">
                            <input type="checkbox" value="Грунты антисептики" />
                            <span>
                                <Link to="/">Грунты антисептики</Link>
                            </span>
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" value="Цветные защитно-декоративные составы" />
                            <span>
                                <Link to="/">Цветные защитно-декоративные составы</Link>
                            </span>
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" value="Грунты и эмали" />
                            <span>
                                <Link to="/">Грунты и эмали</Link>
                            </span>
                        </label>
                    </div>

                    <div className={classes.sitebarFilter}>
                        <div className={classes.name}>Растворитель</div>
                        <label htmlFor="">
                            <input type="checkbox" value="Нефрас" />
                            <span>
                                <Link to="/">Нефрас</Link>
                            </span>
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" value="Сольвент" />
                            <span>
                                <Link to="/">Сольвент</Link>
                            </span>
                        </label>
                    </div>

                    <div className={classes.sitebarFilter}>
                        <div className={classes.name}>Цвет</div>
                        <label htmlFor="">
                            <input type="checkbox" value="орегонская сосна" />
                            <span>
                                <Link to="/">орегонская сосна</Link>
                            </span>
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" value="орех" />
                            <span>
                                <Link to="/">орех</Link>
                            </span>
                        </label>
                    </div>
                </div>
                
                <div className={classes.katalog}>
                    <div className={classes.productWrapper}>
                    <div className={classes.product}>
                        <div className={classes.image}>
                            <img src={productImage} alt=""/>
                        </div>
                        <Link className={classes.productTitle} to="/">
                            ПЕНЕТРЕКС - АКВА сосна 2,3 л
                        </Link>
                        <div className={classes.artikul}>Артикул: 7082763</div>
                        <div className={classes.description}>
                            ПЕНЕТРЕКС - АКВА - экологически чистое быстросохнущее
                            защитно-декоративное покрытие для дерева на основе водной дисперсии
                            акриловых смол.
                        </div>
                        <div className={classes.price}>100 ₽</div>
                        <div className={classes.Buttons}>
                            <Button
                                buttonStyle={"#1f861f"}
                                title="Консультация"
                            />
                            <Button
                                buttonStyle={"#0a6c85"}
                                icon={<FaShoppingCart />}
                                title="В корзину"
                            />
                        </div>
                    </div>

                    <div className={classes.product}>
                        <div className={classes.image}>
                            <img src={productImage} alt=""/>
                        </div>
                        <Link className={classes.productTitle} to="/">
                            ПЕНЕТРЕКС - АКВА сосна 2,3 л
                        </Link>
                        <div className={classes.artikul}>Артикул: 7082763</div>
                        <div className={classes.description}>
                            ПЕНЕТРЕКС - АКВА - экологически чистое быстросохнущее
                            защитно-декоративное покрытие для дерева на основе водной дисперсии
                            акриловых смол.
                        </div>
                        <div className={classes.price}>100 ₽</div>
                        <div className={classes.Buttons}>
                            <Button
                                buttonStyle={"#1f861f"}
                                title="Консультация"
                            />
                            <Button
                                buttonStyle={"#0a6c85"}
                                icon={<FaShoppingCart />}
                                title="В корзину"
                            />
                        </div>
                    </div>

                    <div className={classes.product}>
                        <div className={classes.image}>
                            <img src={productImage} alt=""/>
                        </div>
                        <Link className={classes.productTitle} to="/">
                            ПЕНЕТРЕКС - АКВА сосна 2,3 л
                        </Link>
                        <div className={classes.artikul}>Артикул: 7082763</div>
                        <div className={classes.description}>
                            ПЕНЕТРЕКС - АКВА - экологически чистое быстросохнущее
                            защитно-декоративное покрытие для дерева на основе водной дисперсии
                            акриловых смол.
                        </div>
                        <div className={classes.price}>100 ₽</div>
                        <div className={classes.Buttons}>
                            <Button
                                buttonStyle={"#1f861f"}
                                title="Консультация"
                            />
                            <Button
                                buttonStyle={"#0a6c85"}
                                icon={<FaShoppingCart />}
                                title="В корзину"
                            />
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Katalog;
