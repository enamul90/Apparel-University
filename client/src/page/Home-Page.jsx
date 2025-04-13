import React from 'react';
import Home from "../component/home/Home.jsx";
import AppLayout from "../component/Layout/AppLayout.jsx";

const HomePage = () => {
    return (
        <>
            <AppLayout>
                <Home />
            </AppLayout>
        </>
    );
};

export default HomePage;