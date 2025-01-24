import React from "react";
import styled from "styled-components";

const StyledServiceCard = styled.div`
  background-color: ${(props) => props.theme.cardBackgroundColor};
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
`;

const StyledServiceCategory = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const StyledServiceItem = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.primaryColor + "10"};
  }
`;

const StyledServiceItemIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const StyledServiceItemName = styled.p`
  font-size: 1.2rem;
  font-weight: semibold;
  margin-bottom: 0.3rem;
`;

const StyledServiceItemDescription = styled.p`
  font-size: 0.9rem;
  color: ${(props) =>
    props.theme.textColor === "white" ? "gray-400" : "gray-600"};
`;

const ServiceCard = ({ service, theme }) => {
  return (
    <StyledServiceCard theme={theme}>
      <StyledServiceCategory>{service.category}</StyledServiceCategory>
      <div className="space-y-4">
        {service.items.map((item, index) => (
          <StyledServiceItem key={index}>
            <div className="flex items-center">
              <StyledServiceItemIcon>{item.icon}</StyledServiceItemIcon>
              <div>
                <StyledServiceItemName>{item.name}</StyledServiceItemName>
                <StyledServiceItemDescription>
                  {item.description}
                </StyledServiceItemDescription>
              </div>
            </div>
          </StyledServiceItem>
        ))}
      </div>
    </StyledServiceCard>
  );
};

export default ServiceCard;
