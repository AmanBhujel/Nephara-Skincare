import React from 'react';
import { NextPage } from 'next';
import AppointmentInfo from '../components/AppointmentInfo';
import Sidebar from '../../components/sidebar';
import { Appointments } from '@/data/AppointmentData';

interface PageProps {
    params: {
        id: string;
    };
}

const Page: NextPage<PageProps> = ({ params }) => {
    const appointment = Appointments.find(appointment => appointment.appointment_id === params.id);

    return (
        <main className='w-full h-screen flex justify-center items-center bg-[#f6f8fc] relative'>
            <Sidebar />
            <AppointmentInfo appointmentData={appointment} />
        </main>
    );
}

export default Page;
