import React from 'react';
import AppLayout from "../component/Layout/AppLayout.jsx";
import PageHeader from './../component/Layout/PageHeader';
import Packages from '../component/Packages/Packages.jsx';


const PackagesPage = () => {
    return (
        <AppLayout>
            <PageHeader img={"../../public/images/package.png"} text={"Packages"} />

            <div 
            className='my-[60px] container mx-auto '
            >
                <Packages />
            </div>
        </AppLayout>
    );
};

export default PackagesPage;