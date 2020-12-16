import React from "react";
import classes from "./Pagination.module.css";

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }: any) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <ul className={classes.ul}>
                {pageNumbers.map((number) => {
                    const activeClass = number === currentPage ? classes.active : "";
                    return (
                        <li key={number} className={classes.item}>
                            <a className={activeClass} onClick={() => paginate(number)}>{number}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Pagination;
