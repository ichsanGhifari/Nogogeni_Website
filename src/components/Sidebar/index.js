import React from 'react';
import {SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarManu,
} from './SideBarElements';

const Sidebar = ({isOpen,toggle})=> {
  return (
    <>
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarManu>
          <SidebarLink to='about' onClick ={toggle}>About</SidebarLink>
          <SidebarLink to='achievment' onClick ={toggle}>Achievment</SidebarLink>
          <SidebarLink to='partner' onClick ={toggle}>Partner</SidebarLink>
          <SidebarLink to='gallery' onClick ={toggle}>Gallery</SidebarLink>
          <SidebarLink to='contact' onClick ={toggle}>Contact</SidebarLink>
        </SidebarManu>
      </SidebarWrapper>
    </SidebarContainer>
    </>    
  )
}
export default Sidebar