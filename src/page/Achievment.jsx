import Navbar from "../components/Navbar"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import bg1 from '../images/Achievments/bgAch1.png'
import ach1 from '../images/Achievments/ach1.png'

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const Achievment = () =>{
    return(
        <section className='h-screen'>
            <Navbar />
            <Swiper
        cssMode={true}
        navigation={true}
        loop={true}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
      >
          <SwiperSlide>
            <div className='h-screen'>
                <img src={bg1} alt='' className='bgSlide'></img>
                <div className='top-1/4 relative w-screen m-auto z-0 '>
                    <img alt='' src={ach1} className='w-max m-auto static'></img>
                </div>
                <div className='absolute w-screen top-1/3 mt-14'>
                    <h1 className='text-center text-white text-7xl italic w-5/12 m-auto'>HISTORY AND ACHIEVEMENT</h1>
                </div>
            </div>
          </SwiperSlide>
      </Swiper>


      <style jsx>{`
      .bgSlide {
          left: 0;
          top: 0;
          position: absolute;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .swiper-container {
          margin-left: auto;
          margin-right: auto;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          margin: -10px 90px;
        }
        @media screen and (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            margin: 0px;
            visibility: hidden;
          }
        }
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
        }
      `}</style>
        </section>
    )
}
export default Achievment