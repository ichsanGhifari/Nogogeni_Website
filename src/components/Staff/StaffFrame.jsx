import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Frame(props){
    const [isOpen, setIsOpen] = useState(false);

    return(
    <section className=" flex flex-col gap-5 h-96 ">
        <img src={props.img} alt="" onClick={()=>setIsOpen(false)} className={` max-w-xl flex-shrink-0 flex-grow-0 w-60 mx-auto ${isOpen?"cursor-pointer":"cursor-default"}`}></img>
        <div className={`transform-gpu  duration-300 ${isOpen ? "sideBorder scale-100" :"scale-90"}`}>
            <div
            className={`transition-opacity duration-500  ${
                isOpen
                ? "cursor-default border-opacity-0"
                : " cursor-pointer border-opacity-100 w-32 mx-auto  border-2 border-white rounded-md"
            }`}
            onClick={() => setIsOpen(true)}
            >
                <p className={`p-1 transform-gpu duration-500  ${isOpen ? "scale-0 h-0 translate-y-10 opacity-0" : "delay-100 scale-100 "}`}
                >
                See More
                </p>
                <div className={`px-5 pb-2 -mt-2 transform-gpu duration-500  ${isOpen ? "delay-100 opacity-100 " : " -translate-y-12 opacity-0 h-0 scale-0 "}`} >
                    <p>{props.name}</p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                        <a href={"mailto:" + props.email} target='_blank'  rel="noopener noreferrer">{props.email}</a>
                    </p>
                </div>
            </div>
        </div>
        <style jsx>{`
        .sideBorder {
            transition: 0.5s ease-in all;
          background: 
            linear-gradient(to right, white 2px, transparent 2px) 0 100%,
            linear-gradient(to left, white 2px, transparent 2px) 100% 100%,
            linear-gradient(to top, white 2px, transparent 2px) 0% 100%;
            opacity:100;
          background-repeat: no-repeat;
          background-size: 370px 35px;
        }
      
        `}</style>
    </section>
    )
}
export default Frame