import React from 'react';
import HeroSection from "./Hero-Section.jsx";
import StatsSection from "./StateSection.jsx";
import CourseList from "./CourseList.jsx";
import TestimonialSection from "./TestimonialSection.jsx";
import AboutSection from "./AboutSection.jsx";
import EventAndNewsletter from "./EventAndNewsletter.jsx";
import AllBlogPosts from "./AllBlogPosts.jsx";
import WorkedWithSection from "./WorkedWithSection.jsx";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <StatsSection />
            <CourseList />
            <TestimonialSection />
            <AboutSection />
            <EventAndNewsletter />
            <WorkedWithSection />
            <AllBlogPosts />
        </div>
    );
};

export default Home;