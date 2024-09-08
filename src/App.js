import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import SubmissionRegistry from './components/SubmissionRegistry';
import Footer from './components/Footer';
import ArtistCommunity from './components/ArtistCommunity';


const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

const ArtistRegistry = () => {
  return (
    <PageContainer>
      <Header />
      <ContentWrapper>
        <WelcomeSection />
        <SubmissionRegistry />
      </ContentWrapper>
      <ArtistCommunity />
      <Footer />
    </PageContainer>
  );
};

export default ArtistRegistry;