import React from 'react';
import AppLayout from '../component/Layout/AppLayout';
import ProfileHeader from '../component/ProfilePage/ProfileHeader';

const ProfilePage = () => {
    return (
        <AppLayout>
           <div className='container mx-auto'>
             <ProfileHeader  />
             
           </div>

        </AppLayout>
    );
};

export default ProfilePage;