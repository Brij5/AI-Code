import styled from "styled - components";

export const StyledAboutSection = styled.section`
    padding: 8rem 0;
    background - color: ${(props) => props.theme.backgroundColor};
    position: relative;
    overflow: hidden;
`;

export const StyledAboutTitle = styled.h2`
    font - size: 2.5rem;
    font - weight: bold;
    text - align: center;
    margin - bottom: 2rem;
`;

export const StyledTeamGrid = styled.div`
    display: grid;
    grid - template - columns: repeat(1, 1fr);
    gap: 2rem;
    @media (min - width: 768px) {
        grid - template - columns: repeat(2, 1fr);
    }
    @media (min - width: 1024px) {
        grid - template - columns: repeat(4, 1fr);
    }
`;

export const StyledTeamMemberCard = styled.div`
    background - color: ${(props) => props.theme.cardBackgroundColor};
    border - radius: 0.5rem;
    box - shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    transition: box - shadow 0.3s ease, transform 0.3s ease;
    &:hover {
        box - shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transform: scale(1.02);
    }
`;

export const StyledTeamMemberImage = styled.img`
    border - radius: 50%;
    width: 80px;
    height: 80px;
    margin: 0 auto 1rem;
    display: block;
`;

export const StyledTeamMemberName = styled.h3`
    font - size: 1.5rem;
    font - weight: bold;
    text - align: center;
    margin - bottom: 0.5rem;
`;

export const StyledTeamMemberRole = styled.p`
    font - size: 1rem;
    text - align: center;
    color: ${(props) =>
      props.theme.textColor === "white" ? "gray - 400" : "gray - 600"};
    margin - bottom: 1rem;
`;

export const StyledTeamMemberEducation = styled.p`
    font - size: 0.9rem;
    text - align: center;
    color: ${(props) =>
      props.theme.textColor === "white" ? "gray - 400" : "gray - 600"};
`;

export const StyledTeamMemberLinkedin = styled.a`
    display: block;
    text - align: center;
    color: ${(props) => props.theme.primaryColor};
    text - decoration: none;
    &:hover {
        text - decoration: underline;
    }
`;
