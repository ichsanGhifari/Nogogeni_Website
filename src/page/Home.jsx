import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import f1 from '../images/home/f1.png'
import bg1 from '../images/bgitem.png'
import Navbar from "../components/Navbar/index"
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


SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);
const Home=()=> { 
    const[isOpen,setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen);
    };
    return (
        <section className='h-screen'>
        <Navbar toggle={toggle} />
        <Swiper cssMode={true} navigation={true} loop={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
            <SwiperSlide>
            <img alt='' className='backg' src={bg1}></img>
            <div className='z-10 flex flex-col gap-y-32 md:gap-y-0 mx-auto md:p-10 p-0 md:mt-14 mt-5  '>    
                <div className='flex flex-col space-y-16 md:-space-y-24'>
                    <div className='flex text-title flex-col  text-center italic'>
                        <h3 style={{letterSpacing: "0.25em"}} 
                        className='text-xl md:text-5xl sm:text-2xl '>NOGOGENI RACING</h3>
                        <h1 className='text-6xl md:text-9xl' >MARK I</h1>
                    </div>
                    <div className=' md:ml-0 ml-5 '>
                        <img className='mx-auto transform md:rotate-0 -rotate-90 md:w-full w-max' alt ='' src={f1}></img>
                    </div>
                </div>
                <div className='mx-auto z-30'>
                <Link to='/Mark1' className='Homebutton text-white text-2xl'>Read More</Link>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <img alt='' className='backg' src={b2}></img>
            <div className='z-10 flex flex-col gap-y-28 md:gap-y-0 mx-auto md:p-10 p-0 md:mt-14 '>    
                <div className='flex flex-col space-y-16 md:-space-y-24'>
                    <div className='flex text-title flex-col  text-center italic'>
                        <h3 style={{letterSpacing: "0.25em"}} 
                        className='text-2xl md:text-5xl'>NOGOGENI V</h3>
                        <h1 className='text-6xl md:text-9xl' >EVO</h1>
                    </div>
                    <div className='w-full'>
                        <img className='mx-auto transform md:rotate-0 -rotate-90 md:w-full w-max' alt ='' src={el1}></img>
                    </div>
                </div>
                <div className='mx-auto'>
                    <Link to='/NogogeniEvo' className='Homebutton text-white text-2xl'>Read More</Link>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <img alt='' className='backg' src={bg1}></img>
                <div className='z-10 flex flex-col gap-y-32 md:gap-y-0 mx-auto md:p-10 p-0 md:mt-14 mt-5'>    
                    <div className='flex flex-col space-y-24 md:-space-y-2'>
                        <div className='flex text-title flex-col  text-center italic'>
                            <h3 style={{letterSpacing: "0.25em"}} 
                            className='text-2xl md:text-5xl'>NOGOGENI V</h3>
                        </div>
                        <div className='w-full'>
                            <img className=' w-max mx-auto transform md:rotate-0 -rotate-90 md:w-full'  alt ='' src={et1}></img>
                        </div>
                    </div>
                    <div className='mx-auto'>
                        <Link to='/NogogeniM2' className='Homebutton text-white text-2xl'>Read More</Link>
                    </div>
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
            .Homebutton{
            transition: all 0.5s;
            margin: 5px;
            text-decoration: none;
            display: inline-block;
            height: 50px;
            width: 150px;
            line-height:50px;
            text-align: center;
            }
            .Homebutton:hover{
                box-shadow: 0 -3px white,0 3px white; 
            }
            `}</style>
            
        </section>
    );
}
export default Home