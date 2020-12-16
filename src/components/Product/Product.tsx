import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import classes from "./Product.module.css";

const Product = ({ product}: any) => {
    return (
        <div className={classes.product} key={product.id}>
            <div className={classes.image}>
                <Link to={`/product/${product.id}`}>
                    <img src={`${window.location.origin}/uploads/products/${product.image}`} alt={product.image} />
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
};

export default Product;
