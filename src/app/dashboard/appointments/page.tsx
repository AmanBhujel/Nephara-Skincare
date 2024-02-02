"use client"
import React, { useEffect } from 'react';
import { NextPage } from 'next';
import AppointmentInfo from '@/app/dashboard/appointments/components/AppointmentInfo';
import Sidebar from '@/app/dashboard/components/sidebar';
import { Appointments } from '@/data/AppointmentData';
import { useDashboardStore } from '../store/DashboardStore';

interface PageProps {
    params: {
        id: string;
    };
}

const Page: NextPage<PageProps> = ({ params }) => {
    const appointment = Appointments.find(appointment => appointment.appointment_id === params.id);
    const setAppointmentSelected = useDashboardStore((state) => state.setAppointmentSelected);

    useEffect(() => {
        setAppointmentSelected(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <main className='w-full h-screen flex justify-center items-center bg-[#f6f8fc] relative'>
            <Sidebar />
            <AppointmentInfo appointmentData={appointment} />
        </main>
    );
}

export default Page;

