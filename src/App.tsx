import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Katalog from "./pages/Katalog/Katalog";
import Main from "./pages/Main/Main";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/katalog" component={Katalog} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
