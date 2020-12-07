import React from "react";
import { Link } from "react-router-dom";

import classes from "./Button.module.css";

const Button = (props: any) => {
    const { icon, buttonStyle, title } = props;

    return <Link style={{ background: buttonStyle }} className={classes.Button} to="/"><i>{icon}</i>  {title}</Link>;
};

export default Button;
