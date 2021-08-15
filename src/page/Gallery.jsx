import { Swiper, SwiperSlide } from "swiper/react";
import Lines2 from "../components/Lines/Lines2"
import Navbar from "../components/Navbar"

import fsae2020 from "../images/gallery/FSAE2020.png"
import IIB from "../images/gallery/IIB.png"
import iim from "../images/gallery/iim.png"
import KMHE2018 from "../images/gallery/KMHE2018.png"
import kmhe2019 from "../images/gallery/KMHE2019.png"
import pev from "../images/gallery/pev.png"
import sem2018 from "../images/gallery/SEM2018.png"
import sem2019 from "../images/gallery/sem2019.png"

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
const Gallery = () => {
    return(
        <section className='bg-bgGallery bg-cover h-screen'>
            <Navbar />
            <div className='w-screen absolute top-24 text-white text-center mx-auto'>
                <h1 className='font-bold md:text-8xl text-6xl italic'>GALLERY</h1>
                <p className='md:w-1/3 w-full mx-auto my-3 md:px-0 px-5'>“Photos are a way to capture expressions and messages that are lost and cannot be copied”</p>
                <div className='flex flex-col w-10/12 mx-auto mt-5 gap-10 h-full'>
                    <Lines2 />
                    <Swiper slidesPerView={4} spaceBetween={40} centeredSlides={true} pagination={{
                    "clickable": true
                    }} className="mySwiper">
                        <SwiperSlide>
                        {({ isActive }) => (
                            <img alt='' className={`transform-gpu duration-200 ${ isActive ?"scale-110":" scale-90"}`} src={fsae2020}></img>
                        )}
                        </SwiperSlide>
                        <SwiperSlide>
                        {({ isActive }) => (
                            <img alt='' className={`transform-gpu duration-200 ${ isActive ?"scale-110":" scale-90"}`} src={IIB}></img>
                        )}
                        </SwiperSlide>
                        <SwiperSlide>
                        {({ isActive }) => (
                            <img alt='' className={`transform-gpu duration-200 ${ isActive ?"scale-110":" scale-90"}`} src={iim}></img>
                        )}
                        </SwiperSlide>
                        <SwiperSlide>
                        {({ isActive }) => (
                            <img alt='' className={`transform-gpu duration-200 ${ isActive ?"scale-110":" scale-90"}`} src={KMHE2018}></img>
                        )}
                        </SwiperSlide>
                        <SwiperSlide>
                        {({ isActive }) => (
                            <img alt='' className={`transform-gpu duration-200 ${ isActive ?"scale-110":" scale-90"}`} src={kmhe2019}></img>
                        )}
                        </SwiperSlide>
                        <SwiperSlide>
                        {({ isActive }) => (
                            <img alt='' className={`transform-gpu duration-200 ${ isActive ?"scale-110":" scale-90"}`} src={pev}></img>
                        )}
                        </SwiperSlide>
                        <SwiperSlide>
                        {({ isActive }) => (
                            <img alt='' className={`transform-gpu duration-200 ${ isActive ?"scale-110":" scale-90"}`} src={sem2018}></img>
                        )}
                        </SwiperSlide>
                        <SwiperSlide>
                        {({ isActive }) => (
                            <img alt='' className={`transform-gpu duration-200 ${ isActive ?"scale-110":" scale-90"}`} src={sem2019}></img>
                        )}
                        </SwiperSlide>
                    </Swiper>
                    <div className='-mt-5'>
                        <Lines2 />
                    </div>

                </div>
            
            </div>
            <style jsx>{`
            .swiper-container {
            width: 100%;
            height: 30rem;
            padding:25px
            
            }
            .swiper-pagination{
                bottom:0rem !important;      
            }
            .swiper-pagination-bullet {
            padding:3px 10px;
            width:auto;
            height:20px;
            line-height:20px;
            font-size: 12px;
            color:#000;
            opacity: 1;
            background: rgba(0,0,0,0.2);
            }
            .swiper-pagination-bullet-active {
                color:#fff;
                background: #fff;
            }

            {/* .swiper-slide {
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
            } */}
                
                
            `}</style>
        </section>
    )
}
export default Gallery