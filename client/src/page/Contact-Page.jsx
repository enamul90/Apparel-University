import React from 'react';
import AppLayout from "../component/Layout/AppLayout.jsx";
import PageHeader from './../component/Layout/PageHeader';
import ContactMap from '../component/Contact/ContactMap.jsx';
import ContactFrom from '../component/Contact/ContactFrom.jsx';
import ContactInfo from '../component/Contact/ContactInfo.jsx';

const ContactPage = () => {
    return (
        <AppLayout>
            <PageHeader img={"../../public/images/contact.png"} text={"Contact"}  />

            <div className='bg-[#F3F7F9] py-2 lg:py-10'>
                <div className='lg:my-[60px] container mx-auto  lg:grid grid-cols-5 gap-5'>
                    <div className="lg:col-span-2">
                        <ContactMap />
                    </div>

                    <div className="lg:col-span-3">
                        <ContactFrom />
                    </div>
                </div>
            </div>

            <ContactInfo />

        </AppLayout>
    );
};

export default ContactPage;