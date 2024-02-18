import React from 'react';
import Profile from '@/assets/beautiful-nurse.png';
import Image from "next/image";
import { FaCircleArrowRight } from "react-icons/fa6";
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='border-b-1'>
      {/* --------------Info Section----------- */}
      <div className="text-center pb-12 md:pb-16 flex flex-col-reverse justify-between items-center lg:flex-row lg:pt-10">
        <div className="w-[90%] lg:w-[45%] xl:w-[40%] 2xl:w-[35%] flex flex-col items-center z-30 lg:mr-12 " >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tighter tracking-tighter l md:mb-4" data-aos="zoom-y-out">Make your Skin<br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">WONDERFUL</span></h1>
          <p className="md:text-lg lg:text-xl text-gray-600 " data-aos="zoom-y-out" data-aos-delay="150">Book appointments with top south asian dermatologists from the comfort of your home.</p>
          <div className="flex items-center mt-6 md:mt-8 lg:mt-8" data-aos="zoom-y-out" data-aos-delay="300">
            <Link href={'/appointment'}>
              <button className="bg-[#8f67e2] hover:bg-[#9c75e9] py-2 px-6 md:py-3  md:px-9 font-semibold text-lg text-white rounded-[8px] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-lg">Book now</button></Link>
            <Link href={'/blogs'}>
              <button className="ml-8 flex justify-center items-center tracking-wide hover:underline text-sm lg:text-base text-[#d25d7a] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 " >About Us <i className="ml-3 text-3xl"><FaCircleArrowRight /> </i></button>
            </Link>
          </div>
          <div className='flex justify-between mt-6'>
            <div className='w-full'>
              <ul className="text-base font-medium text-gray-400 -mb-2">
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span className='text-sm sm:text-base'>Best Skin Doctor in Nepal</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span className='text-sm sm:text-base'>Best Services</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span className='text-sm sm:text-base'>Bestest Of Quality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* -----------Image section-------- */}
        <div className='flex items-center justify-center w-full lg:w-[50%] '>
          <div className="w-[70%] md:w-[50%] lg:w-[95%] flex items-center justify-center h-full animatedFromRight transition duration-500 ease-in-out" >
            <Image src={Profile} width={1000} height={1000} className="w-full" alt="Nephara" />
          </div>
        </div>
      </div>
    </section>
  )
};

export default HeroSection;