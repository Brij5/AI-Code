import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${(props) =>
    props.theme.backgroundColor === "white" ? "gray-100" : "gray-900"};
  padding: 2rem 0;
  border-top: 1px solid
    ${(props) => (props.theme.textColor === "white" ? "gray-700" : "gray-300")};
`;

export const StyledFooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

export const StyledFooterText = styled.p`
  font-size: 0.9rem;
  color: ${(props) =>
    props.theme.textColor === "white" ? "gray-400" : "gray-600"};
`;

export const StyledBackToTopButton = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 1rem;
  &:hover {
    background-color: ${(props) => props.theme.secondaryColor};
  }
`;
