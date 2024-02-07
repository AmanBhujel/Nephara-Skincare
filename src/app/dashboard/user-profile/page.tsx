import React from 'react';
import Sidebar from '../components/sidebar';
import Image from 'next/image';
import Profile from '@/assets/Emma.png'
const Page = () => {
    return (
        <main className='w-full h-screen flex  items-center bg-[#f6f8fc] relative'>
            <Sidebar />
            <div className='w-full h-full flex justify-center'>
                <div className='w-[90%] min-w-[70rem] min-h-[50rem] h-[80%] border flex flex-col items-center mt-4'>
                    <p className='text-5xl font-medium tracking-wide mt-8'>Account Info</p>
                    <div className='flex items-center justify-start mt-8 w-[80%] '>
                        <Image src={Profile} alt='profile-image' width={200} height={200} className='w-32 h-32 rounded-full ' />
                        <div className='ml-12'>
                            <p className='text-3xl font-bold'>Aman Bhujel</p>
                            <p className='text-[#505050]'>Lalitpur,Nepal</p>
                        </div>
                    </div>
                    <div className="w-[80%] grid grid-cols-2 gap-x-16 gap-y-8 mt-8">
                        <div className='flex flex-col'>
                            <label className='font-semibold mt-2 sm:mt-4 mb-2'>Full Name:</label>
                            <input
                                type='text'
                                // placeholder='Enter your Name...'
                                className='w-[100%] sm:w-[95%] lg:w-[90%] h-14 border rounded-[6px] pl-4  text-lg border-gray-500 px-3 outline-none mt-2 sm:mt-0 bg-[#ebebeb48]'
                                value={"Aman Bhujel"}
                                readOnly
                            />
                        </div> <div className='flex flex-col'>
                            <label className='font-semibold mt-2 sm:mt-4 mb-2'>Email:</label>
                            <input
                                type='text'
                                // placeholder='Enter your Name...'
                                className='w-[100%] sm:w-[95%] lg:w-[90%] h-14 border rounded-[6px] pl-4  text-lg border-gray-500 px-3 outline-none mt-2 sm:mt-0 bg-[#ebebeb48]'
                                value={"bhujelaman20@gmail.com"}
                                readOnly
                            />
                        </div> <div className='flex flex-col'>
                            <label className='font-semibold mt-2 sm:mt-4 mb-2'>City:</label>
                            <input
                                type='text'
                                // placeholder='Enter your Name...'
                                className='w-[100%] sm:w-[95%] lg:w-[90%] h-14 border rounded-[6px] pl-4  text-lg border-gray-500 px-3 outline-none mt-2 sm:mt-0 bg-[#ebebeb48]'
                                value={"Lalitpur"}
                                readOnly
                            />
                        </div> <div className='flex flex-col'>
                            <label className='font-semibold mt-2 sm:mt-4 mb-2'>Country:</label>
                            <input
                                type='text'
                                // placeholder='Enter your Name...'
                                className='w-[100%] sm:w-[95%] lg:w-[90%] h-14 border rounded-[6px] pl-4  text-lg border-gray-500 px-3 outline-none mt-2 sm:mt-0 bg-[#ebebeb48]'
                                value={"Nepal"}
                                readOnly
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-semibold mt-2 sm:mt-4 mb-2'>Gender:</label>
                            <input
                                type='text'
                                // placeholder='Enter your Name...'
                                className='w-[100%] sm:w-[95%] lg:w-[90%] h-14 border rounded-[6px] pl-4  text-lg border-gray-500 px-3 outline-none mt-2 sm:mt-0 bg-[#ebebeb48]'
                                value={"Male"}
                                readOnly
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-semibold mt-2 sm:mt-4 mb-2'>Age:</label>
                            <input
                                type='text'
                                // placeholder='Enter your Name...'
                                className='w-[100%] sm:w-[95%] lg:w-[90%] h-14 border rounded-[6px] pl-4  text-lg  border-gray-500 px-3 outline-none mt-2 sm:mt-0 bg-[#ebebeb48]'
                                value={"19"}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Page;


