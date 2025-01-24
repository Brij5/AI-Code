import styled from "styled-components";

export const StyledContactSection = styled.section`
  padding: 8rem 0;
  background-color: ${(props) => props.theme.backgroundColor};
  position: relative;
  overflow: hidden;
`;

export const StyledContactTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

export const StyledContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.cardBackgroundColor};
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

export const StyledFormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: semibold;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.textColor};
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid
    ${(props) => (props.theme.textColor === "white" ? "gray-600" : "gray-300")};
  border-radius: 0.375rem;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primaryColor};
    box-shadow: 0 0 0 2px ${(props) => props.theme.primaryColor + "30"};
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid
    ${(props) => (props.theme.textColor === "white" ? "gray-600" : "gray-300")};
  border-radius: 0.375rem;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
  resize: vertical;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primaryColor};
    box-shadow: 0 0 0 2px ${(props) => props.theme.primaryColor + "30"};
  }
`;

export const StyledSubmitButton = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.secondaryColor};
  }
`;
