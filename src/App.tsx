import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "./utils/axios";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Katalog from "./pages/Katalog/Katalog";
import Main from "./pages/Main/Main";
import Product from "./components/Product/Product";

function App() {

    const sortButtons = [
        { id: 1, title: "По названию", alias: "title" },
        { id: 2, title: "По цене", alias: "price" },
        { id: 3, title: "По артикулу", alias: "artikul" },
    ];

    const [sort, setSort] = useState("title");

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);

    const productsLength = products.length;

    // Get current products
    const indexOfLastProducts = currentPage * productsPerPage;
    const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProducts, indexOfLastProducts);

    // change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchProducts = async (order="asc") => {
            setLoading(true);
            const response = await axios.get(`/products?_sort=${sort}&_order=${order}`);
            setProducts(response.data);
            setLoading(false);
        };
        
        fetchProducts("asc");
    }, [sort]);

    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route 
                    exact 
                    path="/katalog" 
                    render={
                        () => (
                            <Katalog 
                                products={currentProducts} 
                                loading={loading} 
                                productsPerPage={productsPerPage}
                                paginate={paginate}
                                productsLength={productsLength}
                                sortButtons={sortButtons}
                                sort={sort}
                                setSort={setSort}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                            />
                        )
                    } 
                />
                <Route exact path="/product:id?" component={Product} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
