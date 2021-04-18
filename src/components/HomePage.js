import React from 'react';
import Title from './Title';
import ProjectSection from './ProjectSection';
import About from './About';
import SkillsSection from './SkillsSection';
import BlogSection from './BlogSection';
import RecommendationSection from './RecommendationSection';



function HomePage() {
    return (
        <div>
            {/* <Title /> */}
            {/* <RecommendationSection /> */}
            <ProjectSection />
            <About />
            <SkillsSection />
            <BlogSection />
        </div>
    )
}

export default HomePage;