import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav,
	NavLogo,
	MobileIcon,
	NavItem,
	NavMenu,
	NavLinks,
} from './NavbarElements';
import logo from '../../images/LogoNogen.png'

const Navbar = ({toggle})=>{
    return (
		<div className='absolute'>
		<Nav>
			<div className='w-screen flex flex-row justify-between px-5 md:py-0 py-2' >
				<NavLogo to='/'><img alt='' src={logo}></img></NavLogo>
				<MobileIcon onClick={toggle}>
					<FaBars />
				</MobileIcon>				
				<NavMenu>
					<NavItem>
						<NavLinks to='about'>About</NavLinks>
					</NavItem>
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
		</div>
    )
}
export default Navbar