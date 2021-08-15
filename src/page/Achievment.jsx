import Navbar from "../components/Navbar";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard
} from "swiper/core";

import bg1 from "../images/Achievments/bgAch1.png";
import ach1 from "../images/Achievments/ach1.png";
import ach2011 from "../images/Achievments/ach2011.png";
import ach2012 from "../images/Achievments/ach2012.png";
import ach2013 from "../images/Achievments/ach2013.png";
import ach2014 from "../images/Achievments/ach2014.png";
import ach2015 from "../images/Achievments/ach2015.png";
import ach2016 from "../images/Achievments/ach2016.png";
import ach2017 from "../images/Achievments/ach2017.png";
import ach2018 from "../images/Achievments/ach2018.png";
import ach2019 from "../images/Achievments/ach2019.png";
import ach2020 from "../images/Achievments/ach2020.png";
import bg2011 from "../images/Achievments/bg2011.png";
import bg2012 from "../images/Achievments/bg2011.png";
import bg2013 from "../images/Achievments/bg2012.png";
import bg2014 from "../images/Achievments/bg2013.png";
import bg2015 from "../images/Achievments/bg2014.png";
import bg2016 from "../images/Achievments/bg2015.png";
import bg2017 from "../images/Achievments/bg2016.png";
import bg2018 from "../images/Achievments/bg2017.png";
import bg2019 from "../images/Achievments/bg2018.png";
import bg2020 from "../images/Achievments/bg2019.png";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const Achievment = () => {
  const pagination = {
    "clickable": true,
    "renderBullet": function (index, className) {
      var year =2021;
      if(index===0){
        return(
          '<span class="' + className + '" style="visibility: hidden;"></span>'
        );
      }else{
        return (
          '<span class="' + className + '">' + (year - index) + '</span>'
          
          );
        }
    }
  }
  return (
    <section className="h-screen">
      <Navbar />
      <Swiper
        cssMode={true}
        navigation={true}
        loop={false}
        pagination={pagination}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-screen">
            <img src={bg1} alt="" className="bgSlide"></img>
            <div className="md:top-1/4 top-1/3 relative  md:w-screen w-max m-auto z-0 transform md:rotate-0 md:translate-y-0 -translate-y-10 rotate-90 ">
              <img
                alt=""
                src={ach1}
                className="md:w-max w-8/12 m-auto static "
              ></img>
            </div>
            <div className="absolute md:w-screen top-1/3 mt-14 left-0">
              <h1 className="text-center text-white md:text-7xl text-5xl italic md:w-5/12 m-auto">
                HISTORY AND ACHIEVEMENT
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen">
            <img src={bg2020} alt="" className="bgSlide"></img>
            <div className="flex md:flex-row flex-col h-screen m-auto w-10/12 justify-center md:gap-10 gap-5">
              <div className=" md:my-auto z-0">
                <img alt="" src={ach2020} className="w-max static "></img>
              </div>
              <div className="text-white md:w-4/12 w-full text-justify relative md:my-auto ">
                <p className="md:p-0 px-3">
                  We won the 1st place of electric motors and control systems
                  criteria in Urban Electric Class of Kontes Mobil Hemat Energi
                  (KMHE) 2020, and we are challenging ourself to compete in the
                  Formula Society of Automotive Engineering (FSAE).
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen">
            <img src={bg2019} alt="" className="bgSlide"></img>
            <div className="flex md:flex-row flex-col h-screen m-auto w-10/12 justify-center md:gap-10 gap-5">
              <div className=" md:my-auto z-0">
                <img alt="" src={ach2019} className="w-max static "></img>
              </div>
              <div className="text-white md:w-4/12 w-full text-justify relative md:my-auto ">
                <p className="md:p-0 px-3">
                  We won the second place of Battery Electric in Urban Electric
                  Class of Shell Eco-marathon (SEM) Asia, also the 1st place of
                  Urban Electric Class and the 2nd place of Urban Ethanol Class
                  in Kontes Mobil Hemat Energi (KMHE).
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen">
            <img src={bg2018} alt="" className="bgSlide"></img>
            <div className="flex md:flex-row flex-col h-screen m-auto w-10/12 justify-center md:gap-10 gap-5">
              <div className=" md:my-auto z-0">
                <img alt="" src={ach2018} className="w-max static "></img>
              </div>
              <div className="text-white md:w-4/12 w-full text-justify relative md:my-auto ">
                <p className="md:p-0 px-3">
                  At early 2018, we participated Shell Eco-marathon (SEM) Asia
                  and won the second place of Battery Electric in Urban Electric
                  Class. In November, we won the 1st place of Urban Ethanol
                  Class and the 3rd place of Urban Electric Class in Kontes
                  Mobil Hemat Energi (KMHE).
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen">
            <img src={bg2017} alt="" className="bgSlide"></img>
            <div className="flex md:flex-row flex-col h-screen m-auto w-10/12 justify-center md:gap-10 gap-5">
              <div className=" md:my-auto z-0">
                <img alt="" src={ach2017} className="w-max static "></img>
              </div>
              <div className="text-white md:w-4/12 w-full text-justify relative md:my-auto ">
                <p className="md:p-0 px-3">
                  In March, we participated Shell Eco-marathon (SEM) Asia and
                  won the third place of Urban Electric Class. In November, we
                  successfully retained our winning as the second place of Urban
                  Electric Class in Kontes Mobil Hemat Energi (KMHE).
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen">
            <img src={bg2016} alt="" className="bgSlide"></img>
            <div className="flex md:flex-row flex-col h-screen m-auto w-10/12 justify-center md:gap-10 gap-5">
              <div className=" md:my-auto z-0">
                <img alt="" src={ach2016} className="w-max static "></img>
              </div>
              <div className="text-white md:w-4/12 w-full text-justify relative md:my-auto ">
                <p className="md:p-0 px-3">
                  We participated Shell Eco-marathon (SEM) Asia in March. In
                  November, we successfully retained our winning as the second
                  place of Urban Electric Class in Kontes Mobil Hemat Energi
                  (KMHE).
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen">
            <img src={bg2015} alt="" className="bgSlide"></img>
            <div className="flex md:flex-row flex-col h-screen m-auto w-10/12 justify-center md:gap-10 gap-5">
              <div className=" md:my-auto z-0">
                <img alt="" src={ach2015} className="w-max static "></img>
              </div>
              <div className="text-white md:w-4/12 w-full text-justify relative md:my-auto ">
                <p className="md:p-0 px-3">
                  We participated Kontes Mobil Hemat Energi (KMHE) and won the
                  second place of Urban Electric Class.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen">
            <img src={bg2014} alt="" className="bgSlide"></img>
            <div className="flex md:flex-row flex-col h-screen m-auto w-10/12 justify-center md:gap-10 gap-5">
              <div className=" md:my-auto z-0">
                <img alt="" src={ach2014} className="w-max static "></img>
              </div>
              <div className="text-white md:w-4/12 w-full text-justify relative md:my-auto ">
                <p className="md:p-0 px-3">
                  In 2014, we successfully retained our triumph of the Urban
                  Electric Class in Indonesia Energy Marathon Challenge (IEMC).
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen">
            <img src={bg2013} alt="" className="bgSlide"></img>
            <div className="flex md:flex-row flex-col h-screen m-auto w-10/12 justify-center md:gap-10 gap-5">
              <div className=" md:my-auto z-0">
                <img alt="" src={ach2013} className="w-max static "></img>
              </div>
              <div className="text-white md:w-4/12 w-full text-justify relative md:my-auto ">
                <p className="md:p-0 px-3">
                  We won the Urban Electric Class in Indonesia Energy Marathon
                  Challenge (IEMC).
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen">
            <img src={bg2012} alt="" className="bgSlide"></img>
            <div className="flex md:flex-row flex-col h-screen m-auto w-10/12 justify-center md:gap-10 gap-5">
              <div className=" md:my-auto z-0">
                <img alt="" src={ach2012} className="w-max static "></img>
              </div>
              <div className="text-white md:w-4/12 w-full text-justify relative md:my-auto ">
                <p className="md:p-0 px-3">
                  In 2012, we participated Indonesia Energy Marathon Challenge
                  (IEMC).
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen">
            <img src={bg2011} alt="" className="bgSlide"></img>
            <div className="flex md:flex-row flex-col h-screen m-auto w-10/12 justify-center md:gap-10 gap-5">
              <div className=" md:my-auto z-0">
                <img alt="" src={ach2011} className="w-max static "></img>
              </div>
              <div className="text-white md:w-4/12 w-full text-justify relative md:my-auto ">
                <p className="md:p-0 px-3">
                  Our car was appreciated by Dahlan Iskan, Indonesian Minister
                  of State Owned Enterprises at the year of 2011-2014.
                </p>
              </div>
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
          }
        }
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #000;
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
        .swiper-pagination{
          bottom:3rem !important;
        }
        .swiper-pagination-bullet {
            padding:0px 20px;
            margin:0 !important;
            width:auto;
            height:30px;
            text-align: center;
            font-size:15px !important;
            line-height:20px;
            font-size: 12px;
            border-radius: 0;
            border-bottom: 1px solid;
            color:#fff;
            opacity: 1;
            background: rgba(0,0,0,0);
            }
            .swiper-pagination-bullet-active {
                color:#fff;
                transform: scale(1.5) translate(0,-4px);
                border-bottom: 3px solid;
            }
      `}</style>
    </section>
  );
};
export default Achievment;
