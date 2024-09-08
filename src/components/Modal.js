import React from 'react';
import styled from 'styled-components';
import calendar from '../assests/calendar.svg';

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
  padding: 24px;
  border-radius: 16px;
  width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #888;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const SubmissionImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const SubmissionInfo = styled.div`
  flex: 1;
`;

const SubmissionDate = styled.div`
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CalendarIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

const TagText = styled.div`
  font-size: 14px;
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 12px;
`;

const RecordTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 4px 0;
`;

const ArtistName = styled.div`
  color: #666;
  font-size: 14px;
  margin-bottom: 12px;
`;

const MoreDetailsButton = styled.button`
  background: none;
  border: 1px solid #6200ee;
  color: #6200ee;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const ChallengeText = styled.div`
  color: #6200ee;
  font-size: 14px;
`;

const VoteButton = styled.button`
  background-color: #6200ee;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

const Modal = ({ isOpen, onClose, submission }) => {
  if (!isOpen || !submission) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <Title>Submission Details</Title>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <ContentWrapper>
          <SubmissionImage src={submission.imageSrc} alt="Submission" />
          <SubmissionInfo>
          <SubmissionDate>
  <CalendarIcon src={calendar} alt="Calendar" /> {submission.date}
</SubmissionDate>
            <TagText>{submission.tagText}</TagText>
            <RecordTitle>{submission.recordTitle}</RecordTitle>
            <ArtistName>{submission.artistName}</ArtistName>
            <MoreDetailsButton>More Details →</MoreDetailsButton>
          </SubmissionInfo>
        </ContentWrapper>
        <ModalFooter>
          <ChallengeText>Challenge Submission</ChallengeText>
          <VoteButton>Vote →</VoteButton>
        </ModalFooter>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default Modal;