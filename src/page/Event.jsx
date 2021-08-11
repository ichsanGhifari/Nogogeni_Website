import Navbar from "../components/Navbar"
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../images/about/Event/SlideBlack1.png"
import slide1B from "../images/about/Event/Slideclear1.png"
import status1 from "../images/about/Event/01.png"
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
    Navigation,Pagination,Mousewheel,Keyboard
  } from 'swiper/core';


SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

const Event = () =>{
    return(
        <section className='h-screen'>
            <Navbar />
            <Swiper cssMode={true} navigation={true} loop={true} pagination={false} mousewheel={true} keyboard={true} className="mySwiper">
                <SwiperSlide>
                    <div className='h-screen'>
                        <img alt='' src={slide1} className='bgSlide z-0'></img>
                        <img alt='' src={slide1B} className='left-0 absolute w-1/2'></img>
                        <div className='z-20 relative AboutTitle text-white max-w-sm '>
                            <h1 className='text-9xl font-extrabold italic'>FSAE</h1>
                            <p className='font-bold text-left w-11/12 mx-auto'>FORMULA SOCIETY OF AUTOMOTIVE 
                            ENGINEERING (SAE)</p>
                        </div>
                        <div className='h-screen relative left-1/2 max-w-md text-white flex flex-col justify-between'>
                            <p className='text-justify '>
                                is an annual design student event organized by SAE since 1980 that compete all college students around the world to develop, design, build, and race a small-scale formula racing car style. Formula SAE divide into 10 series: Formula SAE Michigan, Formula SAE Lincoln, Formula SAE Electric Nebraska, Formula SAE Australasia, Formula SAE Brazil, Formula SAE Italy, Formula SAE United Kingdom, Formula SAE Austria, Formula Student Germany, and Student Formula Japan.
                            </p>
                            <img alt='' src={status1} className='bottom-0'></img>

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <style jsx>{`   

            .AboutTitle{
                top:20%;
            } 
            .AboutText{
                top:45%;
                left:54%;
            }
            .status{
                left:57%;
            }
            .bgSlide{
                left:0;
                top:0;
                position:absolute;
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .swiper-container {
            margin-left: auto;
            margin-right: auto;
            }
            .swiper-button-next, .swiper-button-prev { 
                color: white;
                margin:-10px 90px;
            }
             @media screen and (max-width:768px){
                .swiper-button-next, .swiper-button-prev { 
                margin:0px;
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
export default Event