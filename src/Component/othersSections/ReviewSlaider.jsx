


"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewSlaider = () => {
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
        <div className="slider-container max-w-[80%] md:container mx-auto">
            <Slider {...settings}>
                <div
                                        key={index}
                                        className="border rounded-2xl p-6 hover:shadow-lg transition"
                                    >
                                        <div className="flex gap-1 text-yellow-500 mb-3">
                                            <FaStar className="clt" />
                                            <FaStar className="clt" />
                                            <FaStar className="clt" />
                                            <FaStar className="clt" />
                                            <FaStar className="clt" />
                                        </div>
                
                                        <p className="text-gray-600 mb-4">
                                            {review.review}
                                        </p>
                
                                        <h4 className="font-semibold">
                                            {review.name}
                                        </h4>
                                    </div>
            </Slider>
        </div>
    );
};

export default ReviewSlaider;