import React, { useState } from "react";
import {
  StyledBlogsSection,
  StyledBlogsTitle,
  StyledBlogGrid,
} from "./BlogsSection.styled";
import BlogCard from "./BlogCard";

const BlogsSection = ({ isDarkMode, blogs, theme }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = blogs.filter((blog) => {
    if (selectedCategory === "All") return true;
    // Here you can implement more sophisticated category filtering logic
    return blog.title.includes(selectedCategory);
  });

  return (
    <StyledBlogsSection theme={theme}>
      <StyledBlogsTitle>Our Blogs</StyledBlogsTitle>
      {/* You can add category selection buttons here in the future */}
      <StyledBlogGrid>
        {filteredBlogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} theme={theme} />
        ))}
      </StyledBlogGrid>
    </StyledBlogsSection>
  );
};

export default BlogsSection;
