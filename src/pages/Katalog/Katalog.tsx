import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Katalog.module.css";
import axios from "../../utils/axios";
import Products from "../../components/Products/Products";
import Sort from "../../components/Sort/Sort";

const Katalog = ({ 
    products, 
    loading, 
    productsPerPage, 
    paginate, 
    productsLength, 
    sortButtons, 
    sort,
    setSort, 
    currentPage,
    setCurrentPage
}: any) => {
    const [filters, setFilters] = useState([]);

    useEffect(() => {
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
                <Sort sortButtons={sortButtons} sort={sort} setSort={setSort} setCurrentPage={setCurrentPage} />
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
                    <Products 
                        products={products} 
                        loading={loading} 
                        productsPerPage={productsPerPage} 
                        paginate={paginate} 
                        productsLength={productsLength}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Katalog;
