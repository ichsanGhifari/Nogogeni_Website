import React, { useState } from "react";
import {
  Nav,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  NavLinksChild,
  Sidebar,
  Darken,
} from "./NavbarElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import mail from "../../icons/envelope.png";
import { Squash as Hamburger } from "hamburger-react";
import logo from "../../images/LogoNogen.png";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import ScrollLock from "react-scrolllock";
// import Footer from "../Footer/Index"
// import { motion } from "framer-motion"

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={`z-50 absolute `}>
      <Nav className="">
        <div className="w-screen flex flex-row md:justify-between justify-center px-5 md:py-0 py-5 ">
          <NavLogo to="/">
            <img alt="" src={logo} className="md:pt-0 pt-1"></img>
          </NavLogo>
          <Darken isOpen={isOpen}></Darken>
          <MobileIcon>
            <div className="flex flex-col ">
              <Sidebar
                className={`text-2xl mt-5 flex flex-col gap-5`}
                isOpen={isOpen}
              >
                <NavLinksChild to="/">Home</NavLinksChild>
                <Disclosure>
                  <Disclosure.Button>
                    <h2 className="italic font-light text-left">About</h2>
                  </Disclosure.Button>
                  <Transition
                    enter="transition ease-in duration-300 opacity-0  "
                    enterFrom="transform scale-100 opacity-10 "
                    enterTo="transform scale-100 opacity-100 "
                    leave="transition ease-out duration-300 opacity-0 "
                    leaveFrom="transform scale-100 opacity-10 "
                    leaveTo="transform scale-100 opacity-0 "
                  >
                    <Disclosure.Panel>
                      <div className="flex flex-col gap-3 ml-5 -mt-3 text-lg">
                        <NavLinksChild to="/Team">Team</NavLinksChild>
                        <NavLinksChild to="/Event">Event</NavLinksChild>
                        <NavLinksChild to="/Staff">Staff</NavLinksChild>
                        <NavLinksChild to="/Testimonial">
                          Testimonial
                        </NavLinksChild>
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </Disclosure>
                <NavLinksChild to="/Achievment">Achievement</NavLinksChild>
                <NavLinksChild to="/Partner">Partner</NavLinksChild>
                <NavLinksChild to="/Gallery">Gallery</NavLinksChild>
                <NavLinksChild to="/Contact">Contact</NavLinksChild>
                <div className="flex flex-row absolute bottom-44 gap-3 -ml-5 ">
                    <a
                      href={"https://www.instagram.com/nogogeni_its"}
                      className="rounded-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="border-2 rounded-full bg-gray-400 border-gray-400 w-8 h-8">
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="fa-md m-auto h-full flex "
                          color="black"
                        />
                      </div>
                    </a>
                    <a
                      href={"https://twitter.com/Nogogeni_ITS"}
                      className="rounded-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="border-2 rounded-full bg-gray-400 border-gray-400 w-8 h-8">
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className="fa-md m-auto h-full flex "
                          color="black"
                        />
                      </div>
                    </a>
                    <a
                      href={"https://www.facebook.com/NogogeniITS/"}
                      className="rounded-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="border-2 rounded-full bg-gray-400 border-gray-400 w-8 h-8">
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className="fa-md m-auto h-full flex"
                          color="black"
                        />
                      </div>
                    </a>
                    <a
                      href={
                        "https://www.youtube.com/channel/UCU7D-__KLegTFYhnrlitbzg"
                      }
                      className="rounded-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="border-2 rounded-full bg-gray-400 border-gray-400 w-8 h-8">
                        <FontAwesomeIcon
                          icon={faYoutube}
                          className="fa-md m-auto h-full flex"
                          color="black"
                        />
                      </div>
                    </a>
                    <a
                      href={"mailto:nogogeni.its@gmail.com"}
                      className="rounded-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="border-2 rounded-full bg-gray-400 border-gray-400 w-8 h-8">
                        <img src={mail} alt="" className="p-1" />
                      </div>
                    </a>
                    <a
                      href={
                        "https://www.linkedin.com/company/nogogeni-its-team/mycompany/"
                      }
                      className="rounded-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="border-2 rounded-full bg-gray-400 border-gray-400 w-8 h-8">
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="fa-md m-auto h-full flex"
                          color="black"
                        />
                      </div>
                    </a>
                  </div>
              </Sidebar>
              <Hamburger
                className=""
                toggled={isOpen}
                toggle={setOpen}
              ></Hamburger>
            </div>
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to="/" className="transform translate-y-0">
                Home
              </NavLinks>
            </NavItem>
            <Menu>
              <div className="grid-cols-1 flex-grow-0 ">
                <Menu.Button className="italic text-white px-4 h-1/2 ">
                  About
                </Menu.Button>
                <Transition
                  enter="transition duration-300 ease-out"
                  enterFrom="transform scale-0 opacity-0 "
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-300 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-0 opacity-0"
                >
                  <Menu.Items className=" z-50 flex-col gap-2 flex italic absolute text-left px-4 mt-2 bg-title rounded-lg py-2 bg-opacity-90 ">
                    <Menu.Item>
                      {({ active }) => (
                        <NavLinksChild to="/Team">Team</NavLinksChild>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLinksChild to="/Event">Event</NavLinksChild>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLinksChild to="/Staff">Staff</NavLinksChild>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLinksChild to="/Testimonial">
                          Testimonial
                        </NavLinksChild>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                  
                </Transition>
              </div>
            </Menu>
            <NavItem>
              <NavLinks to="/Achievment">Achievement</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Partner">Partner</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Gallery">Gallery</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </div>
      </Nav>
      <ScrollLock isActive={isOpen} />

      <style jsx>{``}</style>
    </div>
  );
};
export default Navbar;
