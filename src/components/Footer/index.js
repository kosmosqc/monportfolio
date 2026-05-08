import React from "react";
import { animateScroll as scroll } from "react-scroll/modules";

import { FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  WebsiteRights,
  SocialMediaIconWrap,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaIconWrap>
            <SocialIcons>
              <SocialIconLink
                href="https://www.linkedin.com/in/alain-gionet-8899a1220/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="mailto:kosmosqc@gmail.com"
                aria-label="Envoyer un courriel"
              >
                <GrMail />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaIconWrap>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Kosmos
            </SocialLogo>
            <WebsiteRights>
              Alain Gionet © {new Date().getFullYear()} Codé avec React.js et
              déployé avec GitHub
              <br />
              | Optimisé pour ordinateur et adapté aux mobiles |
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
