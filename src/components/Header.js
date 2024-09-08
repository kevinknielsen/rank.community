import React from 'react';
import styled from 'styled-components';
import Image from '../assests/Image.svg'; 
import BorderImage from '../assests/BorderImage.svg';
import Leftdd from '../assests/Leftdd.svg';



const HeaderContainer = styled.header`
  display: flex;
  height: 72px;
  padding: var(--spacing-xs, 16px);
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  background: var(--surface-surface-primary, #FFF);
  box-shadow: 0px 1px 2px 0px rgba(78, 81, 83, 0.10);
`;

const ProfileSection = styled.div`
  display: flex;
  padding: var(--spacing-3xs, 8px) var(--spacing-3xs, 8px) var(--spacing-3xs, 8px) var(--spacing-xs, 16px);
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-primitives-spacing-8, 8px);
  border-radius: var(--Radius-radius-pill, 500px);
  background: var(--surface-surface-secondary, #F7F7F8);
`;

const Border = styled.div`width: 32px;
height: 32px;
flex-shrink: 0;
stroke-width: 1px;
stroke: var(--border-border-subdued, rgba(0, 0, 0, 0.10));
`;

const Dd = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

const Greeting = styled.span`
  font-size: 14px;
  color: var(--text-text-primary, #1A1A1A);
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: var(--Radius-radius-pill, 500px);
  background: var(--surface-surface-secondary, #F7F7F8);
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ProfileSection>
        <Greeting>Hello, Rivaan</Greeting>
        <Border src={BorderImage} alt="Border" >
        <ProfileImage src={Image} alt="Profile" />
        </Border>
        <Dd src={Leftdd} alt="Leftdd" />
        </ProfileSection>
    </HeaderContainer>
  );
};

export default Header;