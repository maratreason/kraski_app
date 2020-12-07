import React from "react";
import { GoSearch } from "react-icons/go";

import classes from "./Input.module.css";

const Input = () => {
    return (
        <div className={classes.InputWrapper}>
            <input className={classes.Input} type="text" />
            <div className={classes.Search}><GoSearch /></div>
        </div>
    );
};

export default Input;
