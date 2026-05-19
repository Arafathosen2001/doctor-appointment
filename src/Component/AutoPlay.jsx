"use client";
import React from "react";
import Slider from "react-slick";
import add1 from "../../public/assets/Banner.png";
import add2 from "../../public/assets/Banner1.png";
import add3 from "../../public/assets/Banner2.png";
import add4 from "../../public/assets/Banner3.png";
import add5 from "../../public/assets/Banner4.png";
import add6 from "../../public/assets/Banner5.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const AutoPlay = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        arrows: true
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <Image src={add1} width={1540} height={300} alt="add1"></Image>
                </div>
                <div>
                    <Image src={add2} width={1540} height={300} alt="add1"></Image>
                </div>
                <div>
                    <Image src={add2} width={1540} height={300} alt="add1"></Image>
                </div>
                <div>
                    <Image src={add3} width={1540} height={300} alt="add1"></Image>
                </div>
                <div>
                    <Image src={add4} width={1540} height={300} alt="add1"></Image>
                </div>
                <div>
                    <Image src={add5} width={1540} height={300} alt="add1"></Image>
                </div>
                <div>
                    <Image src={add6} width={1540} height={300} alt="add1"></Image>
                </div>
                
               
            </Slider>
        </div>
    );
};

export default AutoPlay;