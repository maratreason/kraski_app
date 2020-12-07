import React from "react";

import BottomMenu from "./BottomMenu/BottomMenu";
import CenterMenu from "./CenterMenu/CenterMenu";
import MainMenu from "./MainMenu/MainMenu";
import classes from "./Navigation.module.css";

import TopMenu from "./TopMenu/TopMenu";

const Navigation = () => {
    return (
        <div className={classes.Navigation}>
            <TopMenu />
            <CenterMenu />
            <BottomMenu />
            <MainMenu />
        </div>
    );
};

export default Navigation;
