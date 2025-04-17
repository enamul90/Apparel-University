import React from 'react';
import AppLayout from "../component/Layout/AppLayout.jsx";
import PageHeader from './../component/Layout/PageHeader';
import PhotoGallery from '../component/Gallery/PhotoGallery.jsx';

const GalleryPage = () => {
    return (
        <AppLayout>
            <PageHeader img={"https://res.cloudinary.com/dwcilnanz/image/upload/v1733841749/samples/balloons.jpg"} text={"Gallery"} />

            <div className='my-[60px] p-4 bg-[#F3F7F9] border border-[#E9E9E9] rounded-[4px] container mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='lg:col-span-3 col-span-1'> 
                    <PhotoGallery /> 
                </div>

                <div className='col-span-1 lg:row-span-2'> 
                    <PhotoGallery /> 
                </div>

                <div className='col-span-1 '> 
                    <PhotoGallery /> 
                </div>

                <div className='col-span-1 '> 
                    <PhotoGallery /> 
                </div>

                <div className='col-span-1 '> 
                    <PhotoGallery /> 
                </div>

                <div className='col-span-1 '> 
                    <PhotoGallery /> 
                </div>

                <div className='col-span-2 '> 
                    <PhotoGallery /> 
                </div>

                <div className='col-span-1 '> 
                    <PhotoGallery /> 
                </div>

                <div className='col-span-1 '> 
                    <PhotoGallery /> 
                </div>

                <div className='col-span-1 '> 
                    <PhotoGallery /> 
                </div>

                <div className='col-span-1 '> 
                    <PhotoGallery /> 
                </div>

            </div>
            
        </AppLayout>
    );
};

export default GalleryPage;