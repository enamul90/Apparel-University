import React from 'react';
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

const ContactInfo = () => {
    return (
        <div className="my-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Email */}
          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-[#E6E8F9] rounded-full flex items-center justify-center">
                <MdMarkEmailUnread className='text-xl text-[#15588D]' />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">Email</h3>
            <p className="mt-2 text-gray-600">Our friendly team is here to help.</p>
            <p className="mt-1 text-[#5F6DC2] font-medium">hi@untitledui.com</p>
          </div>
          {/* Office */}
          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-[#E6E8F9] rounded-full flex items-center justify-center">
            <IoLocation className='text-xl text-[#15588D]' />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">Office</h3>
            <p className="mt-2 text-gray-600">Come say hello at our office HQ.</p>
            <p className="mt-1 text-[#5F6DC2] font-medium">100 Smith Street Collingwood VIC 3066 AU</p>
          </div>
          {/* Phone */}
          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-[#E6E8F9] rounded-full flex items-center justify-center">
                <IoCall className='text-xl text-[#15588D]' />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">Phone</h3>
            <p className="mt-2 text-gray-600">Mon-Fri from 8am to 5pm.</p>
            <p className="mt-1 text-[#5F6DC2] font-medium">+1 (555) 000-0000</p>
          </div>
        </div>
      </div>
    );
};

export default ContactInfo;