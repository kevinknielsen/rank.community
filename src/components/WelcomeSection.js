import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
 display: flex;
padding-right: var(--spacing-xl, 48px);
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
flex: 1 0 0;
align-self: stretch;
`;
const PointsContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 20px;
`;

const PointsHeader = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
`;

const PointsValue = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const PointsChange = styled.div`
  font-size: 14px;
  color: #4CAF50;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ChangeIcon = styled.span`
  margin-right: 4px;
`;

const ClaimSection = styled.div`
  background-color: #F0F8FF;
  border-radius: 8px;
  padding: 16px;
`;

const ClaimTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const InfoIcon = styled.span`
  color: #007BFF;
  margin-right: 8px;
`;

const PoweredBy = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 12px;
`;

const BrowseButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
`;

const InfoBox = styled.div`
  background-color: #f0f8ff;
  padding: 20px;
  border-radius: 8px;
`;


const WelcomeSection = () => {
  return (
    <WelcomeContainer>
      <Title>Welcome! 👋<br />This is your<br />Artist Registry</Title>
      <Description>
        Your members can decide which records to upvote based on their ownership of your released editions or any other token. If you own the designated token, use the registry to vote for a release, or challenge a submission.
      </Description>
      <PointsHeader>Your Points</PointsHeader>
        <PointsValue>XP 1,234</PointsValue>
        <PointsChange>
          <ChangeIcon>↑</ChangeIcon>
          +XX% Last 24 hours
        </PointsChange>
      <InfoBox>
      <PointsContainer>
        <ClaimSection>
          <ClaimTitle>
            <InfoIcon>ℹ</InfoIcon>
            Claim A Prize Using Your Points
          </ClaimTitle>
          <PoweredBy>Powered by Slice</PoweredBy>
          <BrowseButton>
            Browse the Store
          </BrowseButton>
        </ClaimSection>
      </PointsContainer>
      </InfoBox>
    </WelcomeContainer>
  );
};

export default WelcomeSection;