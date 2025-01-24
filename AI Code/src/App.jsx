// App.jsx
import React, { Suspense, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import AboutSection from "./components/AboutSection/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import { logPageView } from "./utils/analytics";

// Lazy load the BlogsSection
const BlogsSection = React.lazy(() =>
  import("./components/BlogsSection/BlogsSection")
);

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedNav, setSelectedNav] = useState("services");
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [error, setError] = useState(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setServices(data.services);
        setTestimonials(data.testimonials);
        setBlogs(data.blogs);
        setTeamMembers(data.teamMembers);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    logPageView();
  }, []);

  const theme = isDarkMode ? darkTheme : lightTheme;

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Helmet>
        <title>ContentKosh - Words That Work</title>
        <meta
          name="description"
          content="ContentKosh offers high - quality content services tailored to your needs, including academic and non - academic content, marketing strategies, and more."
        />
        <meta
          name="keywords"
          content="content services, academic content, non - academic content, content marketing, content strategy"
        />
      </Helmet>
      <GlobalStyles theme={theme} />
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        selectedNav={selectedNav}
        setSelectedNav={setSelectedNav}
        scrollToTop={scrollToTop}
        theme={theme}
      />
      <HeroSection theme={theme} />
      <ServicesSection
        isDarkMode={isDarkMode}
        services={services}
        theme={theme}
      />
      <AboutSection
        isDarkMode={isDarkMode}
        teamMembers={teamMembers}
        theme={theme}
      />
      <TestimonialsSection
        isDarkMode={isDarkMode}
        testimonials={testimonials}
        theme={theme}
      />
      <ContactSection isDarkMode={isDarkMode} theme={theme} />
      <Suspense fallback={<div>Loading blogs...</div>}>
        <BlogsSection isDarkMode={isDarkMode} blogs={blogs} theme={theme} />
      </Suspense>
      <Footer scrollToTop={scrollToTop} theme={theme} />
    </div>
  );
};

export default App;
