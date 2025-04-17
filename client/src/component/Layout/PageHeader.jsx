import React from 'react';

const PageHeader = ({img, text}) => {
    return (
        <div className="w-full h-[200px] relative overflow-hidden  ">
            <img src={img} alt="header image"
                 className="min-h-full min-w-full absolute top-1/2 -translate-y-1/2  z-[-2]"/>
            <div className=" absolute top-0 left-0 h-full w-full bg-[#15588D] opacity-40 z-[-1]"></div>

            <h3 className=" text-4xl  text-white font-bold absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 uppercase z-[0] ">{text}</h3>
        </div>
    );
};

export default PageHeader;