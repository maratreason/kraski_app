import React from "react";
import { Link } from "react-router-dom";
import { FaStream, FaRegCheckCircle } from "react-icons/fa";
import classes from "./MainSection.module.css";

import Button from "../Buttons/Button";

const MainSection = (props: any) => {
    let background = "";
    let color = "";
    if (props.type === "second") {
        color = "#e02020";
        background = "#f5f5f5";
    } else if (props.type === "third") {
        color = "#1f861f";
    }

    return (
        <div className={classes.MainSection} style={{ background }}>
            <div className={classes.Container}>
                <div className={classes.leftBlock}>
                    <h2 style={{ color }}>{props.items.title}</h2>
                    <p>{props.items.text}</p>
                    <div className={classes.Links}>
                        {
                            props.items.links.map((item: any) => {
                                return (
                                    <Link key={item.id} to="/">
                                        {item.link}
                                    </Link>
                                );
                            })
                        }
                    </div>
                    <div className={classes.Buttons}>
                        <Button
                            buttonStyle={color}
                            icon={<FaStream />}
                            title="Каталог продукции"
                        />
                        <Button
                            buttonStyle={color}
                            icon={<FaRegCheckCircle />}
                            title="Подобрать товар"
                        />
                    </div>
                </div>
                <div className={classes.rightBlock}>
                    <h4>Сферы применения:</h4>
                    <div className={classes.Images}>
                        {props.items.images.map((item: any) => {
                            return (
                                <Link
                                    key={item.id}
                                    to="/"
                                    className={classes.ImageWrapper}
                                >
                                    <img src={item.img} alt="" />
                                    <h5>{item.title}</h5>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;
