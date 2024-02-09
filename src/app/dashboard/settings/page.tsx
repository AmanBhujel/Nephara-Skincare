'use client'
import React, { useEffect, useState } from 'react';
// import AppointmentInfo from '../appointments/components/AppointmentInfo';
import Sidebar from '../components/sidebar';
import { MdNavigateNext } from "react-icons/md";
import { SlLock, SlLogout } from "react-icons/sl";
import { LuUserSquare2 } from "react-icons/lu";
import { useLogoutStore } from '@/stores/LogoutStore';
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'next/navigation';
import ToastMessage from '@/components/utils/ToastMessage';
import { useLoadingStore } from '@/stores/LoadingStore';
import Loader from '@/components/Loader';
import Image from 'next/image';
import Profile from '@/assets/Emma.png';
import { TbCameraPlus } from "react-icons/tb";

const UPDATE_USER = gql`
mutation UpdateUserDetails($photo: String!, $name: String!, $age: Int!, $gender: String!, $phoneNumber: String!, $city: String!, $country: String!) {
    updateUserDetails(photo: $photo, name: $name, age: $age, gender: $gender, phoneNumber: $phoneNumber, city: $city, country: $country) {
      city,country,gender,phoneNumber,photo,name
    }
  }`;

const GET_USER_INFO = gql`
  query GetUserInfoByToken {
    getUserInfoByToken {
    status
    message
    user {
      email
      phoneNumber
      photo
      country
      city
      name
      age
      gender
    }
  }
    }`


const Page = () => {
    const setIsLogoutModalOpen = useLogoutStore((state) => state.setIsLogoutModalOpen);
    const [updateUserDetails] = useMutation(UPDATE_USER);
    const [activeSettingButton, setActiveSettingButton] = useState<string>('')
    const [getUserInfoByToken] = useLazyQuery(GET_USER_INFO);
    const setUserInfo = useUserStore((state) => state.setUserInfo);
    const [windowWidth, setWindowWidth] = useState<number>(0);

    const router = useRouter();

    const [fullName, setFullName] = useState('Aman Bhujel');
    const [phoneNumber, setPhoneNumber] = useState('+977 98326968372');
    const [gender, setGender] = useState('Male');
    const [age, setAge] = useState('19');
    const [city, setCity] = useState('Lalitpur');
    const [country, setCountry] = useState('Nepal');
    const isLoading = useLoadingStore((state) => state.isLoading)
    const setIsLoading = useLoadingStore((state) => state.setIsLoading)

    const handleUpdateUser = async () => {
        const updateUserDetailsResponse = await updateUserDetails({
            variables: {
                "photo": "aman",
                "name": "Aman Bhujel",
                "age": 20,
                "gender": "Male",
                "phoneNumber": "9802846311",
                "city": "Lalitpur",
                "country": "Nepal"
            }
        });
        console.log(updateUserDetailsResponse.data.updateUserDetails)
    }

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

    useEffect(() => {
        let isMounted = true; // Flag to track component mount state

        const getUserInfo = async () => {
            try {
                const response = await getUserInfoByToken();
                console.log(response, "from useeffect from landing");

                if (!isMounted) return; // Skip state updates if component is unmounted

                const { status, message, user } = response.data.getUserInfoByToken;
                if (user) {
                    setUserInfo({ email: user.email, name: user.name, photo: user.photo, gender: user.gender, age: user.age, city: user.city, country: user.country })
                }
                if (status === 'error' && message === 'Unauthorized Token!') {
                    router.replace('/auth')
                    ToastMessage("error", "Authorization Denied")
                    return;
                } else if (status === 'error' && message === 'Internal server error') {
                    ToastMessage(status, message)
                }
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching user info:", error);
                // Handle any error or perform cleanup actions
            }
        };

        if (isMounted) {
            getUserInfo();
        }

        // Cleanup function
        return () => {
            isMounted = false; // Update flag to indicate component unmount
            // Perform cleanup actions here if needed
            // For example: Clear any timers or subscriptions
        };
    }, []);

    const handleLogout = () => {
        setIsLogoutModalOpen(true);
    }

    return (
        <main className='w-full h-screen flex justify-center bg-[#f6f8fc] relative'>
            {
                isLoading ? <Loader /> :
                    <>
                        <Sidebar />
                        <div className={`${windowWidth > 1024 || activeSettingButton === "" ? "flex" : "hidden"} ${windowWidth > 1024 ? "" : "flex w-[85%] h-full items-center flex-col overflow-auto"} lg:w-[20%]  lg:min-w-[20rem] lg:max-w-[25rem] lg:h-full px-2 lg:ml-8`}>
                            <p className={`text-3xl sm:text-4xl lg:text-3xl font-semibold  tracking-wide mt-10 ${windowWidth > 1024?"":"text-[#743bfb]"}`}>Account Settings</p>
                            <ul className='w-full mt-12'>
                                <li className='border-b-2 font-medium h-16 flex justify-between items-center cursor-pointer' onClick={() => setActiveSettingButton("Edit")}>
                                    <p className='flex items-center text-lg ml-2'><span className='text-3xl mr-3'><LuUserSquare2 /></span>Edit Profile</p>
                                    <i className='text-3xl mr-2'><MdNavigateNext /></i>
                                </li>
                                <li className='border-b-2 font-medium h-16 flex justify-between items-center cursor-pointer'>
                                    <p className='flex items-center text-lg ml-2'><span className='text-3xl mr-3'><SlLock /></span>Change Password</p>
                                    <i className='text-3xl mr-2'><MdNavigateNext /></i>
                                </li>
                                <li className='font-medium h-16 flex justify-between items-center cursor-pointer text-red-700' onClick={handleLogout}>
                                    <p className='flex items-center text-lg ml-2 '><span className='text-3xl mr-3 '><SlLogout /></span>Log Out</p>
                                    <i className='text-3xl mr-2'><MdNavigateNext /></i>
                                </li>
                            </ul>
                        </div>


                        <div className={`${windowWidth > 1024 || activeSettingButton === "Edit" ? "flex" : "hidden"} w-full h-full   lg:w-[70%] xl:w-[50%] justify-center border lg:ml-[5%] bg-[#f6f8fc] `}>
                            <div className='w-[95%] md:w-[75%] xl:w-[70%] 2xl:w-[50%]'>
                                <div className='flex w-full justify-center items-center'>
                                    <p className='mt-8 text-4xl font-semibold text-[#743bfb]  tracking-wide'>Edit Your Profile</p>
                                </div>
                                <div className='flex flex-col w-full justify-center items-center mt-3'>
                                    <Image src={Profile} width={200} height={200} alt='Profile Image' className='w-32 h-32 rounded-[8px] border' />
                                    <div className='flex items-center justify-center border-2 border-[#7e59e4] w-40 py-2 rounded-[8px] mt-2 cursor-pointer'>
                                        <i className='text-xl'><TbCameraPlus /></i><p className='text-sm ml-2 font-medium'>Change Avatar</p>
                                    </div>
                                </div>
                                <div className='flex flex-col mt-6'>
                                    <label className='text-gray-600 font-medium mb-1 '>
                                        Full Name
                                    </label>
                                    <input
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className='h-12 border pl-2 w-[100%] outline-none rounded-[6px] text-lg'
                                    />
                                </div>
                                <div className='flex flex-col mt-6'>
                                    <label className='text-gray-600 font-medium mb-1 '>
                                        Phone Number
                                    </label>
                                    <input
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className='h-12 border pl-2 w-[100%] outline-none rounded-[6px] text-lg'
                                    />
                                </div>
                                <div className='flex gap-x-[6%] w-full'>
                                    <div className='flex flex-col mt-6 w-[47%]'>
                                        <label className='text-gray-600 font-medium mb-1 '>
                                            Gender
                                        </label>
                                        <input
                                            value={gender}
                                            onChange={(e) => setGender(e.target.value)}
                                            className='h-12 border pl-2 w-[100%] outline-none rounded-[6px] text-lg'
                                        />
                                    </div>
                                    <div className='flex flex-col mt-6 w-[47%]'>
                                        <label className='text-gray-600 font-medium mb-1 '>
                                            Age
                                        </label>
                                        <input
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                            className='h-12 border pl-2 w-[100%] outline-none rounded-[6px] text-lg'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col mt-6'>
                                    <label className='text-gray-600 font-medium mb-1 '>
                                        City
                                    </label>
                                    <input
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        className='h-12 border pl-2 w-[100%] outline-none rounded-[6px] text-lg'
                                    />
                                </div>
                                <div className='flex flex-col mt-6'>
                                    <label className='text-gray-600 font-medium mb-1 '>
                                        Country
                                    </label>
                                    <input
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        className='h-12 border pl-2 w-[100%] outline-none rounded-[6px] text-lg'
                                    />
                                </div>
                                <button className={`w-full rounded-[8px] bg-[#7650e0] hover:bg-[#7e59e4] font-medium mt-8 text-lg py-2 text-white mb-20 lg:mb-0`} onClick={handleUpdateUser}>Save Changes</button>
                            </div>
                        </div>
                    </>
            }

            {/* <AppointmentInfo/> */}
        </main>
    )
};

export default Page;


