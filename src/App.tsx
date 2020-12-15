import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Katalog from "./pages/Katalog/Katalog";
import Main from "./pages/Main/Main";
import Product from "./components/Product/Product";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/katalog" component={Katalog} />
                <Route exact path="/product:id?" component={Product} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
