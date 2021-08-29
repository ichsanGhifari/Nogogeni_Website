import React from "react";
import mail from "../icons/gmail.png";
import wa from "../icons/wa.png";
// import ButtonMailto from "../components/Mail";

function ContactFrame(props) {
  if (props.stats) {
    return (
      <div className="flex flex-row w-full md:-space-x-20 -space-x-10 ">
        <div className="card bottom-0 z-10 border-2 rounded-full border-white bg-black">
          <img
            src={props.img}
            alt=""
            className=" z-10 transform-gpu scale-90 md:-mt-9 -mt-10 duration-500 ease-in-out hover:scale-110 hover:-translate-y-5"
          ></img>
        </div>
        <div className="py-2 md:px-28 pl-12 text-white my-auto bg-gradient-to-r from-gray-500 to-transparent ml-36 rounded-l-3xl">
          <p className="font-extrabold italic md:text-2xl text-xl">
            {props.title}
          </p>
          <p className="font-bold">{props.name}</p>
          <div className="flex flex-row gap-3 md:mt-1 mt-0">
            <img alt="" className=" py-1 icon" src={wa}></img>
            <p className="my-auto">{props.number}</p>
          </div>
          <div className="flex flex-row gap-3 md:mt-1 mt-0">
            <img alt="" className="py-1 icon" src={mail}></img>
            <a href={"mailto:" + props.email} target='_blank'  rel="noopener noreferrer">{props.email}</a>
          </div>
        </div>
      </div>
    );
  } else if (!props.stats) {
    return (
      <div className="flex flex-row-reverse w-full ">
        <div className="card bottom-0 z-10 border-2 rounded-full border-white bg-black">
          <img
            src={props.img}
            alt=""
            className="z-10 transform-gpu scale-90 md:-mt-9 -mt-9 duration-500 ease-in-out hover:scale-110 hover:-translate-y-5"
          ></img>
        </div>
        <div className="py-2 md:px-28 px-0 pr-20 pl-8 text-white my-auto bg-gradient-to-l from-gray-500 to-transparent -mr-16 rounded-r-3xl ">
          <p className="font-extrabold italic md:text-2xl text-xl ">
            {props.title}
          </p>
          <p className="font-bold">{props.name}</p>
          <div className="flex flex-row gap-3 md:mt-1 mt-0">
            <img alt="" className="icon py-1" src={wa}></img>
            <p className="my-auto">{props.number}</p>
          </div>
          <div className="flex flex-row gap-3 md:mt-1 mt-0">
            <img alt="" className="py-1 icon" src={mail}></img>
            <a href={"mailto:" + props.email} target='_blank'  rel="noopener noreferrer">{props.email}</a>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactFrame;
