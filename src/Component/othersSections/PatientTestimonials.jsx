"use client";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";

const PatientTestimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ]
    };
    const reviews = [
        {
            name: "Rahim Uddin",
            review:
                "Booking an appointment was extremely easy and convenient.",
        },
        {
            name: "Karim Ahmed",
            review:
                "The doctor was professional and the platform worked smoothly.",
        },
        {
            name: "Nusrat Jahan",
            review:
                "A wonderful experience. I found the right specialist within minutes.",
        },
        {
            name: "Arafat Hosen",
            review:
                "Booking an appointment was extremely easy and convenient.",
        },
        {
            name: "Mizanur Rahman",
            review:
                "The doctor was professional and the platform worked smoothly.",
        },
        {
            name: "Md Sakil Ahmed",
            review:
                "A wonderful experience. I found the right specialist within minutes.",
        }
    ];

    return (
        <section className="container py-16 px-4">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold">
                    Patient Testimonials
                </h2>

                <p className="mt-3 text-gray-500">
                    Hear what our patients say about DocAppoint.
                </p>
            </div>

            <div className="">
                
                <div className="slider-container mx-auto">
                        <Slider {...settings}>
                            {reviews.map((review, index) => (
                            <div
                                    key={index}
                                    className="border rounded-2xl px-5 py-5"
                        >
                                <div  className="flex gap-1 text-yellow-500 mb-3">
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
                        ))}
                        </Slider>
                    </div>
                
            </div>
        </section>
    );
};

export default PatientTestimonials;