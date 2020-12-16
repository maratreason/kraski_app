import React from "react";
import Pagination from "../Pagination/Pagination";
import Product from "../Product/Product";
import classes from "./Products.module.css";

const Products = ({ products, loading, productsPerPage, paginate, productsLength, currentPage }: any) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <div>
            <div className={classes.productWrapper}>
                {
                    products && 
                    products.map((product: any) => <Product product={product} key={product.id} />)
                }
            </div>
            <div className={classes.pagination}>
                <Pagination 
                    productsPerPage={productsPerPage} 
                    totalProducts={productsLength} 
                    paginate={paginate} 
                    currentPage={currentPage} 
                />
            </div>
        </div>
    );
};

export default Products;
