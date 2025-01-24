import styled from "styled-components";

export const StyledTestimonialsSection = styled.section`
  padding: 8rem 0;
  background-color: ${({ theme }) => theme.backgroundColor};
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

export const StyledTestimonialsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 2rem;
`;

export const StyledTestimonialSlider = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;
`;

export const StyledTestimonialSlide = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(-${({ activeIndex }) => activeIndex * 100}%);
`;

export const StyledTestimonialCard = styled.div`
  flex: 0 0 100%;
  background-color: ${({ theme }) => theme.cardBackgroundColor};
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  margin: 0 1rem;
`;

export const StyledTestimonialStars = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const StyledTestimonialStar = styled.span`
  color: #ffc107;
  font-size: 1.25rem;
  margin: 0 0.125rem;
`;

export const StyledTestimonialContent = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 1rem;
`;

export const StyledTestimonialAuthor = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
`;

export const StyledTestimonialRole = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) =>
    theme.textColor === "white" ? "gray-400" : "gray-600"};
`;

export const StyledSliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  &.prev {
    left: 1rem;
  }

  &.next {
    right: 1rem;
  }
`;

export const StyledSliderDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const StyledSliderDot = styled.span`
  width: 0.75rem;
  height: 0.75rem;
  background-color: ${({ active, theme }) =>
    active
      ? theme.primaryColor
      : theme.textColor === "white"
      ? "gray-400"
      : "gray-600"};
  border-radius: 50%;
  margin: 0 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
  }
`;
