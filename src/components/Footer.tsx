import React from 'react'
import Logo from '../assets/logo.png';
import Image from "next/image";

const Footer = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center bg-[#241f30]">
            <div className="flex justify-center gap-x-[20%] sm:gap-x-[20%] lg:gap-x-0 lg:justify-between items-start w-[99%] lg:w-[61rem] xl:w-[70rem] 2xl:w-[85rem] h-48 sm:h-64 text-white ">
                <div className="mt-10 hidden lg:block">
                    <Image src={Logo} width={200} height={200} alt="Nephara" />
                </div>
                <div className="mt-4 sm:mt-10">
                    <h6 className="font-bold sm:text-lg xl:text-xl">Navigate</h6>
                    <ul className="mt-1 sm:mt-3 gap-y-1 flex flex-col text-sm xl:text-base">
                        <li className="cursor-pointer hover:underline">Home</li>
                        <li className="cursor-pointer hover:underline">Blogs</li>
                        <li className="cursor-pointer hover:underline">Profile</li>
                        <li className="cursor-pointer hover:underline">Settings</li>
                    </ul>
                </div>
                <div className="mt-4 sm:mt-10 hidden sm:block">
                    <h6 className="font-bold sm:text-lg xl:text-xl">Assistance</h6>
                    <ul className="mt-3 gap-y-1 flex flex-col text-sm xl:text-base">
                        <li className="cursor-pointer hover:underline">FAQs</li>
                        <li className="cursor-pointer hover:underline">Blogs</li>
                        <li className="cursor-pointer hover:underline">Privacy Policy</li>
                    </ul>
                </div>
                <div className="mt-4 sm:mt-10">
                    <h6 className="font-bold sm:text-lg xl:text-xl">Social</h6>
                    <ul className="mt-1 sm:mt-3 gap-y-1 flex flex-col text-sm xl:text-base">
                        <li className="cursor-pointer hover:underline">Email</li>
                        <li className="cursor-pointer hover:underline">Instagram</li>
                        <li className="cursor-pointer hover:underline">Tiktok</li>
                        <li className="cursor-pointer hover:underline">Facebook</li>
                    </ul>
                </div>
            </div>
            <p className='text-white font-medium'>@Copyright . Privacy Policy.</p>
        </div>)
}

export default Footer