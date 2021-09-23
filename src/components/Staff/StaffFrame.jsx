import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {Card} from "./StaffElement"
 
function Frame(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className=" flex flex-col gap-5 h-96 ">
      <img
        src={props.img}
        alt=""
        onClick={() => setIsOpen(false)}
        className={` max-w-xl flex-shrink-0 flex-grow-0 w-60 mx-auto ${
          isOpen ? "cursor-pointer" : "cursor-default"
        }`}
      ></img>
      <Card
        isOpen={isOpen}
        className=''
      >
        <div onClick={() => setIsOpen(true)}>
          <p
            className={`p-1 transform-gpu duration-500  ${
              isOpen
                ? "scale-0 h-0 translate-y-10 opacity-0"
                : "delay-100 scale-100 "
            }`}
          >
            See More
          </p>
          <div
            className={`px-2 pb-2 -mt-2 transform-gpu duration-500  ${
              isOpen
                ? "delay-100 opacity-100 "
                : "-translate-y-16 opacity-0 h-0 scale-0 "
            }`}
          >
            <p>{props.name}</p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
              <a
                href={"mailto:" + props.email}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.email}
              </a>
            </p>
          </div>
        </div>
      </Card>
      <style jsx>{`

      `}</style>
    </section>
  );
}
export default Frame;
