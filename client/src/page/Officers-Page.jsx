import React from 'react';
import AppLayout from "../component/Layout/AppLayout.jsx";
import PageHeader from "../component/Layout/PageHeader.jsx";
import SidebarMenu from '../component/Tab/SideTab.jsx';
import HighRankingOfficer from '../component/Officers/HighRankingOfficer.jsx';
import LowLevelOfficer from '../component/Officers/LowLevelOfficer.jsx';

const OfficersPage = () => {
    const tabs = ['Vice Chancellor', 'Category 2', 'Teacher', 'Category 4', 'Category 5', 'Category 6', 'Category 7'];

    return (
        <AppLayout>
            <PageHeader 
            text="Offers" 
            img="https://res.cloudinary.com/dwcilnanz/image/upload/v1733841749/samples/smile.jpg" 
            />

             <div 
             className='my-[60px] container mx-auto lg:grid lg:grid-cols-4 gap-4'
             >
               <div className='col-span-1'>
                  <SidebarMenu tabs={tabs} path={"officers"} />
               </div>
               <div className='col-span-3 mt-4 lg:mt-0'>
                 <HighRankingOfficer />
                 <LowLevelOfficer />
               </div>
             </div>
            
        </AppLayout>
    );
};

export default OfficersPage;