import React, { useState } from 'react';
import styled from 'styled-components';
import Modal3 from './Modal3';
import Image1 from '../assests/gif1.gif';
import Image2 from '../assests/gif2.png';
import Image3 from '../assests/gif3.png';

const EditionsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const EditionsTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const EditionsDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 24px;
`;

const EditionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

const EditionCard = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const EditionImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const EditionInfo = styled.div`
  padding: 16px;
`;

const EditionDate = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

const CalendarIcon = styled.span`
  margin-right: 4px;
`;

const EditionType = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const EditionTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const ArtistName = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`;

const MintButton = styled.button`
  background-color: transparent;
  color: #6200ee;
  border: 1px solid #6200ee;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #6200ee;
    color: white;
  }
`;

const ArtistCommunity = () => {
  const [isModal3Open, setIsModal3Open] = useState(false);
  const [selectedEdition, setSelectedEdition] = useState(null);

  const editions = [
    {
      id: 1,
      image: Image1,
      date: '01 Aug 2024',
      type: 'Social',
      title: 'Blog Post 1',
      artist: 'San Holo',
      points: 50,
      description: "This is a description of Blog Post 1. It's a social media post that engages with the community.",
    },
    {
      id: 2,
      image: Image2,
      date: '03 Sept 2024',
      type: 'Media',
      title: 'disappear',
      artist: 'San Holo',
      points: 100,
      description: '"disappear" is quite literally about escaping reality and finding solace in your own imagination and memories. This song is for anyone who is feeling lost or overwhelmed by life\'s challenges.',
    },
    {
      id: 3,
      image: Image3,
      date: '01 Feb 2024',
      type: 'Media',
      title: 'GLOW (feat. Au/Ra)',
      artist: 'San Holo',
      points: 100,
      description: '"GLOW" is a collaboration with Au/Ra that explores themes of inner light and personal growth.',
    },
  ];

  return (
    <EditionsContainer>
      <EditionsTitle>Mint [Artists] Editions</EditionsTitle>
      <EditionsDescription>
        Mint your favorite artist's songs onchain and rise in their community leaderboard.
      </EditionsDescription>
      <EditionsGrid>
        {editions.map((edition) => (
          <EditionCard key={edition.id} onClick={() => {
            setSelectedEdition(edition);
            setIsModal3Open(true);
          }}>
            <EditionImage src={edition.image} alt={edition.title} />
            <EditionInfo>
              <EditionDate>
                <CalendarIcon>📅</CalendarIcon> {edition.date}
              </EditionDate>
              <EditionType>{edition.type}</EditionType>
              <EditionTitle>{edition.title}</EditionTitle>
              <ArtistName>{edition.artist}</ArtistName>
              <MintButton onClick={(e) => e.stopPropagation()}>
                Mint (+{edition.points} points)
              </MintButton>
            </EditionInfo>
          </EditionCard>
        ))}
      </EditionsGrid>
      <Modal3
        isOpen={isModal3Open}
        onClose={() => setIsModal3Open(false)}
        edition={selectedEdition}
      />
    </EditionsContainer>
  );
};

export default ArtistCommunity;