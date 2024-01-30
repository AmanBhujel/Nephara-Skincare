import Image from 'next/image';
import React, { useState } from 'react';
import Profile from '@/assets/Emma.png';
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { IoArrowForward } from "react-icons/io5";
import { IoIosCalendar } from "react-icons/io";
import Alphabet from '@/assets/alphabet.png';
import BackgroundAppointment from '@/assets/DoctorConsulting.png'
// import al
const AppointmentInfo = () => {
    const [filterAppointments, setFilterAppointments] = useState<string>("All");

    const handleFilterClick = (filter: string) => {
        setFilterAppointments(filter);
        // Perform filtering logic based on the selected filter (you can add logic here)
    };

    return (
        <div className='w-full h-full flex flex-col'>
            <div className='bg-[#743bfb] w-full min-h-40 h-40 hidden lg:flex justify-between items-center'>
                <div className='flex text-white ml-[8%] items-center justify-center'>
                    <Image src={Profile} width={300} height={300} alt='Profile Image' className='w-32 h-32 object-cover rounded-[7px]' />
                    <div className='ml-5 text-white'>
                        <p className='text-2xl font-bold tracking-wide'>Emma User</p>
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
            <div className='h-auto md:px-8 lg:px-8 lg:py-8 xl:px-8 xl:py-4 2xl:px-16 2xl:py-6 '>
                <p className='md:text-3xl mt-6 lg:text-2xl font-semibold tracking-wide flex items-center justify-center lg:block'>Appointments</p> 
                <ul className='flex items-center justify-center lg:justify-start gap-x-8 lg:gap-x-16 mt-4 text-base '>
                    {/* filters */}
                    {["Upcoming", "Past", "All",].map((filter) => (
                        <li
                            key={filter}
                            className={`cursor-pointer ${filterAppointments === filter ? "text-[#743bfb] underline decoration-[3px] underline-offset-8 " : ""}`}
                            onClick={() => handleFilterClick(filter)}
                        >
                            {filter}
                        </li>
                    ))}
                </ul>
                {/* ---Appointments Infos------------ */}
                <div className='w-full h-auto mt-6 flex items-center justify-center lg:items-start lg:justify-start gap-x-6'>
                    {/* --------Lists-------- */}
                    <div className=' w-[90%] lg:w-96 h-auto gap-y-2 flex flex-col '>
                        <div className='w-full h-40 bg-white border border-[#743bfb] rounded-[8px]'>
                            {/* ---card Top-------- */}
                            <div className='flex items-center justify-between mt-2 '>
                                <p className='bg-[#f2f2f9] px-3 py-1 rounded-[10px] text-sm ml-3'>Upcoming</p>
                                <button className='outline-none border-none text-xl mr-3'><IoArrowForward /></button>
                            </div>
                            {/* ---card body-------- */}
                            <div className='flex items-center py-2 h-auto'>
                                <Image src={Alphabet} width={200} height={200} alt='Appointment Image' className='w-[70px] h-[70px] rounded-[3px] ml-3 mr-3' />
                                <div className='flex flex-col items-start h-[60px]'>
                                    <p className='text-lg font-semibold'>Appointment</p>
                                    <p className='text-sm text-gray-500'> Sarosta Online Appointment Program</p>
                                </div>
                            </div>
                            {/* ---card bottom-------- */}
                            <div className='border-t-[1px] flex justify-between h-8'>
                                <p className='flex items-center ml-3 text-gray-500 text-sm font-medium '><span className='text-lg text-gray-400 mr-1'><CiLocationOn /></span>Virtual</p>
                                <p className='flex items-center mr-3 text-sm font-medium '><span className='text-lg  mr-1'><IoIosCalendar /></span>Jan-18</p>

                            </div>
                        </div>
                        <div className='w-full h-40 bg-white border border-[#743bfb] rounded-[8px]'>
                            {/* ---card Top-------- */}
                            <div className='flex items-center justify-between mt-2 '>
                                <p className='bg-[#f2f2f9] px-3 py-1 rounded-[10px] text-sm ml-3'>Upcoming</p>
                                <button className='outline-none border-none text-xl mr-3'><IoArrowForward /></button>
                            </div>
                            {/* ---card body-------- */}
                            <div className='flex items-center py-2 h-auto'>
                                <Image src={Alphabet} width={200} height={200} alt='Appointment Image' className='w-[70px] h-[70px] rounded-[3px] ml-3 mr-3' />
                                <div className='flex flex-col items-start h-[60px]'>
                                    <p className='text-lg font-semibold'>Appointment</p>
                                    <p className='text-sm text-gray-500'> Sarosta Online Appointment Program</p>
                                </div>
                            </div>
                            {/* ---card bottom-------- */}
                            <div className='border-t-[1px] flex justify-between h-8'>
                                <p className='flex items-center ml-3 text-gray-500 text-sm font-medium '><span className='text-lg text-gray-400 mr-1'><CiLocationOn /></span>Virtual</p>
                                <p className='flex items-center mr-3 text-sm font-medium '><span className='text-lg  mr-1'><IoIosCalendar /></span>Jan-18</p>

                            </div>
                        </div>
                        <div className='w-full h-40 bg-white border border-[#743bfb] rounded-[8px]'>
                            {/* ---card Top-------- */}
                            <div className='flex items-center justify-between mt-2 '>
                                <p className='bg-[#f2f2f9] px-3 py-1 rounded-[10px] text-sm ml-3'>Upcoming</p>
                                <button className='outline-none border-none text-xl mr-3'><IoArrowForward /></button>
                            </div>
                            {/* ---card body-------- */}
                            <div className='flex items-center py-2 h-auto'>
                                <Image src={Alphabet} width={200} height={200} alt='Appointment Image' className='w-[70px] h-[70px] rounded-[3px] ml-3 mr-3' />
                                <div className='flex flex-col items-start h-[60px]'>
                                    <p className='text-lg font-semibold'>Appointment</p>
                                    <p className='text-sm text-gray-500'> Sarosta Online Appointment Program</p>
                                </div>
                            </div>
                            {/* ---card bottom-------- */}
                            <div className='border-t-[1px] flex justify-between h-8'>
                                <p className='flex items-center ml-3 text-gray-500 text-sm font-medium '><span className='text-lg text-gray-400 mr-1'><CiLocationOn /></span>Virtual</p>
                                <p className='flex items-center mr-3 text-sm font-medium '><span className='text-lg  mr-1'><IoIosCalendar /></span>Jan-18</p>

                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[60%]  xl:w-[60%] 2xl:w-[70%] hidden lg:flex lg:h-[600px] xl:h-[650px] overflow-auto rounded-[8px]  flex-col border-2'>
                        <div className='w-full h-40 min-h-40 rounded-[8px] relative' style={{ backgroundImage: `url(${BackgroundAppointment.src})`, backgroundSize: 'cover', backgroundPosition: 'center 15%' }}>
                            <div className='absolute w-full h-full bg-gradient-to-b from-[#743bfb] via-[#743bfb] to-[#8e75c9] opacity-70 z-10'></div>
                            <div className='z-20 absolute p-6 flex w-full justify-between h-full items-center'>
                                <div className=' flex flex-col'>
                                    <p className='bg-[#f2f2f9cb] px-3 py-1 w-min text-[#743bfb] rounded-[10px] font-semibold mb-2'>Upcoming</p>
                                    <p className='text-white font-bold text-3xl'>Appointment</p>
                                    <p className='text-white text-lg font-medium mt-1'>Sarosta Online Appointment Program</p>
                                </div>
                                <div>
                                    <p className='bg-[#ededf5e0] px-3 py-1 w-min text-[#743bfb] rounded-[10px] font-semibold mb-2'>Jan-18</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-full px-2'>
                            <p className='bg-[#f1f1ff] mt-4 py-1 text-lg font-medium text-[#a3a1a9] px-4'>Appointment Info</p>
                            <div className='px-4 '>
                                <p className='text-[#807c83] mt-2 '>Appointment Id</p>
                                <p className='text-lg font-semibold mt-1 mb-1'>3792739dija901</p>
                                <p className='text-[#807c83] mt-2 '>See Report</p>
                                <p className='text-lg font-semibold mt-1 mb-1'>Report Id</p>
                                <p className='text-[#807c83] mt-2 '>Appointment Date</p>
                                <p className='text-lg font-semibold mt-1 mb-1'>18th Jan, 2024</p>
                            </div>
                            <p className='bg-[#f1f1ff] mt-4 py-1 text-lg font-medium text-[#a3a1a9] px-4'>Time Info</p>
                            <div className='px-4 '>
                                <p className='text-[#807c83] mt-2 '>Timezone</p>
                                <p className='text-lg font-semibold mt-1 mb-1'> (GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</p>
                                <p className='text-[#807c83] mt-2 '>Time</p>
                                <p className='text-lg font-semibold mt-1 mb-1'>10 am</p>
                                <p className='text-[#807c83] mt-2 '>Booked Date</p>
                                <p className='text-lg font-semibold mt-1 mb-1'>2nd Jan,2024</p>
                            </div>
                            <p className='bg-[#f1f1ff] mt-4 py-1 text-lg font-medium text-[#a3a1a9] px-4'>Time Info</p>
                            <div className='px-4 '>
                                <p className='text-[#807c83] mt-2 '>Timezone</p>
                                <p className='text-lg font-semibold mt-1 mb-1'> (GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</p>
                                <p className='text-[#807c83] mt-2 '>Time</p>
                                <p className='text-lg font-semibold mt-1 mb-1'>10 am</p>
                                <p className='text-[#807c83] mt-2 '>Booked Date</p>
                                <p className='text-lg font-semibold mt-1 mb-1'>2nd Jan,2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentInfo;