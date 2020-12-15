import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Button from "../../components/Buttons/Button";
import classes from "./Katalog.module.css";
import axios from "../../utils/axios";
// import imageSrc = require(`${__dirname}/uploads/products/`);

const Katalog = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        axios
            .get("/products")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((err) => {
                console.error(err.message);
            });

        axios
            .get("/filters")
            .then((response) => {
                setFilters(response.data);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);

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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, pariatur magnam vitae fuga
                        laboriosam nemo corporis voluptates quos aspernatur ipsam!
                    </div>
                </div>
            </div>

            <div className={classes.FlexContainer}>
                <div className={classes.sitebar} />
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
                    {filters &&
                        filters.map((filter: any): any => {
                            return (
                                <div className={classes.sitebarFilter} key={filter.id}>
                                    <div className={classes.name}>{filter.title}</div>
                                    {filter.filter_items.map((items: any): any => {
                                        return (
                                            <label htmlFor="" key={items.alias}>
                                                <input type="checkbox" value={items.alias} />
                                                <span>
                                                    <Link to={`/filter=${items.alias}`}>{items.title}</Link>
                                                </span>
                                            </label>
                                        );
                                    })}
                                </div>
                            );
                        })}
                </div>

                <div className={classes.katalog}>
                    <div className={classes.productWrapper}>
                        {products &&
                            products.map((product: any): any => {
                                return (
                                    <div className={classes.product} key={product.id}>
                                        <div className={classes.image}>
                                            <Link to={`/product/${product.id}`}>
                                                <img
                                                    src={`${window.location.origin}/uploads/products/${product.image}`}
                                                    alt={product.image}
                                                />
                                            </Link>
                                        </div>
                                        <Link className={classes.productTitle} to="/">
                                            {product.title}
                                        </Link>
                                        <div className={classes.artikul}>Артикул: {product.artikul}</div>
                                        <div className={classes.description}>{product.subDescription}</div>
                                        <div className={classes.price}>{product.price} ₽</div>
                                        <div className={classes.Buttons}>
                                            <Button buttonStyle="#1f861f" title="Консультация" />
                                            <Button buttonStyle="#0a6c85" icon={<FaShoppingCart />} title="В корзину" />
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Katalog;
