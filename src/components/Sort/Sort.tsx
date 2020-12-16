import React from "react";
import classes from "./Sort.module.css";

const Sort = ({ sortButtons, sort, setSort, setCurrentPage }: any) => {
    const sortProductHandler = (alias: string) => {
        setSort(alias);
        setCurrentPage(1);
    };

    return (
        <div className={classes.katalog}>
            <ul>
                {sortButtons.map((links: any) => {
                    const activeClass = sort === links.alias ? classes.active : "";
                    return (
                        <li key={links.alias}>
                            <a className={activeClass} onClick={() => sortProductHandler(links.alias)}>{links.title}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Sort;
