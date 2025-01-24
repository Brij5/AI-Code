import React, { useState, useMemo, useCallback } from "react";
import {
  StyledServicesSection,
  StyledServicesTitle,
  StyledTabContainer,
  StyledTabButton,
  StyledSearchBar,
  StyledSearchInput,
  StyledSearchIcon,
  StyledServiceGrid,
} from "./ServicesSection.styled";
import ServiceCard from "./ServiceCard";

const ServicesSection = ({ isDarkMode, services, theme }) => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = useMemo(() => {
    return services
      .filter((service) => {
        if (selectedTab === "All") return true;
        return service.category.includes(selectedTab);
      })
      .filter((service) =>
        service.items.some((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
  }, [services, selectedTab, searchQuery]);

  const handleTabClick = useCallback((tab) => {
    setSelectedTab(tab);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  return (
    <StyledServicesSection theme={theme}>
      <StyledServicesTitle>Our Services</StyledServicesTitle>
      <StyledTabContainer>
        {["All", "Academic", "Non - Academic", "Marketing"].map(
          (tab, index) => (
            <StyledTabButton
              key={index}
              selected={selectedTab === tab}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </StyledTabButton>
          )
        )}
      </StyledTabContainer>
      <StyledSearchBar>
        <StyledSearchInput
          type="text"
          placeholder="Search services..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <StyledSearchIcon
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l - 6 - 6m2 - 5a7 7 0 11 - 14 0 7 7 0 0114 0z"
          />
        </StyledSearchIcon>
      </StyledSearchBar>
      <StyledServiceGrid>
        {filteredServices.map((service, index) => (
          <ServiceCard key={index} service={service} theme={theme} />
        ))}
      </StyledServiceGrid>
    </StyledServicesSection>
  );
};

export default ServicesSection;
