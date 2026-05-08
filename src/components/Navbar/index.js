import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll/modules";
import { FaBars } from "react-icons/fa";
import { CV_URL } from "../../config/links";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, SetScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      SetScrollNav(true);
    } else {
      SetScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Développeur ServiceNow et JavaScript
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                À propos
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="parcour"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Parcours
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="exp"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Expérience
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projet"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Projets
              </NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink
                as="a"
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </NavBtnLink>
            </NavBtn>

            <NavBtn>
              <NavBtnLink onClick={toggleHome} to="/Skill">
                Compétences
              </NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
