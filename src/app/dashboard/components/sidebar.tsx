"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Logo from '@/assets/logo.png';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import SidebarImage from '@/assets/SidebarImage-.png';
import AppointmentInfo from '../appointments/components/AppointmentInfo';
import { AiOutlineBars } from "react-icons/ai";

const Sidebar = () => {
    const [activeSidebarItem, setActiveSidebarItem] = useState<string>("Dashboard");
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number>(0);

    const sidebarRef = useRef<HTMLDivElement>(null);

    const handleSidebarItemClick = (itemName: string) => {
        setActiveSidebarItem(itemName);
    };


    const handleClickOutside = (e: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        console.log(isSidebarOpen)

        if (isSidebarOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isSidebarOpen]);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', updateWindowWidth);

        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };

    }, []);

    return (
        isSidebarOpen || windowWidth >1281 ?
            <div ref={sidebarRef} className='h-full w-72 lg:fixed xl:static min-w-72 xl:w-80 xl:min-w-80 top-0 left-0 z-50 bg-white border-r-2'>
                <div className='w-full h-full flex flex-col relative'>
                    <div className='w-full flex justify-center items-center mt-6'>
                        <Image src={Logo} width={150} height={150} alt='Nephara' className='w-48 h-auto' />
                    </div>
                    <ul className='w-full flex items-center justify-center flex-col mt-10'>
                        <li
                            className={`w-[90%] cursor-pointer text-lg font-semibold py-4 px-2 flex items-center mb-2 rounded-[10px] 
                        ${activeSidebarItem === "Dashboard" ? "bg-[#7650e0] text-white" : "text-gray-600 hover:bg-[#7650e0] hover:text-white"}`}
                            onClick={() => handleSidebarItemClick("Dashboard")}
                        >
                            <span className='mr-4 ml-2 text-3xl'><MdOutlineDashboardCustomize /></span>
                            Dashboard
                        </li>
                        <li
                            className={`w-[90%] cursor-pointer text-lg font-semibold py-4 px-2 flex items-center mb-2 rounded-[10px] 
                        ${activeSidebarItem === "Appointments" ? "bg-[#7650e0] text-white" : "text-gray-600 hover:bg-[#7650e0] hover:text-white"}`}
                            onClick={() => handleSidebarItemClick("Appointments")}
                        >
                            <span className='mr-4 ml-2 text-3xl'><LuCalendarDays /></span>
                            Appointments
                        </li>
                        <li
                            className={`w-[90%] cursor-pointer text-lg font-semibold py-4 px-2 flex items-center mb-2 rounded-[10px] 
                        ${activeSidebarItem === "Settings" ? "bg-[#7650e0] text-white" : "text-gray-600 hover:bg-[#7650e0] hover:text-white"}`}
                            onClick={() => handleSidebarItemClick("Settings")}
                        >
                            <span className='mr-4 ml-2 text-3xl'><IoSettingsOutline /></span>
                            Settings
                        </li>
                    </ul>
                    <div className='relative flex w-full justify-center items-center flex-col mt-6'>
                        <Image src={SidebarImage} width={200} height={200} alt='Sidebar Image' className='z-20' />
                        <div className='bg-[#f4f0fd] w-[85%] xl:w-[75%] h-48 mt-[-18px] z-10 rounded-[8px] flex flex-col items-center justify-center'>
                            <p className='font-medium text-2xl'>Book Appointment</p>
                            <p className='w-[95%] flex flex-wrap items-center justify-center text-center text-gray-600 mt-2'>
                                Start your skincare with a quick appointment.
                            </p>
                            <button className="bg-[#8f67e2] hover:bg-[#9c75e9] py-2 px-7 font-semibold text-white rounded-[8px] mt-5">
                                Book now
                            </button>
                        </div>
                    </div>
                    <div className='bottom-0 absolute flex items-center justify-center w-full'>
                        <p
                            className={`w-[90%] cursor-pointer text-lg font-semibold py-4 px-2 flex items-center mb-2 rounded-[10px] text-gray-600 hover:bg-[#7650e0] hover:text-white`}
                        >
                            <span className='mr-4 ml-2 text-2xl'><SlLogout /></span>
                            Logout
                        </p>
                    </div>
                </div>
            </div>
            :
            <p className='absolute top-8 left-4 text-white text-3xl cursor-pointer' onClick={() => setIsSidebarOpen(true)}><AiOutlineBars /> </p>
    );
};

export default Sidebar;
