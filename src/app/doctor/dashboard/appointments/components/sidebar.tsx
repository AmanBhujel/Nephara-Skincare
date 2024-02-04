"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Logo from '@/assets/logo.png';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { AiOutlineBars } from "react-icons/ai";
import { usePathname, useRouter } from 'next/navigation';
import { useDashboardStore } from '@/app/dashboard/store/DashboardStore';
import Link from 'next/link';

const Sidebar = () => {
    const activeSidebarItem = useDashboardStore((state) => state.activeSidebarItem);
    const setActiveSidebarItem = useDashboardStore((state) => state.setActiveSidebarItem);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const router = useRouter();
    const pathname = usePathname();
    console.log(pathname, "router")
    const sidebarRef = useRef<HTMLDivElement>(null);

    const handleSidebarItemClick = (itemName: string) => {
        setActiveSidebarItem(itemName);
        if (itemName === "Dashboard") {
            router.push("/doctor/dashboard/user-profile")
        }
        else if (itemName === "Appointments") {
            router.push("/doctor/dashboard/appointments")
        }
        else if (itemName === "Settings") {
            router.push("/doctor/dashboard/settings")
        }
    };


    const handleClickOutside = (e: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        if (pathname === "/dashboard/user-profile") {
            setActiveSidebarItem("Dashboard")
        }
        else if (pathname === "/dashboard/appointments") {
            setActiveSidebarItem("Appointments")
        }
        else if (pathname === "/dashboard/settings") {
            setActiveSidebarItem("Settings")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        console.log(isSidebarOpen)

        if (isSidebarOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isSidebarOpen]);

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
        windowWidth > 1024 ? (
            <>
                {isSidebarOpen || windowWidth > 1281 ? (
                    <div ref={sidebarRef} className='h-full w-72 lg:fixed xl:static min-w-72 xl:w-80 xl:min-w-80 top-0 left-0 z-50 bg-white border-r-2'>
                        <div className='w-full h-full flex flex-col relative'>
                            <div className='w-full flex justify-center items-center mt-6'>
                                <Image src={Logo} width={150} height={150} alt='Nephara' className='w-48 h-auto' />
                            </div>
                            <ul className='w-full flex items-center justify-center flex-col mt-10'>
                                {[{ itemName: "Dashboard", link: "/dashboard/user-profile" }, { itemName: "Appointments", link: "/dashboard/appointments" }, { itemName: "Settings", link: "/dashboard/settings" }].map((item, index) => (
                                    <li key={index}
                                        className={`w-[90%] cursor-pointer text-lg font-semibold py-4 px-2 flex items-center mb-2 rounded-[10px] 
                          ${activeSidebarItem === item.itemName ? "bg-[#7650e0] text-white" : "text-gray-600 hover:bg-[#7650e0] hover:text-white"}`}
                                        onClick={() => handleSidebarItemClick(item.itemName)}
                                    >
                                        <span className='mr-4 ml-2 text-3xl'>
                                            {item.itemName === "Dashboard" && <MdOutlineDashboardCustomize />}
                                            {item.itemName === "Appointments" && <LuCalendarDays />}
                                            {item.itemName === "Settings" && <IoSettingsOutline />}
                                        </span>
                                        {item.itemName}
                                    </li>
                                ))}
                            </ul>
                            <div className='bottom-0 absolute flex items-center justify-center w-full'>
                                <p
                                    className={`w-[90%] cursor-pointer text-lg font-semibold py-4 px-2 flex items-center mb-2 rounded-[10px] text-gray-600 hover:bg-[#7650e0] hover:text-white`}
                                >
                                    <span className='mr-4 ml-2 text-2xl'><SlLogout /></span>
                                    Logout
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className='absolute top-8 left-4 text-white text-3xl cursor-pointer' onClick={() => setIsSidebarOpen(true)}><AiOutlineBars /> </p>
                )}
            </>
        ) : (
            <div className='absolute bottom-2 w-[95%] shadow-lg h-20 bg-white border rounded-xl flex item-center justify-center'>
                <Link href={"/dashboard/user-profile"} className={`w-[33%] h-full flex flex-col items-center justify-center hover:text-[#ba58ff] cursor-pointer   ${activeSidebarItem === "Dashboard" ? "text-[#ba58ff]" : ""}`}>
                    <span className='text-3xl'><MdOutlineDashboardCustomize /></span>
                    <p className='text-sm hidden sm:block'>Profile</p>
                </Link>
                <Link href={"/dashboard/appointments"} className={`w-[33%] h-full flex flex-col items-center justify-center hover:text-[#ba58ff] cursor-pointer   ${activeSidebarItem === "Appointments" ? "text-[#ba58ff]" : ""}`}>
                    <span className='text-3xl'><LuCalendarDays /></span>
                    <p className='text-sm hidden sm:block'>Appointments</p>
                </Link>
                <Link href={"/dashboard/settings"} className={`w-[33%] h-full flex flex-col items-center justify-center hover:text-[#ba58ff] cursor-pointer   ${activeSidebarItem === "Settings" ? "text-[#ba58ff]" : ""}`}>
                    <span className='text-3xl'><IoSettingsOutline /></span>
                    <p className='text-sm hidden sm:block'>Settings</p>
                </Link>
            </div>
        )
    );

};

export default Sidebar;