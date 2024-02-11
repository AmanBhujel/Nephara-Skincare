"use client"
import React, { useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import Sidebar from '@/app/doctor/dashboard/appointments/components/sidebar';
import { Appointments } from '@/data/AppointmentData';
import AppointmentContainer from './components/AppointmentContainer';
import { useDashboardStore } from '@/stores/DashboardStore';
import Profile from '@/assets/beautiful-nurse.png'
import { useLogoutStore } from '@/stores/LogoutStore';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useUserStore } from '@/stores/userStore';
import Image from 'next/image';

interface PageProps {
    params: {
        id: string;
    };
}

const Page: NextPage<PageProps> = ({ params }) => {
    const appointment = Appointments.find(appointment => appointment.appointment_id === params.id);
    const setAppointmentSelected = useDashboardStore((state) => state.setAppointmentSelected);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const setIsLogoutModalOpen = useLogoutStore((state) => state.setIsLogoutModalOpen)
    const userInfo = useUserStore((state) => state.userInfo)

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        setIsLogoutModalOpen(true);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !(dropdownRef.current as any).contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setAppointmentSelected(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <main className='w-full h-screen flex flex-col justify-center items-center bg-[#f6f8fc] relative'>
            {/* <Sidebar /> */}
            <div className='w-full min-h-20 lg:mt-4 xl:mt-0 2xl:min-h-24 flex items-center justify-between border-b-2'>
                <div className='lg:ml-16 xl:ml-0'>
                    <p className='text-2xl lg:text-3xl font-semibold'>Profile dashboard</p>
                    <p className='text-sm lg:text-base text-gray-700'>Welcome to Nephara Skincare!</p>
                </div>
                <div className="flex items-center justify-center ml-[10%] relative cursor-pointer" onClick={handleDropdownToggle} >
                    <Image src={Profile} alt='Profile' width={100} height={100} className='w-14 h-14 border rounded-full object-cover' />
                    <p className='ml-3 font-semibold lg:text-lg'>Welcome {userInfo[0]?.name && userInfo[0].name.split(' ')[0]}</p>
                    <i className='text-2xl ml-3 cursor-pointer'><IoMdArrowDropdown /></i>
                    {isDropdownOpen && (
                        <div className="absolute right-0 top-[80%] mt-2 bg-white border border-gray-200 shadow-xl z-40 p-1 rounded-[8px]" ref={dropdownRef}>
                            <ul>
                                <li className="px-6 py-2 font-semibold rounded-[8px] hover:bg-[#743bfb] hover:text-white cursor-pointer" >{userInfo[0].name}</li>
                                <li className="px-6 py-2 font-semibold rounded-[8px] hover:bg-[#743bfb] hover:text-white cursor-pointer" onClick={handleLogout}>Logout</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <AppointmentContainer appointmentData={appointment} />
        </main>
    );
}

export default Page;

