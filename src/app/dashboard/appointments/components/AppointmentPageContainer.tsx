"use client"
import React, { useEffect } from 'react'
import { useDashboardStore } from '../../../../stores/DashboardStore';
import AppointmentFilter from './AppointmentFilter';
import AppointmentLists from './AppointmentLists';
import AppointmentDescription from './AppointmentDescription';
import AppointmentPageTopDiv from './AppointmentPageTopDiv';
interface Appointment {
    name: string;
    description: string;
    appointment_id: string;
    report_id: string;
    appointmentDate: string;
    bookedDate: string;
    timezone: string;
    time: string;
    completed: boolean;
    language: string;
    getStatus: string;
}

interface AppointmentInfoProps {
    appointmentData: Appointment | undefined;
}

const AppointmentPageContainer: React.FC<AppointmentInfoProps> = ({ appointmentData }) => {
    const appointmentSelected = useDashboardStore((state) => state.appointmentSelected);
    const setAppointmentSelected = useDashboardStore((state) => state.setAppointmentSelected);

    useEffect(() => {
        if (appointmentData) {
            setAppointmentSelected(true)
        }
    }, []);

    return (
        <div className='w-full h-full flex flex-col'>
            <AppointmentPageTopDiv />
            <div className='overflow-auto md:px-8 lg:px-8 lg:py-8 xl:px-8 xl:py-4 2xl:px-16 2xl:py-6 '>
                <p className={`md:text-3xl mt-6 lg:text-2xl font-semibold tracking-wide lg:flex items-center justify-center lg:justify-start ${appointmentSelected ? "hidden" : "flex"}`}>Appointments</p>
                <AppointmentFilter />
                <div className='w-full h-auto mt-6 flex items-center justify-center lg:items-start lg:justify-start gap-x-6'>
                    <AppointmentLists />
                    <AppointmentDescription appointmentData={appointmentData} />
                </div>
            </div>
        </div>
    );
};

export default AppointmentPageContainer;

