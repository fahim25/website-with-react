import react from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrap, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = () =>{
    return(
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrap>
                <SidebarMenu>
                    <SidebarLink to="about">About</SidebarLink>
                    <SidebarLink to="discover">Discover</SidebarLink>
                    <SidebarLink to="service">Services </SidebarLink>
                    <SidebarLink to="signup">Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrap>
        </SidebarContainer>
    )
}
export default Sidebar;