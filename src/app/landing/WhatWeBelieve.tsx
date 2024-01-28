import React from 'react';
import Image from "next/image";
import Nurse from '@/assets/nurse-smile.jpg'

const WhatWeBelieve = () => {
    return (
        <div className="flex  w-full justify-center items-center border-b-2 bg-white">
            <div className="flex flex-col lg:flex-row-reverse justify-center items-center w-[95%] lg:w-[63rem]  xl:w-[79rem] 2xl:w-[90rem] h-auto py-12 xl:h-[35rem]">
                <div className="w-[80%] lg:w-[40%] xl:w-[50%] h-full flex justify-center items-center">
                    <Image src={Nurse} width={400} height={600} className="w-[80%] bg-contain rounded-[8px] " alt="Nurse" />
                </div>
                <div className="lg:w-[57%] xl:w-[50%] h-full flex flex-col justify-center items-center lg:items-start">
                    <p className="text-3xl text-[#a376ff] font-semibold ml-6 mt-6 lg:mt-0">WHAT WE BELIEVE IN</p>
                    <p className="text-base md:text-lg tracking-wide w-[95%] md:w-[90%] lg:w-[100%] xl:w-[90%] 2xl:w-[80%] flex flex-wrap lg:ml-6 text-justify mt-2 xl:mt-4">Our core belief is rooted in ensuring your satisfaction. We are dedicated to providing a seamless online dermatologist appointment experience, connecting you with top-notch doctors. Need assistance or have questions? Feel free to reach out to us via email, and our team is committed to responding promptly within a day. <br /> Your convenience and peace of mind matter to us, which is why we offer a flexible refund policy to accommodate any changes or cancellations to your appointments. Trust us for a reliable and customer-centric approach to your healthcare journey.</p>
                </div>
            </div>
        </div>)
};

export default WhatWeBelieve;