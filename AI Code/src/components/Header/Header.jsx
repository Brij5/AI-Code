import React from "react";
import {
  StyledHeader,
  StyledContainer,
  StyledLogoContainer,
  StyledNav,
  StyledNavLink,
  StyledDarkModeButton,
} from "./Header.styled";

const Header = ({
  isDarkMode,
  toggleDarkMode,
  selectedNav,
  setSelectedNav,
  scrollToTop,
  theme,
}) => {
  return (
    <StyledHeader role="banner">
      <StyledContainer>
        <StyledLogoContainer
          onClick={scrollToTop}
          role="link"
          aria-label="Go to the top of the page"
        >
          <img
            src="https://source.unsplash.com/100x100/?logo,content"
            alt="ContentKosh Logo"
            className="h-12 w-auto"
          />
          <div className="ml-3">
            <h1 className="text-lg font-bold text-gray-900">ContentKosh</h1>
            <p className="text-sm text-gray-600">Words that Work</p>
          </div>
        </StyledLogoContainer>
        <StyledNav role="navigation">
          {["services", "about", "blogs", "contact"].map((nav) => (
            <StyledNavLink
              key={nav}
              href={`#${nav}`}
              selected={selectedNav === nav}
              onClick={() => setSelectedNav(nav)}
              aria-current={selectedNav === nav ? "page" : undefined}
            >
              {nav.charAt(0).toUpperCase() + nav.slice(1)}
            </StyledNavLink>
          ))}
        </StyledNav>
        <StyledDarkModeButton
          onClick={toggleDarkMode}
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </StyledDarkModeButton>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
