import React from 'react';
import AppLayout from "../component/Layout/AppLayout.jsx";
import PageHeader from '../component/about/PageHeader.jsx';
import AboutContent from '../component/about/AboutContent.jsx';
import AboutMap from '../component/about/AboutMap.jsx';

const AboutPage = () => {
    return (
        <AppLayout>
            <PageHeader img={"../../public/images/about.png"} text={"About"} />
            <AboutContent />
            <div className='py-[60px]'></div>
            <AboutMap />
        </AppLayout >
    );
};

export default AboutPage;