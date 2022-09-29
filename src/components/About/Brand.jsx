import React from 'react'
import Data from '../../Data.json'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper";
const Brand = () => {
    return (
        <>
            <section className='brand-logo-area'>
                <div className='container'>
                    <div className='brand-logo-active'>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={0}
                            // freeMode={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                clickable: true,
                                loop: true,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                        >{Data.brand.map((value) => {
                            return (
                                <React.Fragment key={value.id}>
                                    <SwiperSlide><img src={value.img} alt="" /></SwiperSlide>
                                </React.Fragment>
                            )
                        })
                            }
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brand