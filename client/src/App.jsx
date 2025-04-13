import React from 'react';
import TopMenu from "./component/Layout/top-menu.jsx";
import AppNavbar from "./component/Layout/AppNavbar.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./page/Home-Page.jsx";
import CoursePage from "./page/Course-Page.jsx";
import BlogPage from "./page/Blog-Page.jsx";
import OverviewPage from "./page/Overview-Page.jsx";
import OfficersPage from "./page/Officers-Page.jsx";
import GalleryPage from "./page/Gallery-Page.jsx";
import PackagesPage from "./page/Packages-Page.jsx";
import AboutPage from "./page/About-Page.jsx";
import ContactPage from "./page/Contact-Page.jsx";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<HomePage />}/>
                    <Route path={"/course"} element={<CoursePage />}/>
                    <Route path={"/blog"} element={<BlogPage />}/>
                    <Route path={"/overview"} element={<OverviewPage />}/>
                    <Route path={"/officers"} element={<OfficersPage />}/>
                    <Route path={"/gallery"} element={<GalleryPage />}/>
                    <Route path={"/packages"} element={<PackagesPage />}/>
                    <Route path={"/about"} element={<AboutPage />}/>
                    <Route path={"/contact"} element={<ContactPage />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;