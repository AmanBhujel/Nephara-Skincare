'use client'
import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../assets/logo.png';
import { FaBars } from 'react-icons/fa6';
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { FaMicroblog, FaQuestion } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import Link from 'next/link';
import { useLoadingStore } from '@/stores/LoadingStore';
import { useAuthorizedStore } from '@/stores/AuthorizedStore';
import Profile from '@/assets/Emma.png';
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [activeItem, setActiveItem] = useState("Home");
    const [sidebarActiveItem, setSidebarActiveItem] = useState("Home");
    const [showSidebar, setShowSidebar] = useState(false);
    const sidebarRef = useRef(null);
    const setIsLoading = useLoadingStore((state) => state.setIsLoading);
    const isAuthorized = useAuthorizedStore((state) => state.isAuthorized);

    const menuItems = [
        { name: 'Home', route: "/" },
        { name: 'Blogs', route: "/blogs" },
        { name: 'FAQs', routes: "faq" },
        { name: 'Dashboard', route: "/dashboard/user-profile" },
    ];


    const MenuItemsMobileSidebar = [
        { icon: <IoHomeOutline />, name: 'Home', route: "/" },
        { icon: <FaMicroblog />, name: 'Blogs', route: "/blogs" },
        { icon: <FaQuestion />, name: 'FAQs', routes: "faq" },
        { icon: <MdOutlineDashboardCustomize />, name: 'Dashboard', route: "/dashboard/user-profile" },
        { icon: <IoSettingsOutline />, name: 'Settings', route: "/dashboard/settings" },
    ];

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !(sidebarRef.current as any).contains(event.target)) {
                // Click outside the sidebar, close it
                setShowSidebar(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidebarRef]);

    return (
        <nav className="w-full flex justify-center items-center border-b-2 ">
            <div className='h-20 w-[95%] lg:w-[63rem] xl:w-[79rem] 2xl:w-[117rem] flex items-center justify-between lg:justify-start'>
                <Image src={Logo} width={200} height={100} alt="Nephara" className='pl-12' />

                {/* Large Screen Menu */}
                {windowWidth >= 1024 && (
                    <ul className="hidden lg:flex items-center justify-center gap-x-10 lg:ml-[13%] xl:ml-[27%] 2xl:ml-[37%]">
                        {menuItems.map((item, index) => (
                            <Link href={item.route || "/"} key={index} onClick={() => setIsLoading(true)}>
                                <li className={`xl:text-base cursor-pointer ${item.name === activeItem ? "underline underline-offset-8 text-black" : "text-gray-500"} hover:underline hover:underline-offset-8 font-medium tracking-tight hover:text-black `}
                                    onClick={() => setActiveItem(item.name)}>
                                    {item.name}
                                </li>
                            </Link>

                        ))}
                    </ul>
                )}

                {/* Login/Signup Buttons */}
                {windowWidth >= 1024 && !isAuthorized && (
                    <div className="hidden lg:flex items-center justify-center ml-[10%]">
                        <Link href={"/auth"}>
                            <button className="border-none text-lg font-semibold hover:underline hover:underline-offset-6">Log in</button>
                        </Link>
                        <Link href={"/auth"}>
                            <button className="bg-[#19191b] lg:py-2 xl:py-3 lg:px-6 xl:px-8 font-medium text-lg text-white rounded-[7px] ml-6">Sign up</button>
                        </Link>
                    </div>
                )}
                {
                    windowWidth >= 1024 && isAuthorized &&
                    <div className="hidden lg:flex items-center justify-center ml-[10%]">

                        <Image src={Profile} alt='Profile' width={100} height={100} className='w-16 h-16 border rounded-full object-cover' />
                        <p className='ml-3 font-semibold text-[#743bfb]'>Welcome Aman</p>
                        <i className='text-4xl cursor-pointer hover:rotate-[180deg]'><RiArrowDropDownLine /></i>
                    </div>
                }

                {/* Mobile Menu Button */}
                {windowWidth < 1024 && (
                    <button className="lg:hidden p-3 mr-6" aria-label="Open Menu" onClick={() => setShowSidebar(!showSidebar)}>
                        <FaBars className="text-2xl" />
                    </button>
                )}
                {windowWidth < 1024 && showSidebar && (
                    <div ref={sidebarRef} className='bg-white border-2 w-[350px] h-full right-0 top-0 fixed z-50'>
                        <button className="lg:hidden p-3 absolute right-12 top-4" aria-label="Open Menu" onClick={() => setShowSidebar(!showSidebar)}>
                            <FaBars className="text-2xl" />
                        </button>
                        <Image src={Logo} width={200} height={100} className='mt-[5%]' alt='Dermatologist' />
                        {/* <p className='ml-6 text-sm mt-2'>You are not signed in yet.</p> */}
                        <ul className='w-full flex flex-col p-2 mt-6 gap-y-1'>
                            {MenuItemsMobileSidebar.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => setSidebarActiveItem(item.name)}
                                    className={`flex w-full rounded-[7px] h-14 text-lg font-medium hover:bg-[#a376ff] hover:text-white items-center cursor-pointer ${sidebarActiveItem === item.name ? "bg-[#a376ff] text-white" : ""}`}
                                >
                                    <i className='ml-6 mr-3 text-2xl'>{item.icon}</i>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                        {/* ---------login CTA------------- */}
                        {!isAuthorized &&
                            <div className='flex items-center justify-center w-full flex-col mt-[15%]'>
                                <p className="text-sm font-medium text-black  mb-2 ">Get Started Today:</p>
                                <Link href={"/auth"}>
                                    <button className="bg-[#a376ff] py-3 px-10 font-medium text-lg text-white rounded-[7px]">Register/ Login</button>
                                </Link>
                            </div>
                        }

                    </div>
                )}
            </div>

        </nav>)
}

export default Navbar;