import Navbar from "../components/Navbar/index";
import f1 from "../images/home/f1.png";
import rangka1 from "../images/home/rankga/Ranka1Top.png";
import rangka2bot from "../images/home/rankga/Ranka1Bot.png";
import back from "../icons/Back2.png";
import steering from "../icons/Steering1.png";
import wheel from "../icons/Wheels1.png";
import Tires from "../icons/Tires1.png";
import transmition from "../icons/Transmisions1.png";
import isometri1 from "../images/home/isometri/Isometri11.png";
import isometri2 from "../images/home/isometri/Isometri21.png";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Mark1 = () => {
  const [slider, setSlider] = useState(false);
  return (
    <section className="h-screen bg-bghero bg-cover bg-no-repeat overflow-hidden">
      <Navbar />
      <div
        className={`md:left-20 left-40 mt-16 2xl:left-60 top-auto relative transform-gpu duration-700 md:w-max ${
          slider
            ? "md:translate-y-full md:top-20 md:translate-x-0 -translate-x-full"
            : "md:-translate-y-20 md:-top-20 translate-x-0"
        }`}
      >
        <img
          className={`transform md:-rotate-90 rotate-0`}
          width={"950px"}
          alt=""
          src={f1}
        ></img>
      </div>
      <div className="slicer transform md:rotate-0 rotate-90">
        <div className="flex flex-col cursor-pointer">
          <img
            alt=""
            src={rangka1}
            className={`${slider ? "border-2 border-white" : "border-0"}`}
            onClick={() => setSlider(true)}
          ></img>
          <img
            alt=""
            src={rangka2bot}
            className={`${slider ? "border-0" : "border-2 border-white"}`}
            onClick={() => setSlider(false)}
          ></img>
        </div>
      </div>
      {/* swap */}
      <div
        className={`text-white md:right-44 w-auto md:w-max md:top-44 top-1/3 absolute 
        overflow-hidden md:h-3/4 2xl:right-80 inset-y-44 mx-5 2xl:inset-y-56 md:mt-0 -mt-8`}
      >
        <div className="flex flex-col md:gap-3 gap-1">
          <Link to="/" className="flex flex-row cursor-pointer gap-3 w-max">
            <img
              src={back}
              alt=""
              className="border-2 border-white rounded-full w-8"
            ></img>
            <p className="italic font-medium text-xl my-auto">Back</p>
          </Link>
          <h2 className="italic text-white">
            NOGOGENI RACING <br />
            MARK 1
          </h2>
          <div
            className={`transform-gpu duration-700 md:text-base ${
              slider
                ? "translate-x-full h-0 opacity-0"
                : "delay-100 -translate-x-0 h-0 opacity-100"
            }`}
          >
            <p className="text-white font-bold">
              This car has a Husaberg 450 FE engine with a <br />
              single cylinder RON 98 fuel type. The chassis <br />
              structure is made of Steel Tube Spaceframe and, 
              <br className='md:inline hidden' />
              &nbsp;with a brake system using hydraulic disc brakes.
            </p>
            <div className="flex flex-row gap-5 mt-2">
              <div className="flex flex-col gap-2">
                <img alt="" src={steering}></img>
                <img alt="" src={transmition}></img>
              </div>
              <div className="flex flex-col gap-5 mt-2 italic font-bold text-white">
                <p>Rack and Pinion Steering System</p>
                <p>Sprocket &amp; Chain with Manual Shifter</p>
              </div>
            </div>
            <div className="flex flex-row gap-5 mt-1">
              <div className="flex flex-col">
                <p className="text-white italic font-bold text title">Wheels</p>
                <div className="bg-title p-2 md:p-3 flex flex-row gap-3">
                  <img className='md:py-0 py-1' alt="" src={wheel}></img>
                  <p className="italic my-auto text-whtie">6,4" Wide</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-white italic font-bold text title">Tires</p>
                <div className="bg-title md:p-3 p-2 flex flex-row gap-3">
                  <img alt="" className='md:py-0 py-1' src={Tires}></img>
                  <p className="italic my-auto text-white">
                    180/60 R13 Hoosier
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col md:gap-5 transform-gpu duration-700 md:w-max w-2/3 mx-auto md:mx-0 gap-2  ${
              slider
                ? "translate-x-0 opacity-100 delay-100"
                : "-translate-x-full h-0 opacity-0"
            }`}
          >
            <img alt="" src={isometri1}></img>
            <img alt="" src={isometri2} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .slicer {
          position: absolute;
          top: 32%;
          left: 5%;
        }
        @media (max-width: 768px) {
        .slicer {
          top: 70%;
          left: 30%;
        }
        }
      `}</style>
    </section>
  );
};
export default Mark1;
