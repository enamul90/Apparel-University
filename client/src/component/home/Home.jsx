import React from 'react';
import HeroSection from "./Hero-Section.jsx";
import StatsSection from "./StateSection.jsx";
import CourseList from "./CourseList.jsx";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <StatsSection />
            <CourseList />
        </div>
    );
};

export default Home;