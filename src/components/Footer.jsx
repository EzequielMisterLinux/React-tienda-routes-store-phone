// Footer.jsx
import React from 'react';
import styled from 'styled-components';
import facebookLogo from './images/facebook.svg';
import instagramLogo from './images/instagram.svg';
import youtubeLogo from './images/youtube.svg';

const Row = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px; 
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: -1;
`;


const StyledFooter = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px ;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;

  @media (max-width: 767px) {
    position: relative;
  }
`;

const SocialLink = styled.a`
  margin: 0 10px;
  display: inline-block;
`;

const Footer = () => {
    return (
      

        <Row>
            <StyledFooter>

          
            <SocialLink href="https://web.facebook.com/EzequielZCc/" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" width="80" height="80" />
            </SocialLink>
          
          
            <SocialLink href="https://www.instagram.com/misterlinux_/" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" width="80" height="80" />
            </SocialLink>
          
          
            <SocialLink href="https://www.youtube.com/channel/UCat7fmkDr-guD3IAn7YyD0w" target="_blank" rel="noopener noreferrer">
              <img src={youtubeLogo} alt="YouTube" width="80" height="80" />
            </SocialLink>
          
          <p>&copy; Humberto Ezequiel Zelaya Campos</p>
                <p>FullstackDeveloper Jr, Sysadmin mid</p>
          </StyledFooter>
        </Row>
      
    );
  };
  
  export default Footer;