import styled from "styled-components";

export const StyledServicesSection = styled.section`
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.backgroundColor};
  transition: background-color 0.3s ease;
`;

export const StyledServicesTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 2rem;
`;

export const StyledTabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const StyledTabButton = styled.button`
  background-color: ${({ selected, theme }) =>
    selected
      ? theme.primaryColor
      : theme.textColor === "white"
      ? "gray-700"
      : "gray-200"};
  color: ${({ selected, theme }) => (selected ? "white" : theme.textColor)};
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: white;
  }
`;

export const StyledSearchBar = styled.div`
  position: relative;
  max-width: 300px;
  margin: 0 auto 2rem;
`;

export const StyledSearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid
    ${({ theme }) => (theme.textColor === "white" ? "gray-600" : "gray-300")};
  border-radius: 0.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.textColor};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primaryColor};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primaryColor + "30"};
  }
`;

export const StyledSearchIcon = styled.svg`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  width: 1.25rem;
  height: 1.25rem;
  fill: ${({ theme }) =>
    theme.textColor === "white" ? "gray-400" : "gray-500"};
`;

export const StyledServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledServiceCard = styled.div`
  background-color: ${({ theme }) => theme.cardBackgroundColor};
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
`;

export const StyledServiceCategory = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 1rem;
`;

export const StyledServiceItem = styled.div`
  padding: 0.75rem 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) =>
      theme.textColor === "white" ? "gray-700" : "gray-100"};
  }
`;

export const StyledServiceItemIcon = styled.span`
  font-size: 1.25rem;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.primaryColor};
`;

export const StyledServiceItemTitle = styled.p`
  font-size: 1.125rem;
  font-weight: semibold;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 0.25rem;
`;

export const StyledServiceItemDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) =>
    theme.textColor === "white" ? "gray-400" : "gray-600"};
`;
