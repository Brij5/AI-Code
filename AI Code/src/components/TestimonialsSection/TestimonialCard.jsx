import React from "react";
import styled from "styled - components";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i} className="text - yellow - 400">
          ★
        </span>
      );
    } else if (i - 0.5 === rating) {
      stars.push(
        <span key={i} className="text - yellow - 400">
          ½
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="text - gray - 400">
          ★
        </span>
      );
    }
  }
  return stars;
};

const StyledTestimonialCard = styled.div`
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

const StyledTestimonialStars = styled.div`
    display: flex;
    justify - content: center;
    margin - bottom: 1rem;
`;

const StyledTestimonialContent = styled.p`
    font - size: 1.2rem;
    font - style: italic;
    text - align: center;
    margin - bottom: 1rem;
`;

const StyledTestimonialMeta = styled.p`
    font - size: 0.9rem;
    text - align: center;
    color: ${(props) =>
      props.theme.textColor === "white" ? "gray - 400" : "gray - 600"};
`;

const TestimonialCard = ({ testimonial, theme }) => {
  return (
    <StyledTestimonialCard theme={theme}>
      <StyledTestimonialStars>
        {renderStars(testimonial.rating)}
      </StyledTestimonialStars>
      <StyledTestimonialContent>
        "{testimonial.content}"
      </StyledTestimonialContent>
      <StyledTestimonialMeta>
        {testimonial.name} - {testimonial.role}
      </StyledTestimonialMeta>
    </StyledTestimonialCard>
  );
};

export default TestimonialCard;