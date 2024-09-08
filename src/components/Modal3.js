import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 24px;
  width: 90%;
  max-width: 500px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  color: #6200ee;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const EditionImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const EditionInfo = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 16px;
`;

const SubmissionDate = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

const CalendarIcon = styled.span`
  margin-right: 8px;
`;

const EditionType = styled.div`
  display: inline-block;
  background-color: #e0e0e0;
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 14px;
  margin-bottom: 8px;
`;

const EditionTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;

const EditionDescription = styled.p`
  font-size: 14px;
  color: #333;
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
  display: flex;
  align-items: center;
`;


const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const EditionId = styled.span`
  font-size: 14px;
  color: #666;
`;

const MoreInfoButton = styled.button`
  background-color: #6200ee;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
`;

const Modal3 = ({ isOpen, onClose, edition }) => {
  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>Edition Details</Title>
        <EditionImage src={edition.image} alt={edition.title} />
        <EditionInfo>
          <SubmissionDate>
            <CalendarIcon>📅</CalendarIcon> {edition.date}
          </SubmissionDate>
          <EditionType>{edition.type}</EditionType>
          <EditionTitle>{edition.title}</EditionTitle>
          <EditionDescription>{edition.description}</EditionDescription>
          <MintButton>
            Mint (+{edition.points} points)
          </MintButton>
        </EditionInfo>
        <BottomSection>
          <EditionId>Vdfkmslfdkmndfdf</EditionId>
          <MoreInfoButton>More Information →</MoreInfoButton>
        </BottomSection>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default Modal3;