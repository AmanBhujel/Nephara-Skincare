'use client'
import { useEffect, useState } from "react";
import { useDashboardStore } from "../../../../stores/DashboardStore";
import BackgroundAppointment from '@/assets/DoctorConsulting.png'

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
const AppointmentDescription: React.FC<AppointmentInfoProps> = ({ appointmentData }) => {
    const appointmentSelected = useDashboardStore((state) => state.appointmentSelected);
    const setAppointmentSelected = useDashboardStore((state) => state.setAppointmentSelected);
    useEffect(() => {
        if (appointmentData) {
            setAppointmentSelected(true)
        }
    }, []);
    const [windowWidth, setWindowWidth] = useState<number>(0);

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
        <div className={` lg:w-[60%]  xl:w-[60%] 2xl:w-[70%] w-full lg:flex  lg:h-[600px] xl:h-[650px] overflow-auto rounded-[8px] ${appointmentSelected || windowWidth > 1024 ? "flex" : "hidden"} border-2 bg-white mb-6 lg:mb-0`}>
            {appointmentData ?
                <div className='w-full'>
                    <div className='w-full h-40 min-h-40 rounded-[8px] relative' style={{ backgroundImage: `url(${BackgroundAppointment.src})`, backgroundSize: 'cover', backgroundPosition: 'center 15%' }}>
                        <div className='absolute w-full h-full bg-gradient-to-b from-[#743bfb] via-[#743bfb] to-[#8e75c9] opacity-70 z-10'></div>
                        <div className='z-20 absolute p-6 flex w-full justify-between h-full items-center'>
                            <div className=' flex flex-col'>
                                <p className='bg-[#f2f2f9cb] px-3 py-1 w-min text-[#743bfb] rounded-[10px] font-semibold mb-2'>{appointmentData?.completed ? "Past" : "Upcoming"}</p>
                                <p className='text-white font-bold text-3xl'>{appointmentData?.name}</p>
                                <p className='text-white text-lg font-medium mt-1'>{appointmentData?.description}</p>
                            </div>
                            <div>
                                <p className='bg-[#ededf5e0] px-3 py-1 text-[#743bfb] rounded-[10px] font-semibold mb-2'>{appointmentData?.appointmentDate}</p>
                            </div>
                        </div>
                    </div>
                    {!appointmentData.completed &&
                        <div className='bg-[#f1f1ff] mt-4 py-4 text-xl flex justify-between  items-center font-medium text-black px-4'>
                            <p className=''>Time Remaining: 01:24:56</p>

                            <a href={`http://localhost:8080/join?room=${appointmentData.appointment_id}&name=${appointmentData.name}`} target="_blank" rel="noopener noreferrer">
                                <button className={`text-white px-8 py-2 bg-[#743bfb] rounded-[10px] font-bold text-lg mb-2`}>Join</button>
                            </a>
                        </div>
                    }
                    <div className='h-full px-2'>
                        <p className='bg-[#f1f1ff] mt-4 py-1 text-lg font-medium text-[#a3a1a9] px-4'>Appointment Info</p>
                        <div className='px-4 '>
                            <p className='text-[#807c83] mt-2 '>Appointment Id</p>
                            <p className='text-lg font-semibold mt-1 mb-1'>{appointmentData?.appointment_id}</p>
                            <p className='text-[#807c83] mt-2 '>See Report</p>
                            <p className='text-lg font-semibold mt-1 mb-1'>{appointmentData?.report_id}</p>
                            <p className='text-[#807c83] mt-2 '>Appointment Date</p>
                            <p className='text-lg font-semibold mt-1 mb-1'>{appointmentData?.appointmentDate}</p>
                        </div>
                        <p className='bg-[#f1f1ff] mt-4 py-1 text-lg font-medium text-[#a3a1a9] px-4'>Time Info</p>
                        <div className='px-4 '>
                            <p className='text-[#807c83] mt-2 '>Timezone</p>
                            <p className='text-lg font-semibold mt-1 mb-1'> {appointmentData?.timezone}</p>
                            <p className='text-[#807c83] mt-2 '>Time</p>
                            <p className='text-lg font-semibold mt-1 mb-1'>{appointmentData?.time}</p>
                            <p className='text-[#807c83] mt-2 '>Booked Date</p>
                            <p className='text-lg font-semibold mt-1 mb-1'>{appointmentData?.bookedDate}</p>
                        </div>
                        <p className='bg-[#f1f1ff] mt-4 py-1 text-lg font-medium text-[#a3a1a9] px-4'>Time Info</p>
                        <div className='px-4'>
                            <p className='text-[#807c83] mt-2 '>Timezone</p>
                            <p className='text-lg font-semibold mt-1 mb-1'> {appointmentData?.timezone}</p>
                            <p className='text-[#807c83] mt-2 '>Time</p>
                            <p className='text-lg font-semibold mt-1 mb-1'>{appointmentData?.time}</p>
                            <p className='text-[#807c83] mt-2 '>Booked Date</p>
                            <p className='text-lg font-semibold mt-1 mb-1'>{appointmentData?.bookedDate}</p>
                        </div>
                    </div>
                </div> :
                (
                    windowWidth > 1024 ?
                        <p className={`flex items-center justify-center w-full h-full`}>Click Appointments to see more</p> : ""

                )
            }

        </div>
    )
}
export default AppointmentDescription;