import React from "react";
import {
  StyledAboutSection,
  StyledAboutTitle,
  StyledTeamGrid,
  StyledTeamMemberCard,
  StyledTeamMemberImage,
  StyledTeamMemberName,
  StyledTeamMemberRole,
  StyledTeamMemberEducation,
  StyledTeamMemberLinkedin,
} from "./AboutSection.styled";

const AboutSection = ({ isDarkMode, teamMembers, theme }) => {
  return (
    <StyledAboutSection theme={theme}>
      <StyledAboutTitle>About Us</StyledAboutTitle>
      <StyledTeamGrid>
        {teamMembers.map((member, index) => (
          <StyledTeamMemberCard key={index}>
            <StyledTeamMemberImage src={member.image} alt={member.name} />
            <StyledTeamMemberName>{member.name}</StyledTeamMemberName>
            <StyledTeamMemberRole>{member.role}</StyledTeamMemberRole>
            <StyledTeamMemberEducation>
              {member.education}
            </StyledTeamMemberEducation>
            <StyledTeamMemberLinkedin href={member.linkedin}>
              LinkedIn
            </StyledTeamMemberLinkedin>
          </StyledTeamMemberCard>
        ))}
      </StyledTeamGrid>
    </StyledAboutSection>
  );
};

export default AboutSection;
