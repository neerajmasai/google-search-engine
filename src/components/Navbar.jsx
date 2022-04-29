import React from 'react';
import NavbarItem from './NavbarItem';
import { NavbarStyle } from '../styles/Navbar.styled';

function Navbar() {
  return (
    <NavbarStyle>
        <NavbarItem data={"Gmail"} icon={false}/>
        <NavbarItem data={"Images"} icon={false}/>
        <NavbarItem data={""} icon={"grid"}/>
        <NavbarItem data={""} icon={"profile"}/>
    </NavbarStyle>
  )
}

export default Navbar