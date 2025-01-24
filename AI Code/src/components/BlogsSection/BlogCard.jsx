import React from "react";
import styled from "styled-components";

export const StyledBlogCard = styled.a`
  display: block;
  background-color: ${(props) => props.theme.cardBackgroundColor};
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-decoration: none;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
`;

export const StyledBlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const StyledBlogContent = styled.div`
  padding: 1.5rem;
`;

export const StyledBlogTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 0.5rem;
`;

export const StyledBlogMeta = styled.p`
  font-size: 0.9rem;
  color: ${(props) =>
    props.theme.textColor === "white" ? "gray-400" : "gray-600"};
  margin-bottom: 1rem;
`;

export const StyledBlogDescription = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.textColor};
`;

const BlogCard = ({ blog, theme }) => {
  return (
    <StyledBlogCard href={blog.link} theme={theme}>
      <StyledBlogImage src={blog.image} alt={blog.title} loading="lazy" />
      <StyledBlogContent theme={theme}>
        <StyledBlogTitle>{blog.title}</StyledBlogTitle>
        <StyledBlogMeta>
          By Jane Smith | Published on October 5, 2023 | 3 min read
        </StyledBlogMeta>
        <StyledBlogDescription>{blog.description}</StyledBlogDescription>
      </StyledBlogContent>
    </StyledBlogCard>
  );
};

export default BlogCard;
