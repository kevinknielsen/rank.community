import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  margin-top: 40px;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  background-color: #6200ee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Follow us, <span style={{ color: '#6200ee' }}>everywhere</span>.</p>
      <SocialLinks>
        <SocialIcon href="#" aria-label="Discord">D</SocialIcon>
        <SocialIcon href="#" aria-label="TikTok">T</SocialIcon>
        <SocialIcon href="#" aria-label="Facebook">F</SocialIcon>
        <SocialIcon href="#" aria-label="YouTube">Y</SocialIcon>
      </SocialLinks>
      <p>More Information</p>
      <a href="/more-info">Read More Here</a>
    </FooterContainer>
  );
};

export default Footer;