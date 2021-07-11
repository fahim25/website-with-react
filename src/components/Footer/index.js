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
                            dolla &copy; 2021
                        </CopyRight>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
} 

export default Footer;