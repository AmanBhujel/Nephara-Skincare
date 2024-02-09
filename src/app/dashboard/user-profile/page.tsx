'use client'
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar';
import Image from 'next/image';
import Profile from '@/assets/Emma.png'
import { gql, useLazyQuery } from '@apollo/client';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'next/navigation';
import ToastMessage from '@/components/utils/ToastMessage';
import Loader from '@/components/Loader';
import { useLoadingStore } from '@/stores/LoadingStore';

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
    const [getUserInfoByToken] = useLazyQuery(GET_USER_INFO, {
        fetchPolicy: "no-cache"
    });

    const setUserInfo = useUserStore((state) => state.setUserInfo);
    const router = useRouter();
    const setIsLoading = useLoadingStore((state) => state.setIsLoading)
    const isLoading = useLoadingStore((state) => state.isLoading)

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



    return (
        <main className='w-full h-screen flex  items-center bg-[#f6f8fc] relative'>
            {isLoading ? <Loader /> :
                <>
                    <Sidebar />

                    <div className='w-full h-full flex justify-center'>
                        <div className='w-[90%] min-w-[70rem] min-h-[50rem] h-[80%] border flex flex-col items-center mt-4'>
                            <p className='text-5xl font-medium tracking-wide mt-8'>Account Info</p>
                            <div className='flex items-center justify-start mt-8 w-[80%] '>
                                <Image src={Profile} alt='profile-image' width={200} height={200} className='w-32 h-32 rounded-full ' />
                                <div className='ml-12'>
                                    <p className='text-3xl font-bold'>Aman Bhujel</p>
                                    <p className='text-[#505050]'>Lalitpur,Nepal</p>
                                </div>
                            </div>
                            <div className="w-[80%] grid grid-cols-2 gap-x-16 gap-y-8 mt-8">
                                <div className='flex flex-col'>
                                    <label className='font-semibold mt-2 sm:mt-4 mb-2'>Full Name:</label>
                                    <input
                                        type='text'
                                        // placeholder='Enter your Name...'
                                        className='w-[100%] sm:w-[95%] lg:w-[90%] h-14 border rounded-[6px] pl-4  text-lg border-gray-500 px-3 outline-none mt-2 sm:mt-0 bg-[#ebebeb48]'
                                        value={"Aman Bhujel"}
                                        readOnly
                                    />
                                </div> <div className='flex flex-col'>
                                    <label className='font-semibold mt-2 sm:mt-4 mb-2'>Email:</label>
                                    <input
                                        type='text'
                                        // placeholder='Enter your Name...'
                                        className='w-[100%] sm:w-[95%] lg:w-[90%] h-14 border rounded-[6px] pl-4  text-lg border-gray-500 px-3 outline-none mt-2 sm:mt-0 bg-[#ebebeb48]'
                                        value={"bhujelaman20@gmail.com"}
                                        readOnly
                                    />
                                </div> <div className='flex flex-col'>
                                    <label className='font-semibold mt-2 sm:mt-4 mb-2'>City:</label>
                                    <input
                                        type='text'
                                        // placeholder='Enter your Name...'
                                        className='w-[100%] sm:w-[95%] lg:w-[90%] h-14 border rounded-[6px] pl-4  text-lg border-gray-500 px-3 outline-none mt-2 sm:mt-0 bg-[#ebebeb48]'
                                        value={"Lalitpur"}
                                        readOnly
                                    />
                                </div> <div className='flex flex-col'>
                                    <label className='font-semibold mt-2 sm:mt-4 mb-2'>Country:</label>
                                    <input
                                        type='text'
                                        // placeholder='Enter your Name...'
                                        className='w-[100%] sm:w-[95%] lg:w-[90%] h-14 border rounded-[6px] pl-4  text-lg border-gray-500 px-3 outline-none mt-2 sm:mt-0 bg-[#ebebeb48]'
                                        value={"Nepal"}
                                        readOnly
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='font-semibold mt-2 sm:mt-4 mb-2'>Gender:</label>
                                    <input
                                        type='text'
                                        // placeholder='Enter your Name...'
                                        className='w-[100%] sm:w-[95%] lg:w-[90%] h-14 border rounded-[6px] pl-4  text-lg border-gray-500 px-3 outline-none mt-2 sm:mt-0 bg-[#ebebeb48]'
                                        value={"Male"}
                                        readOnly
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='font-semibold mt-2 sm:mt-4 mb-2'>Age:</label>
                                    <input
                                        type='text'
                                        // placeholder='Enter your Name...'
                                        className='w-[100%] sm:w-[95%] lg:w-[90%] h-14 border rounded-[6px] pl-4  text-lg  border-gray-500 px-3 outline-none mt-2 sm:mt-0 bg-[#ebebeb48]'
                                        value={"19"}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </>}
        </main>
    )
};

export default Page;


