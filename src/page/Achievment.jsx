import Navbar from "../components/Navbar"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

import bg1 from '../images/Achievments/bgAch1.png'
import ach1 from '../images/Achievments/ach1.png'
import ach2011 from '../images/Achievments/ach2011.png'
import ach2012 from '../images/Achievments/ach2012.png'
import ach2013 from '../images/Achievments/ach2013.png'
import ach2014 from '../images/Achievments/ach2014.png'
import ach2015 from '../images/Achievments/ach2015.png'
import ach2016 from '../images/Achievments/ach2016.png'
import ach2017 from '../images/Achievments/ach2017.png'
import ach2018 from '../images/Achievments/ach2018.png'
import ach2019 from '../images/Achievments/ach2019.png'
import ach2020 from '../images/Achievments/ach2020.png'
import bg2011 from '../images/Achievments/bg2011.png'
import bg2012 from '../images/Achievments/bg2011.png'
import bg2013 from '../images/Achievments/bg2012.png'
import bg2014 from '../images/Achievments/bg2013.png'
import bg2015 from '../images/Achievments/bg2014.png'
import bg2016 from '../images/Achievments/bg2015.png'
import bg2017 from '../images/Achievments/bg2016.png'
import bg2018 from '../images/Achievments/bg2017.png'
import bg2019 from '../images/Achievments/bg2018.png'
import bg2020 from '../images/Achievments/bg2019.png'


SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const Achievment = () =>{
    return(
        <section className='h-screen'>
            <Navbar />
            <Swiper
        cssMode={true}
        navigation={true}
        loop={false}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
      >
          <SwiperSlide>
            <div className='h-screen'>
                <img src={bg1} alt='' className='bgSlide'></img>
                <div className='md:top-1/4 top-1/3 relative  md:w-screen w-max m-auto z-0 transform md:rotate-0 md:translate-y-0 -translate-y-10 rotate-90 '>
                    <img alt='' src={ach1} className='md:w-max w-8/12 m-auto static '></img>
                </div>
                <div className='absolute md:w-screen top-1/3 mt-14 left-0'>
                    <h1 className='text-center text-white md:text-7xl text-5xl italic md:w-5/12 m-auto'>HISTORY AND ACHIEVEMENT</h1>
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