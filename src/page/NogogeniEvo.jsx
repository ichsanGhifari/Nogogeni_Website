import Navbar from "../components/Navbar/index";
import el1 from "../images/home/Electric1.png";
import steering from "../icons/Steering2.png";
import body1 from "../icons/Body1.png";
import isometri1 from "../images/home/isometri/Isometri12.png";
import isometri2 from "../images/home/isometri/Isometri22.png";
import rangka1 from "../images/home/rankga/ranka2top.png";
import rangka2bot from "../images/home/rankga/ranka2bot.png";
import brake from "../icons/Brake1.png";
import chassis from "../icons/Chassis1.png";
import back from "../icons/Back2.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NogogeniEvo = () => {
  const [slider, setSlider] = useState(false);
  return (
    <section className="h-screen bg-bgherosecond bg-cover bg-no-repeat overflow-hidden">
      <Navbar />
      <div
        className={`md:left-16 left-52 mt-16 2xl:left-60 top-auto relative transform-gpu duration-700 md:w-max ${
          slider
            ? "md:translate-y-full md:top-24 md:translate-x-0 -translate-x-full"
            : "md:-translate-y-24 md:-top-32 translate-x-0"
        }`}
      >
        <img
          className={`transform md:-rotate-90 rotate-0`}
          width={"850px"}
          alt=""
          src={el1}
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
        className={`text-white md:right-40 w-auto md:w-max md:top-44 top-1/3 absolute 
        overflow-hidden md:h-3/4 2xl:right-80 inset-y-44 mx-5 2xl:inset-y-56 md:mt-0 -mt-8`}
      >
        <div className="flex flex-col md:gap-3 gap-1 text-white">
          <Link to="/" className="flex flex-row cursor-pointer gap-3 w-max">
            <img
              src={back}
              alt=""
              className="border-2 border-white rounded-full w-8"
            ></img>
            <p className="italic font-medium text-xl my-auto">Back</p>
          </Link>
          <h2 className="italic ">NOGOGENI V <br /> EVO</h2>
          <div
            className={`transform-gpu duration-700 md:text-base ${
              slider
                ? "translate-x-full h-0 opacity-0"
                : "delay-100 -translate-x-0 h-0 opacity-100"
            }`}
          >
            <p className=" font-bold max-w-md">
              This car uses a 1000W 48V DC brushless motor and a 48V 10Ah
              lithium polymer (LiPO4) battery. Using aluminum alloy as the
              chassis, and carbon fiber.
            </p>
            <div className="flex flex-row gap-5 mt-2">
              <div className="flex flex-col gap-2">
                <img alt="" src={steering}></img>
                <img alt="" src={brake}></img>
              </div>
              <div className="flex flex-col gap-5 mt-2 italic font-bold">
                <p>Rack and Pinion Steering System</p>
                <p>Hydraulic Disk Brake System</p>
              </div>
            </div>
            <div className="flex flex-row gap-5 mt-1">
              <div className="flex flex-col">
                <p className=" italic font-bold text title">
                  Chassis
                </p>
                <div className="bg-title bg-opacity-80 p-2 md:p-3 flex flex-row gap-3">
                  <img className="md:py-0 py-1" alt="" src={chassis}></img>
                  <p className="italic my-auto ">Alumunium Alloy</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="italic font-bold text title">Body</p>
                <div className="bg-title bg-opacity-80 md:p-3 p-2 flex flex-row  h-full">
                  <img alt="" className=" p-2 " src={body1}></img>
                  <p className="italic my-auto ">Carbon Fiber</p>
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
export default NogogeniEvo;
