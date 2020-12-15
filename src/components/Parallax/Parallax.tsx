import React from "react";
import { Link } from "react-router-dom";
import classes from "./Parallax.module.css";

import img1 from "../../uploads/image-block/1.jpg";
import img2 from "../../uploads/image-block/2.jpg";
import img3 from "../../uploads/image-block/3.jpg";
import img4 from "../../uploads/image-block/6.jpg";
import img5 from "../../uploads/image-block/7.jpg";
import img6 from "../../uploads/image-block/8.jpg";

const Parallax = () => {
    return (
        <div className={classes.Parallax}>
            <div className={classes.Container}>
                <div className={classes.TextWrapper}>
                    <h2>
                        Краски нашего производства успешно применяются 
                        на более 1000 предприятиях РФ и СНГ:
                    </h2>
                    <ul className={classes.UL}>
                        <li><Link to="/"><img src={img1} alt="" /></Link></li>
                        <li><Link to="/"><img src={img2} alt="" /></Link></li>
                        <li><Link to="/"><img src={img3} alt="" /></Link></li>
                        <li><Link to="/"><img src={img4} alt="" /></Link></li>
                        <li><Link to="/"><img src={img5} alt="" /></Link></li>
                        <li><Link to="/"><img src={img6} alt="" /></Link></li>
                        <li><Link to="/"><img src={img1} alt="" /></Link></li>
                        <li><Link to="/"><img src={img6} alt="" /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Parallax;
