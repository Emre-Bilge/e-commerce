import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../App.css"

function HomeCarousel() {

    const products = [
        {
            title: "Vita Classic Product",
            description: "We know how large objects will act...",
            price: "$16.48",
            image: "/images/product1.png",
        },
        {
            title: "Vita ceket",
            description: "it is very different type ...",
            price: "$20.53",
            image: "/images/product2.png",
        }
    ]
    return (
        <Swiper className='bg-green-400 md:bg-green'
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 10000 }}
            loop={true}
        >
            {products.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className=" flex flex-col items-center text-white p-6 h-[600px] bg-green-400 md:flex-row md:justify-between md:p-10">
                        <div className="text-center md:text-left max-w-[300px]">
                            <p className="text-sm">SUMMER 2020</p>
                            <h2 className="text-3xl font-bold mt-2">{item.title}</h2>
                            <p className="text-sm mt-2">{item.description}</p>
                            <div className="mt-4 flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-4">
                                <span className="text-xl font-bold">{item.price}</span>
                                <button className="bg-green-400 px-4 py-2 rounded">ADD TO CART</button>
                            </div>
                        </div>
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-[200px] h-auto object-contain mt-6 md:mt-0"
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

    )
}

export default HomeCarousel