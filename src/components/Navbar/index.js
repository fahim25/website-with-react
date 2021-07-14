import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {Nav,NavbarContainer,NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,NavBtn,NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) =>{
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () =>{
        if(window.scrollY >=80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return(
        <>
        <IconContext.Provider value ={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome} >dolla</NavLogo>
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
            </IconContext.Provider>   
        </>
    )
}

export default Navbar;