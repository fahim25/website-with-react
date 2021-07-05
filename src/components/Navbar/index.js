import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav,NavbarContainer,NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,NavBtn,NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) =>{
    return(
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">dolla</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="home"
                            smooth={true}
                            duration={500}
                            spy={true}
                            > Home </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            > About </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover"
                            smooth={true}
                            duration={500}
                            spy={true}
                            > Discover </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="service"
                            smooth={true}
                            duration={500}
                            spy={true}
                            > Services </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="singup"
                            smooth={true}
                            duration={500}
                            spy={true}> Sign Up </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink  to= "/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>   
        </>
    )
}

export default Navbar;