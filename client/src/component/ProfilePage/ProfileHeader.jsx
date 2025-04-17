import React from 'react';
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const ProfileHeader = () => {
    const navigate = useNavigate();
    const {tab} = useParams()


    const switchTab = (e)=>{
        navigate(`/profile/${e}`)
    }


    return (
        <>
            <div  className='p-3 bg-[#F3F7F9] mt-[30px] font-semibold flex justify-between items-center'>
                <div className='flex items-center gap-6'>
                    <button className='px-3 py-2 bg-[#15588D] rounded-lg flex text-white items-center gap-2  cursor-pointer text-2xl'>
                        <MdOutlineKeyboardBackspace className='font-black text-3xl' />
                        back
                    </button>
                    <h3 className='font-semibold text-4xl text-[#15588D]'>Profile</h3>
                </div>

                <button className='px-3 py-2 flex items-center gap-2 text-[#262626] cursor-pointer text-xl '>
                        Sign Out
                        <LiaSignOutAltSolid className='font-black text-3xl mt-1' />
                </button>
            </div>
            <div className='p-3 bg-[#FFF9F2] mb-[30px]'>
                <button className={tab === "info" ? 'text-lg font-semibold cursor-pointer text-[#262626]' :'text-lg font-normal  cursor-pointer text-[#262626]' }
                onClick={()=>switchTab("info")}
                >Profile</button>
                <button
                    onClick={()=>switchTab("password")}
                    className={tab === "password" ?  'mx-3 text-lg font-semibold cursor-pointer text-[#262626]' :'text-lg mx-3 font-normal  cursor-pointer text-[#262626]' }
                 >Password</button>
            </div>
        </>
    );
};

export default ProfileHeader;