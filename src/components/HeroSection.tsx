import React from 'react';
import Profile from '../assets/herosection.png';
import Image from "next/image";
import { FaCircleArrowRight } from "react-icons/fa6";

const HeroSection = () => {
    return (
        <div className="flex w-full justify-center items-center border-b-2 bg-white">
            <div className="w-[95%] lg:w-[63rem]  xl:w-[79rem] 2xl:w-[90rem] h-auto pb-12 sm:pb-8  xl:h-[46rem]  flex flex-col-reverse lg:flex-row justify-center items-center ">
                <div className="md:w-[95%] lg:w-[50%] h-full justify-center items-center lg:items-start flex flex-col">
                    <p className="w-full flex flex-wrap text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-wide font-montserrat items-center justify-center lg:items-start text-center lg:text-left"> Virtual Dermatology Care</p>
                    <p className="text-sm md:text-lg xl:text-xl font-medium lg:[95%] xl:w-[90%] flex-wrap mt-2 md:mt-2 lg:mt-8 text-[#665833] text-center lg:text-left">Book appointments with top south asian dermatologists from the comfort of your home</p>
                    <div className="flex items-center mt-6 md:mt-8 lg:mt-12">
                        <button className="bg-[#8f67e2] hover:bg-[#9c75e9] py-2 px-6 md:py-3  md:px-9 font-semibold text-lg text-white rounded-[8px] ">Book now</button>
                        <button className="ml-8 flex justify-center items-center tracking-tight hover:underline text-sm lg:text-base text-[#d25d7a]" >Discover Your Skin Type <i className="ml-3 text-3xl"><FaCircleArrowRight /> </i></button>
                    </div>
                </div>
                <div className="w-[75%] lg:w-[50%]  h-full" >
                    <Image src={Profile} width={500} height={200} className="w-full" alt="Nephara" />
                </div>
            </div>
        </div>
    )
};

export default HeroSection;