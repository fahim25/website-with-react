import react from 'react';

import { FooterContainer, FooterWrap, FooterLinkContainer, FooterLinkWrap, FooterLinkItems, FooterLinkTitle, FooterLink} from './FooterElements';
const Footer = () =>{
    return(
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinkWrap>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>

                            <FooterLink to="/Home">Home</FooterLink>
                            <FooterLink to="/service">Investor</FooterLink>
                            <FooterLink to="/service">How it works</FooterLink>
                            <FooterLink to="/service">Testimonial</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Video</FooterLinkTitle>

                            <FooterLink to="/Home">Home</FooterLink>
                            <FooterLink to="/service">Investor</FooterLink>
                            <FooterLink to="/service">How it works</FooterLink>
                            <FooterLink to="/service">Testimonial</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrap>

                    <FooterLinkWrap>
                        <FooterLinkItems>
                            <FooterLinkTitle>Services</FooterLinkTitle>

                            <FooterLink to="/Home">Home</FooterLink>
                            <FooterLink to="/service">Investor</FooterLink>
                            <FooterLink to="/service">How it works</FooterLink>
                            <FooterLink to="/service">Testimonial</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Widgets</FooterLinkTitle>

                            <FooterLink to="/Home">Home</FooterLink>
                            <FooterLink to="/service">Investor</FooterLink>
                            <FooterLink to="/service">How it works</FooterLink>
                            <FooterLink to="/service">Testimonial</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrap>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            dolla
                        </SocialLogo>
                        <CopyRight>
                            dolla &copy; {new Date().getFullYear} all rights reserved.
                        </CopyRight>
                        <SocialIcon>
                            <SocialLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialLink>
                            <SocialLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialLink>
                            <SocialLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube   />
                            </SocialLink>
                            <SocialLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialLink>
                        </SocialIcon>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
} 

export default Footer;