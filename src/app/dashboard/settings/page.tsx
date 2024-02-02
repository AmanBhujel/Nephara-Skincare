import React from 'react';
// import AppointmentInfo from '../appointments/components/AppointmentInfo';
import Sidebar from '../components/sidebar';

const Page = () => {
    return (
        <main className='w-full h-screen flex  items-center bg-[#f6f8fc] relative'>
            <Sidebar />
            {/* <AppointmentInfo/> */}
        </main>
    )
};

export default Page;


