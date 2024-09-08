import React, { useState } from 'react';
import styled from 'styled-components';
import sideImage from '../assests/modal.png'; 

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
  border-radius: 8px;
  width: 80%;
  max-width: 1000px;
  display: flex;
  overflow: hidden;
`;

const FormSection = styled.div`
  flex: 1;
  padding: 40px;
`;

const ImageSection = styled.div`
  flex: 1;
  background-image: url(${sideImage});
  background-size: cover;
  background-position: center;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 24px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const Checkbox = styled.input`
  margin-right: 8px;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #6200ee;
  border-radius: 3px;
  position: relative;
  cursor: pointer;

  &:checked::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #6200ee;
    font-size: 16px;
  }
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #333;
`;

const SubmitButton = styled.button`
  background-color: #6200ee;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
`;

const HelpText = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-top: 16px;
`;

const WikiLink = styled.a`
  color: #6200ee;
  text-decoration: none;
  font-weight: bold;
`;

const Modal1 = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [agreed, setAgreed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, author, description, agreed });
    onClose();
  };

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <FormSection>
          <Title>Submit An Entry</Title>
          <Subtitle>Submit a new record to the registry</Subtitle>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Enter the record's name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Enter your name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
            <TextArea
              placeholder="Tell us a bit more..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                required
              />
              <CheckboxLabel>By clicking this you agree to have read the wiki</CheckboxLabel>
            </CheckboxContainer>
            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
          <HelpText>
            Need Help? <WikiLink href="#">Read the Wiki</WikiLink>
          </HelpText>
        </FormSection>
        <ImageSection />
      </ModalContent>
    </ModalBackdrop>
  );
};

export default Modal1;