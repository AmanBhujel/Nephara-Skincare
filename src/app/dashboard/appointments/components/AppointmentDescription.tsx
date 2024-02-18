'use client'
import { useEffect, useState } from "react";
import { useDashboardStore } from "@/stores/DashboardStore";
import BackgroundAppointment from '@/assets/DoctorConsulting.png'
import { useLazyQuery } from "@apollo/client";
import { IoArrowBack, } from "react-icons/io5";
import Link from "next/link";
import { GET_REPORT } from "@/apollo_client/Queries";

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
    const [windowWidth, setWindowWidth] = useState<number>(0);

    const [getReport] = useLazyQuery(GET_REPORT, {
        fetchPolicy: "no-cache"
    });

    const appointmentSelected = useDashboardStore((state) => state.appointmentSelected);
    const setAppointmentSelected = useDashboardStore((state) => state.setAppointmentSelected);

    const handleSeeReportClick = async () => {
        try {
            const response = await getReport({
                variables: {
                    "appointmentId": "appoint-11"
                }
            });

            const pdfData = response.data.getReport;

            // Convert base64 to Blob
            const byteCharacters = atob(pdfData);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'application/pdf' });

            // Create URL for the Blob
            const pdfUrl = URL.createObjectURL(blob);

            // Open the URL in a new tab
            window.open(pdfUrl, '_blank');
        } catch (error) {
            console.error("Error fetching or opening the PDF:", error);
        }
    };

    useEffect(() => {
        if (appointmentData) {
            setAppointmentSelected(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
        <div className={` lg:w-[65%]  xl:w-[60%] 2xl:w-[70%] w-full lg:flex lg:h-[600px] xl:h-[650px] overflow-auto rounded-[8px] ${appointmentSelected || windowWidth > 1024 ? "flex" : "hidden"} border-2 mb-24 lg:mb-0 h-screen bg-white`}>
            {appointmentData ?
                <div className='w-full'>
                    <div className='w-full h-40 min-h-40 rounded-[8px] relative' style={{ backgroundImage: `url(${BackgroundAppointment.src})`, backgroundSize: 'cover', backgroundPosition: 'center 15%' }}>
                        <div className='absolute w-full h-full bg-gradient-to-b from-[#743bfb] via-[#743bfb] to-[#8e75c9] opacity-70 z-10'></div>
                        <div className='z-20 absolute p-6 flex w-full justify-between h-full items-center'>
                            <div className=' flex flex-col'>
                                {windowWidth < 1024 &&
                                    <div className="flex text-white items-center ">
                                        <Link href={'/dashboard/appointments'}>
                                            <i className="text-white text-2xl md:text-3xl cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-lg"><IoArrowBack /></i>
                                        </Link>
                                    </div>}
                                <p className='bg-[#f2f2f9cb] px-2 py-1 text-sm sm:text-base md:px-3 md:py-1 w-min text-[#743bfb] rounded-[10px] font-medium sm:mb-2 '>{appointmentData?.completed ? "Past" : "Upcoming"}</p>
                                <p className='text-white font-bold text-2xl md:text-3xl xl:text-2xl 2xl:text-3xl'>{appointmentData?.name}</p>
                                <p className='text-white text-base md:text-lg xl:text-base 2xl:text-lg font-medium md:mt-1'>{appointmentData?.description}</p>
                            </div>
                            <div>
                                <p className='bg-[#ededf5e0] px-2 py-1 text-sm sm:text-base sm:px-3  text-[#743bfb] rounded-[10px] font-medium mb-2'>{appointmentData?.appointmentDate}</p>
                            </div>
                        </div>
                    </div>
                    {!appointmentData.completed ?
                        (<div className='bg-[#f1f1ff] mt-4 py-2 text-xl flex justify-between  items-center font-medium text-black px-4'>
                            <p className='text-base lg:text-lg xl:text-xl font-semibold text-[#575658] '>Time Remaining: 01:24:56</p>

                            <a href={`http://localhost:8080/join?room=${appointmentData.appointment_id}&name=${appointmentData.name}`} target="_blank" rel="noopener noreferrer">
                                <button className={`text-white px-4 py-1 md:px-8 md:py-2 bg-[#743bfb] hover:bg-[#753bfbde] rounded-[6px] font-bold text-lg mb-2  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-lg`}>Join</button>
                            </a>
                        </div>) :
                        (<div className='bg-[#f1f1ff] mt-4 py-2 text-xl flex justify-between  items-center font-medium text-black px-4'>
                            <p className=' text-base sm:text-lg md:text-xl font-semibold text-[#575658]'>Watch your Report</p>

                            <button className={`text-white px-4 py-1 md:px-8 md:py-2 bg-[#743bfb] hover:bg-[#753bfbde] rounded-[6px] font-bold text-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-lg`} onClick={handleSeeReportClick}>See Report</button>
                        </div>)
                    }

                    <div className='h-full px-2'>
                        <p className='bg-[#f1f1ff] mt-4 py-1 text-lg font-semibold text-[#a3a1a9] px-4'>Appointment Info</p>
                        <div className='px-4 '>
                            <p className='text-[#807c83] mt-2 sm:text-lg lg:text-base font-medium '>Appointment Id</p>
                            <p className='font-medium sm:text-lg lg:text-base mt-1 mb-1'>{appointmentData?.appointment_id}</p>
                            <p className='text-[#807c83] sm:text-lg lg:text-base mt-2 font-medium '>See Report</p>
                            <p className='font-medium mt-1 sm:text-lg lg:text-base mb-1'>{appointmentData?.report_id}</p>
                            <p className='text-[#807c83] sm:text-lg lg:text-base mt-2 font-medium '>Appointment Date</p>
                            <p className='font-medium mt-1 sm:text-lg lg:text-base mb-1'>{appointmentData?.appointmentDate}</p>
                        </div>
                        <p className='bg-[#f1f1ff] mt-4 py-1 sm:text-lg font-semibold text-[#a3a1a9] px-4'>Time Info</p>
                        <div className='px-4 '>
                            <p className='text-[#807c83] mt-2 sm:text-lg lg:text-base font-medium'>Timezone</p>
                            <p className='font-medium mt-1 sm:text-lg lg:text-base mb-1'> {appointmentData?.timezone}</p>
                            <p className='text-[#807c83] mt-2 font-medium'>Time</p>
                            <p className='sm:text-lg lg:text-base font-medium mt-1 mb-1'>{appointmentData?.time}</p>
                            <p className='text-[#807c83] mt-2 font-medium'>Booked Date</p>
                            <p className='font-medium mt-1 mb-1'>{appointmentData?.bookedDate}</p>
                        </div>
                        <p className='bg-[#f1f1ff] mt-4 py-1 text-lg font-semibold text-[#a3a1a9] px-4'>Time Info</p>
                        <div className='px-4'>
                            <p className='text-[#807c83] mt-2 sm:text-lg lg:text-base font-medium'>Timezone</p>
                            <p className='font-medium mt-1 sm:text-lg lg:text-base mb-1'> {appointmentData?.timezone}</p>
                            <p className='text-[#807c83] sm:text-lg lg:text-base mt-2 font-medium'>Time</p>
                            <p className='font-medium mt-1 sm:text-lg lg:text-base mb-1'>{appointmentData?.time}</p>
                            <p className='text-[#807c83] sm:text-lg lg:text-base mt-2 font-medium'>Booked Date</p>
                            <p className='font-medium mt-1  sm:text-lg lg:text-base mb-1'>{appointmentData?.bookedDate}</p>
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