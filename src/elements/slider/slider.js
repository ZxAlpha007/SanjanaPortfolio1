import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import { db } from "../../Firebase/firebaseConfig";
import { collection, doc, onSnapshot } from "firebase/firestore";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "./slider.css"

const Slider = () => {
    const [image, setImage] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "Slider"), (querySnapshot) => {
            const newImages = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setImage(newImages);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const SliderLoader = image.map((data, i) => (
        <SwiperSlide key={data.id}>
            <img src={data.url} alt={`Slide ${i + 1}`} />
        </SwiperSlide>
    ));

    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
        >
            {SliderLoader}
        </Swiper>
    );
};

export default Slider;
