import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Image1 } from '../assests/Image1.svg';
import { ReactComponent as Image3 } from '../assests/Image3.svg';
import { ReactComponent as Image4 } from '../assests/Image4.svg';
import { ReactComponent as Image6 } from '../assests/Image6.svg';
import { ReactComponent as Image7 } from '../assests/Image7.svg';
import SubmissionButton from '../assests/SubmissionButton.svg';
import VoteImage from '../assests/VoteImage.svg';
import Modal from './Modal';
import Modal1 from './Modal1';

// Import the image you want to use
import SubmissionImageSrc from '../assests/modal.png';

const RegistryContainer = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const ActionIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 16px;
`;



const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #6200ee;
  color: white;
  padding: 10px 16px;
  border-radius: 25px;
  margin-bottom: 16px;
`;

const SubmissionList = styled.ul`
  list-style-type: none;
  padding: 0;
  overflow-y: auto;
  flex-grow: 1;
`;

const SubmissionItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
`;

const SubmissionImage = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 12px;
  border-radius: 50%;
  svg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const SubmissionInfo = styled.div`
  flex-grow: 1;
`;

const SubmissionName = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const ArtistName = styled.div`
  color: #666;
  font-size: 12px;
`;

const ActionButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  color: #6200ee;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-left: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

const Footer = styled.div`
  margin-top: 16px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
  font-size: 14px;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const SubmitButton = styled.button`
  background-color: #6200ee;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  width: 100%;
`;

const SubmissionRegistry = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [isModal1Open, setIsModal1Open] = useState(false);

  const openModal = (submission) => {
    const currentDate = new Date().toLocaleDateString(); 
    const tagText = `Tag for ${submission.name}`; 

    setSelectedSubmission({
      imageSrc: SubmissionImageSrc, 
      date: currentDate, 
      tagText: tagText, 
      recordTitle: submission.name,
      artistName: submission.artist
    });
    setIsModalOpen(true);
  };

  const submissions = [
    { id: 1, name: 'Submission 1', artist: 'Artist Number 1', SvgComponent: Image1 },
    { id: 2, name: 'Submission 2', artist: 'Artist Number 2', SvgComponent: Image3 },
    { id: 3, name: 'Submission 3', artist: 'Artist Number 3', SvgComponent: Image4 },
    { id: 4, name: 'Submission 4', artist: 'Artist Number 4', SvgComponent: Image6 },
    { id: 5, name: 'Submission 5', artist: 'Artist Number 5', SvgComponent: Image7 },
  ];

  return (
    <RegistryContainer>
      <Title>Submission Registry</Title>
      <HeaderBar>
        <span>Submissions</span>
        <span>Actions</span>
      </HeaderBar>
      <SubmissionList>
        {submissions.map((submission) => (
          <SubmissionItem key={submission.id}>
            <SubmissionImage>
              <submission.SvgComponent />
            </SubmissionImage>
            <SubmissionInfo>
              <SubmissionName>{submission.name}</SubmissionName>
              <ArtistName>{submission.artist}</ArtistName>
            </SubmissionInfo>
            <ActionButton onClick={() => openModal(submission)}>
              <ActionIcon src={VoteImage} alt="VoteImage" />
            </ActionButton>
            <ActionButton onClick={() => openModal(submission)}>
              <ActionIcon src={SubmissionButton} alt="SubmissionButton" />
            </ActionButton>
          </SubmissionItem>
        ))}
      </SubmissionList>
      <Footer>
        <CheckboxLabel>
          <Checkbox type="checkbox" />
          I am a member
        </CheckboxLabel>
        <SubmitButton onClick={() => setIsModal1Open(true)}>Submit An Entry</SubmitButton>
      </Footer>
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        submission={selectedSubmission}
      />
      <Modal1
        isOpen={isModal1Open}
        onClose={() => setIsModal1Open(false)}
      />
    </RegistryContainer>
  );
};

export default SubmissionRegistry;