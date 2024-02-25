import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import BlogContent from './affordable-skin-appointment/components/BlogContent';
import BlogNavigationBox from './affordable-skin-appointment/components/BlogNavigationBox';

const page = () => {
    return (
        <div
        className="flex w-full justify-center items-center bg-[#f9fdff">
        <div className={`flex flex-col justify-center items-center w-[95%] lg:w-[63rem]  xl:w-[79rem] 2xl:w-[90rem] h-auto relative`}>
            <div className='absolute top-4 left-4 flex items-center justify-center font-semibold cursor-pointer'>
                <i className='text-lg sm:text-xl sm:mr-2'><IoIosArrowBack /> </i>
                <p className='text-base sm:text-lg'>Back</p>
            </div>
            <h1 className='bg-[#f6f6f6] mt-10 text-[#868585] px-3 rounded-[12px]'>Blogs Page - Online Appointment</h1>
            <p className='mt-4 text-2xl md:text-3xl font-medium w-full sm:w-[85%] md::w-[75%] xl:w-[50%] flex flex-wrap text-center '>How do we help you schedule an appointment with specialist on just 30$?</p>
            {/* <Image src={BlogImage} width={1200} height={700} alt='Skin-Appointment-Blog' className='w-full sm:w-[90%] border mt-4 rounded-[12px] h-[20rem] md:h-[30rem] object-cover' /> */}
            <div className='w-full h-auto bg-red flex flex-col lg:flex-row items-center lg:items-start mt-10 mb-10 justify-center'>
                <BlogNavigationBox />
                <BlogContent />
            </div>
        </div>
    </div>    )
};

export default page