import React from "react";
import { animateScroll as scroll } from "react-scroll/modules";
import { CV_URL } from "../../config/links";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SidebarMenu>
            <SidebarLink onClick={toggle} to="about">
              À propos
            </SidebarLink>
            <SidebarLink onClick={toggle} to="parcour">
              Parcours
            </SidebarLink>
            <SidebarLink onClick={toggle} to="exp">
              Expérience
            </SidebarLink>
            <SidebarLink onClick={toggle} to="projet">
              Projets
            </SidebarLink>
            <SidebarLink
              as="a"
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute onClick={toggleHome} to="/Skill">
              Compétences
            </SidebarRoute>
          </SideBtnWrap>
        </SideBarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
