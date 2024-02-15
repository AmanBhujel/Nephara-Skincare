import React from 'react';
import Profile from '@/assets/herosection.png';
import Image from "next/image";
import { FaCircleArrowRight } from "react-icons/fa6";
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section>
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>
        
        <div className="text-center pb-12 md:pb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Make your Skin <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">WONDERFUL</span></h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Book appointments with top south asian dermatologists from the comfort of your home.</p>


                    <div className="flex items-center mt-6 md:mt-8 lg:mt-12" data-aos="zoom-y-out" data-aos-delay="300">
                        <Link href={'/appointment'}>
                            <button className="bg-[#8f67e2] hover:bg-[#9c75e9] py-2 px-6 md:py-3  md:px-9 font-semibold text-lg text-white rounded-[8px] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-lg">Book now</button></Link>
                        <button className="ml-8 flex justify-center items-center tracking-tight hover:underline text-sm lg:text-base text-[#d25d7a] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-lg" >About Our Doctors <i className="ml-3 text-3xl"><FaCircleArrowRight /> </i></button>
                    </div>
                </div>

                <div className='flex justify-between mt-6'>
                    <div className='w-[45%]'>
                    <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Best Skin Doctor in Nepal</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Best Services</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Bestest Of Quality</span>
                    </li>
                  </ul>
                    </div>
                </div>

                <div className='flex justify-end w-full'>
                    <div className="w-[65%] h-full animatedFromRight transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-lg" >
                        <Image src={Profile} width={500} height={200} className="w-full" alt="Nephara" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection;