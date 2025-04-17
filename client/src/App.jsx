import React from 'react';
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
<<<<<<< HEAD
import ProfilePage from './page/ProfilePage.jsx';
=======
import BlogDetailsPage from "./page/BlogDetails-Page.jsx";
>>>>>>> fb7efcec061356f0279467f9ffff7c45bdd8b18f

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<HomePage />}/>
                    <Route path={"/course"} element={<CoursePage />}/>
                    <Route path={"/blog"} element={<BlogPage />}/>
<<<<<<< HEAD
                    <Route path={"/overview/:tab"} element={<OverviewPage />}/>
                    <Route path={"/officers/:tab"} element={<OfficersPage />}/>
=======
                    <Route path={"/blog-details"} element={<BlogDetailsPage />}/>
                    <Route path={"/overview"} element={<OverviewPage />}/>
                    <Route path={"/officers"} element={<OfficersPage />}/>
>>>>>>> fb7efcec061356f0279467f9ffff7c45bdd8b18f
                    <Route path={"/gallery"} element={<GalleryPage />}/>
                    <Route path={"/packages"} element={<PackagesPage />}/>
                    <Route path={"/about"} element={<AboutPage />}/>
                    <Route path={"/contact"} element={<ContactPage />}/>
                    <Route path={"/contact"} element={<ContactPage />}/>
                    <Route path={"/profile/:tab"} element={<ProfilePage />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;