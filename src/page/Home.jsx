import React,{useState} from 'react';
import f1 from '../images/home/f1.png'
import bg1 from '../images/bgitem.png'
import Navbar from "../components/Navbar/index"
import Sidebar from '../components/Sidebar/index';
import b2 from '../images/home/bgmerah.png';
import el1 from '../images/home/Electric1.png';
import et1 from '../images/home/Etanol1.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
    Navigation,Pagination,Mousewheel,Keyboard
  } from 'swiper/core';
import Homebutton from '../components/Buttons/Homebutton';


SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);
const Home=()=> { 
    const[isOpen,setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen);
    };
    return (
        <section className='h-screen'>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Swiper cssMode={true} navigation={true} loop={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
            <SwiperSlide>
            <img alt='' className='backg' src={bg1}></img>
            <div className='z-10 flex flex-col mx-auto p-10 mt-14'>    
                <div className='flex flex-col space-y-0 md:-space-y-24'>
                    <div className='flex text-title flex-col  text-center italic'>
                        <h3 style={{letterSpacing: "0.25em"}} 
                        className='text-2xl md:text-5xl'>NOGOGENI RACING</h3>
                        <h1 className='text-5xl md:text-9xl' >MARK I</h1>
                    </div>
                    <img className='z-10 mx-auto' width="900px" alt ='' src={f1}></img>
                </div>
                <Homebutton />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <img alt='' className='backg' src={b2}></img>
            <div className='z-10 flex flex-col mx-auto p-10 mt-14'>    
                <div className='flex flex-col space-y-0 md:-space-y-24'>
                    <div className='flex text-title flex-col  text-center italic'>
                        <h3 style={{letterSpacing: "0.25em"}} 
                        className='text-2xl md:text-5xl'>NOGOGENI V</h3>
                        <h1 className='text-5xl md:text-9xl' >EVO</h1>
                    </div>
                    <img className='z-10 mx-auto' width="900px" alt ='' src={el1}></img>
                </div>
                <Homebutton />
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <img alt='' className='backg' src={bg1}></img>
                <div className='z-10 flex flex-col mx-auto p-10 mt-14'>    
                    <div className='flex flex-col space-y-0 md:-space-y-24'>
                        <div className='flex text-title flex-col  text-center italic'>
                            <h3 style={{letterSpacing: "0.25em"}} 
                            className='text-2xl md:text-5xl'>NOGOGENI RACING</h3>
                            <h1 className='text-5xl md:text-9xl' >MARK I</h1>
                        </div>
                        <img className='z-10 mx-auto' width="900px" alt ='' src={et1}></img>
                    </div>
                    <Homebutton />
                </div>
            </SwiperSlide>
        </Swiper>
        <style jsx>{`
            .swiper-container {
            width: 100%;
            height: 100%;
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

            .backg {
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
                margin:-10px 150px;
            }
             @media screen and (max-width:768px){
                .swiper-button-next, .swiper-button-prev { 
                margin:0px;
            }
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
            `}</style>
            
        </section>
    );
}
export default Home