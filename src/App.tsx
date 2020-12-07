import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Katalog from "./pages/Katalog/Katalog";
import Main from "./pages/Main/Main";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path="/" component={Main} />
                <Route path="/katalog" component={Katalog} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
