"use client"
import React, { useEffect } from 'react';
import { NextPage } from 'next';
import Sidebar from '@/app/doctor/dashboard/appointments/components/sidebar';
import { Appointments } from '@/data/AppointmentData';
import AppointmentContainer from './components/AppointmentContainer';
import { useDashboardStore } from '@/stores/DashboardStore';

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
            <AppointmentContainer appointmentData={appointment} />
        </main>
    );
}

export default Page;
