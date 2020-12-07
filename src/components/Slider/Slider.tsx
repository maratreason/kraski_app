import React, { useEffect, useState } from "react";
import classes from "./Slider.module.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import slide1 from "../../uploads/slider/1.jpg";
import slide2 from "../../uploads/slider/2.jpg";

const slides = [
    {
        id: 1,
        img: slide1,
        title: "Краски Хеми. Фабрика лакокрасочных материалов",
        text: "Наша компания — единственный производитель материалов, выпускаемых под маркой ФЕРРА®. Также производим лакокрасочные материалы АРХИТЕКТОР® и ПЕНЕТРЕКС®. Все покрытия прошли испытания в аккредитованных испытательных центрах. Мы создаем эксклюзивный продукт, используя сырье и технологии лучших европейских производителей."
    },
    {
        id: 2,
        img: slide2,
        title: "Лакокрасочные материалы для строительства",
        text: "Любая организация, представившаяся нашим дилером, предлагает контрафактную продукцию!"
    }
]

const Slider = () => {

    const [images, setImages]= useState(slides);
    const [currentImageIndex, setCurrentImageIndex]= useState(0);
    const [isCycleMode, setIsCycleMode]= useState(false);

    const nextSlidehandler = (e: any) => {
        let newIndex = currentImageIndex;
        if (e.target.dataset.direction === "next") {
            if (newIndex < images.length - 1) {
                newIndex = currentImageIndex + 1;
            } else {
                newIndex = 0
            }
        } else {
            if (currentImageIndex > 0) {
                newIndex = currentImageIndex - 1;
            } else {
                newIndex = images.length - 1;
            }
        }

        setCurrentImageIndex(newIndex);
    }

    return <div>
        <div className={classes.SliderWrapper}>
            <img src={images[currentImageIndex].img} alt=""/>
            <div className={classes.Container}>
                <div className={classes.TextBlock}>
                    <h1 className={classes.Title}>{images[currentImageIndex].title}</h1>
                    <div className={classes.Text}>{images[currentImageIndex].text}</div>
                </div>
                <div className={classes.sliderArrowButtons}>
                    <div data-direction="prev" onClick={nextSlidehandler}><FaAngleLeft /></div>
                    <div data-direction="next" onClick={nextSlidehandler}><FaAngleRight /></div>
                </div>
            </div>
        </div>
        
    </div>;
};

export default Slider;
