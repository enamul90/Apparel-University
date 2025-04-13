import React, { useEffect, useState } from 'react';
import TopMenu from './top-menu.jsx';
import AppNavbar from './AppNavbar.jsx';
import AppFooter from './AppFooter.jsx';

const AppLayout = ({ children }) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 150);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            {/* Header Section */}
            <header>
                <TopMenu />
                <div
                    className={`${isSticky ? 'fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all' +
                        ' duration-500' : ''}`}
                >
                    <AppNavbar />
                </div>
            </header>

            {/* Main Content */}
            <main>
                {children}
            </main>

            {/* Footer Section */}
            <footer>
                <AppFooter />
            </footer>
        </div>
    );
};

export default AppLayout;
