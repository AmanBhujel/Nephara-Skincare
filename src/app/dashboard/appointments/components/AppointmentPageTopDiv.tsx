'use client'
import Profile from '@/assets/Emma.png';
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { useUserStore } from '@/stores/userStore';
import Image from 'next/image';
const AppointmentPageTopDiv = () => {
    const userInfo = useUserStore((state) => state.userInfo)

    return (
        <div className={`bg-[#743bfb] w-full min-h-40 h-40 hidden  lg:flex justify-between items-center `}>
            <div className='flex text-white ml-[8%] items-center justify-center'>
                <Image src={Profile} width={300} height={300} alt='Profile Image' className='w-32 h-32 object-cover rounded-[7px]' />
                <div className='ml-5 text-white'>
                    <p className='text-2xl font-bold tracking-wide'>{userInfo[0]?.name || "Should be name"}</p>
                    <p className='text-sm tracking-wide mt-2 flex items-center justify-center'><span className='text-2xl mr-1'><CiLocationOn /></span> Melbourne, Australia</p>
                </div>
            </div>
            <div className='mr-[8%] text-white flex flex-col items-center justify-center'>
                <p className='mb-1 tracking-wide font-medium flex items-center justify-center'>
                    APPOINTMENT<span className='ml-2 text-3xl'><RiArrowDropDownLine /></span>
                </p>
                <button className="text-[#743bfb] bg-white hover:bg-[#dfdede] py-2 px-6 md:py-2 md:px-10 font-semibold text-lg rounded-[8px] ">
                    Book now
                </button>
                <p className='font-medium text-lg flex justify-center items-center mt-2'>$50 |<span className='text-sm ml-2'> per appointment </span></p>
            </div>
        </div>
    )
}

export default AppointmentPageTopDiv;