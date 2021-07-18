import React from 'react';
import {Nav,
	NavLogo,
	MobileIcon,
	NavItem,
	NavMenu,
	NavLinks,
	NavLinksChild
} from './NavbarElements';
import { Squash as Hamburger } from 'hamburger-react'
import logo from '../../images/LogoNogen.png'
import { Menu,Transition, Disclosure } from '@headlessui/react'
// import { motion } from "framer-motion"

// const variants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: "-100%" },
// }

const Navbar = ({toggle})=>{
	// const [isOpen, setIsOpen] = useState(false)
    return (
		<div className='absolute overflow-visi'>
		<Nav>
			<div className='w-screen flex flex-row md:justify-between justify-center  px-5 md:py-0 py-2 ' >
				<NavLogo to='/'><img alt='' src={logo} className='md:pt-0 pt-5'></img></NavLogo>
				<MobileIcon>
				<Disclosure>
					<div className='flex flex-row'>
					<Disclosure.Button className="py-2 z-30">
						<Hamburger className='z-30'></Hamburger>
					</Disclosure.Button>
					<Transition
						enter="transition duration-75 opacity-100 "
						enterFrom="transform scale-100 opacity-100 "
						enterTo="transform scale-100 opactiy-100 "
						leave="transition duration-1000 opacity-0 "
						leaveFrom="transform scale-100 translate-x-96 "
						leaveTo="transform scale-100 translate-x-96 "
					>
					<Disclosure.Panel className=" h-screen py-20 px-10 sidebar absolute -left-40 z-20 -mt-5 ">
						<div className='text-2xl mt-5 flex flex-col gap-5'>
							<NavLinksChild>Home</NavLinksChild>
							<Disclosure>
								<Disclosure.Button>
									<h2 className='italic font-extralight text-left'>About</h2>
								</Disclosure.Button>
								<Transition
								enter="transition duration-100 opacity-0  "
								enterFrom="transform scale-100 opacity-10 "
								enterTo="transform scale-100 opacity-100 "
								leave="transition duration-100 opacity-0 "
								leaveFrom="transform scale-100 opacity-10 "
								leaveTo="transform scale-100 opacity-0 ">
									<Disclosure.Panel>
									<div className='flex flex-col gap-3 ml-5 -mt-3 text-lg'>
										<NavLinksChild>Team</NavLinksChild>
										<NavLinksChild>Event</NavLinksChild>
										<NavLinksChild>Staff</NavLinksChild>
										<NavLinksChild>Testimonial</NavLinksChild>
									</div>
									</Disclosure.Panel>
								</Transition>
							</Disclosure>
							<NavLinksChild>Achievment</NavLinksChild>
							<NavLinksChild>Partner</NavLinksChild>
							<NavLinksChild>Gallery</NavLinksChild>
							<NavLinksChild>Contact</NavLinksChild>
						</div>
					</Disclosure.Panel>
					</Transition>
					</div>
				</Disclosure>
				</MobileIcon>

				<NavMenu>
					<NavItem>
						<NavLinks to='Home' className='transform translate-y-0'>Home</NavLinks>
					</NavItem>
							<Menu >
								<div className='grid-cols-1 flex-grow-0 '>
								<Menu.Button className='italic text-white px-4 h-1/2 '>About</Menu.Button>
								<Transition
								enter="transition duration-100 ease-out"
								enterFrom="transform scale-95 opacity-0"
								enterTo="transform scale-100 opacity-100"
								leave="transition duration-75 ease-out"
								leaveFrom="transform scale-100 opacity-100"
								leaveTo="transform scale-95 opacity-0"
								>	
								<Menu.Items className=' flex-col flex italic absolute text-left px-4 mt-1 '>
									<Menu.Item>
									{({ active }) => (
										<NavLinksChild>Team</NavLinksChild>
									)}
									</Menu.Item>
									<Menu.Item>
									{({ active }) => (
										<NavLinksChild>Event</NavLinksChild>
									)}
									</Menu.Item>
									<Menu.Item>
									{({ active }) => (
										<NavLinksChild>Staff</NavLinksChild>
									)}
									</Menu.Item>
									<Menu.Item>
									{({ active }) => (
										<NavLinksChild>Testimonial</NavLinksChild>
									)}
									</Menu.Item>
								</Menu.Items>					
								</Transition>
								</div>
							</Menu>
						<NavItem>
							<NavLinks to='Achievment'>Achievment</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='service'>Partner</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='service'>Gallery</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='service'>Contact</NavLinks>
						</NavItem>
				</NavMenu>
			</div>
		</Nav>
		<style jsx>{`
			.sidebar{
				background-color:#1E1E1E;
				width:225px;
				overflow:hidden;
			}
		`}</style>
		</div>
    )
}
export default Navbar