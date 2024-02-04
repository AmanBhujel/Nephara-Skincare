'use client'
import { useDashboardStore } from "../../../../stores/DashboardStore";
import Image from 'next/image';
import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { IoArrowForward } from "react-icons/io5";
import { IoIosCalendar } from "react-icons/io";
import Alphabet from '@/assets/alphabet.png';
import { Appointments } from '@/data/AppointmentData';
import Link from 'next/link';

const AppointmentLists = () => {
    const appointmentSelected = useDashboardStore((state) => state.appointmentSelected);
    const selectedAppointmentFilter = useDashboardStore((state) => state.selectedAppointmentFilter);

    const filteredAppointments = Appointments.filter(appointment => {
        if (selectedAppointmentFilter === "Upcoming") {
            return !appointment.completed;
        } else if (selectedAppointmentFilter === "Past") {
            return appointment.completed;
        } else {
            return true;
        }
    });

    return (
        <div className={`w-[90%] lg:w-96 h-auto max-h-[650px] gap-y-2 lg:flex flex-col overflow-auto no-scrollbar ${appointmentSelected ? "hidden" : "flex"}`}>
            {filteredAppointments.map((appointment, index) => (
                <Link key={index} href={`/dashboard/appointments/${appointment.appointment_id}`}>
                    <div className='w-full h-40 bg-white border border-[#743bfb] rounded-[8px]'>
                        {/* ---card Top-------- */}
                        <div className='flex items-center justify-between mt-2 '>
                            <p className='bg-[#f2f2f9] px-3 py-1 rounded-[10px] text-sm ml-3'>{appointment.completed ? "Completed" : "Upcoming"}</p>
                            <button className='outline-none border-none text-xl mr-3'><IoArrowForward /></button>
                        </div>
                        {/* ---card body-------- */}
                        <div className='flex items-center py-2 h-auto'>
                            <Image src={Alphabet} width={200} height={200} alt='Appointment Image' className='w-[70px] h-[70px] rounded-[3px] ml-3 mr-3' />
                            <div className='flex flex-col items-start h-[60px]'>
                                <p className='text-lg font-semibold'>{appointment.name}</p>
                                <p className='text-sm text-gray-500'> {appointment.description}</p>
                            </div>
                        </div>
                        {/* ---card bottom-------- */}
                        <div className='border-t-[1px] flex justify-between h-8'>
                            <p className='flex items-center ml-3 text-gray-500 text-sm font-medium '><span className='text-lg text-gray-400 mr-1'><CiLocationOn /></span>Virtual</p>
                            <p className='flex items-center mr-3 text-sm font-medium '><span className='text-lg  mr-1'><IoIosCalendar /></span>{appointment.appointmentDate}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};
export default AppointmentLists;