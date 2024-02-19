'use client'
import { useDashboardStore } from "@/stores/DashboardStore";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IoArrowForward } from "react-icons/io5";
import { IoIosCalendar } from "react-icons/io";
import Alphabet from '@/assets/alphabet.png';
import Link from 'next/link';
import { useLoadingStore } from "@/stores/LoadingStore";
import { MdOutlineComputer } from "react-icons/md";


const AppointmentLists = () => {
    const appointmentSelected = useDashboardStore((state) => state.appointmentSelected);
    const appointmentArray = useDashboardStore((state) => state.appointmentArray);
    const selectedAppointmentFilter = useDashboardStore((state) => state.selectedAppointmentFilter);
    const setIsLoading = useLoadingStore((state) => state.setIsLoading);
    const selectedAppointmentId = useDashboardStore((state) => state.selectedAppointmentId)
    const setSelectedAppointmentId = useDashboardStore((state) => state.setSelectedAppointmentId);
    const [windowWidth, setWindowWidth] = useState<number>(0);

    const filteredAppointments = appointmentArray.filter(appointment => {
        if (selectedAppointmentFilter === "Upcoming") {
            return !appointment.completed;
        } else if (selectedAppointmentFilter === "Past") {
            return appointment.completed;
        } else {
            return true;
        }
    });

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', updateWindowWidth);

        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={`w-[90%] lg:w-96 h-auto mb-24 lg:mb-0 mt-4 lg:mt-0 lg:max-h-[650px] gap-y-5 lg:flex flex-col overflow-auto no-scrollbar ${appointmentSelected ? "hidden" : "flex"}`}>
            {filteredAppointments.map((appointment, index) => (
                windowWidth > 1024 && selectedAppointmentId === appointment._id ?
                    <div className='w-full h-36 sm:h-40 bg-white border border-[#743bfb] rounded-[8px] cursor-pointer' key={index}>
                        {/* ---card Top-------- */}
                        <div className='flex items-center justify-between mt-2 '>
                            <p className='bg-[#f2f2f9] text-[#743bfb] px-2 sm:px-3 sm:py-1 font-medium rounded-[10px] text-sm ml-3'>{appointment.completed ? "Completed" : "Upcoming"}</p>
                            <button className='outline-none border-none text-xl mr-3'><IoArrowForward /></button>
                        </div>
                        {/* ---card body-------- */}
                        <div className='flex items-center py-2 h-auto'>
                            <Image src={Alphabet} width={200} height={200} alt='Appointment Image' className='w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-[3px] ml-3 mr-3' />
                            <div className='flex flex-col items-start h-[60px]'>
                                <p className='text-base sm:text-lg font-semibold'>{appointment.fullName}</p>
                                <p className='text-sm font-medium text-gray-500'> {appointment.reasonForVisit}</p>
                            </div>
                        </div>
                        {/* ---card bottom-------- */}
                        <div className='border-t-[1px] border-[#a2a2a2] flex justify-between h-8 text-[#606060]'>
                            <p className='flex items-center ml-3 text-sm font-medium '><span className='text-lg mr-1 text-[#6e6e6e]'><MdOutlineComputer /></span>Online</p>
                            <p className='flex items-center mr-3 text-sm font-medium '><span className='text-lg  mr-1 text-[#606060]'><IoIosCalendar /></span>{appointment.appointmentDate}</p>
                        </div>
                    </div>
                    : <Link key={index} href={`/dashboard/appointments/${appointment._id}`}
                        onClick={() => {
                            setIsLoading(true)
                            setSelectedAppointmentId(appointment._id)
                        }}
                    >
                        <div className='w-full h-36 sm:h-40 bg-white border rounded-[8px]'>
                            {/* ---card Top-------- */}
                            <div className='flex items-center justify-between mt-2 '>
                                <p className='bg-[#f2f2f9] text-[#743bfb] px-2 sm:px-3 sm:py-1 font-medium rounded-[10px] text-sm ml-3'>{appointment.completed ? "Completed" : "Upcoming"}</p>
                                <button className='outline-none border-none text-xl mr-3'><IoArrowForward /></button>
                            </div>
                            {/* ---card body-------- */}
                            <div className='flex items-center py-2 h-auto'>
                                <Image src={Alphabet} width={200} height={200} alt='Appointment Image' className='w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-[3px] ml-3 mr-3' />
                                <div className='flex flex-col items-start h-[60px]'>
                                    <p className='text-base sm:text-lg font-semibold'>{appointment.fullName}</p>
                                    <p className='text-sm text-gray-500 font-medium'> {appointment.reasonForVisit}</p>
                                </div>
                            </div>
                            {/* ---card bottom-------- */}
                            <div className='border-t-[1px] border-[#a2a2a2] flex justify-between h-8 text-[#6e6e6e]'>
                                <p className='flex items-center ml-3 text-sm font-medium '><span className='text-lg mr-1 '><MdOutlineComputer /></span>Online</p>
                                <p className='flex items-center mr-3 text-sm font-medium '><span className='text-lg  mr-1 '><IoIosCalendar /></span>{appointment.appointmentDate}</p>
                            </div>
                        </div>
                    </Link>
            ))}
        </div>
    );
};
export default AppointmentLists;