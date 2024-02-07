'use client'
import React, { useState } from 'react';
// import AppointmentInfo from '../appointments/components/AppointmentInfo';
import Sidebar from '../components/sidebar';
import { MdNavigateNext } from "react-icons/md";
import { SlLock, SlLogout } from "react-icons/sl";
import { LuUserSquare2 } from "react-icons/lu";
import { useLogoutStore } from '@/stores/LogoutStore';
import { gql, useMutation } from '@apollo/client';

const UPDATE_USER = gql`
mutation UpdateUserDetails($photo: String!, $name: String!, $age: Int!, $gender: String!, $phoneNumber: String!, $city: String!, $country: String!) {
    updateUserDetails(photo: $photo, name: $name, age: $age, gender: $gender, phoneNumber: $phoneNumber, city: $city, country: $country) {
      city,country,gender,phoneNumber,photo,name
    }
  }`;

const Page = () => {
    const setIsLogoutModalOpen = useLogoutStore((state) => state.setIsLogoutModalOpen);
    const [updateUserDetails] = useMutation(UPDATE_USER);

    const [fullName, setFullName] = useState('Aman Bhujel');
    const [phoneNumber, setPhoneNumber] = useState('+977 98326968372');
    const [gender, setGender] = useState('Male');
    const [age, setAge] = useState('19');
    const [city, setCity] = useState('Lalitpur');
    const [country, setCountry] = useState('Nepal');

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



    const handleLogout = () => {
        setIsLogoutModalOpen(true);
    }
    return (
        <main className='w-full h-screen flex  items-center bg-[#f6f8fc] relative'>
            <Sidebar />
            <div className='w-[20%] min-w-[23rem] max-w-[25rem] h-full px-2 ml-8'>
                <p className='text-4xl font-medium  tracking-wide mt-10'>Account Settings</p>
                <ul className='w-full mt-16'>
                    <li className='border-b-2 font-medium h-16 flex justify-between items-center cursor-pointer'>
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
            <div className='w-[50%] h-full flex justify-center border-l-2 ml-[5%] '>
                <div className='w-[50%]'>
                    <p className='mt-12 text-2xl font-medium'>Edit Your Profile</p>
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
                    <div className='flex gap-x-2'>
                        <div className='flex flex-col mt-6'>
                            <label className='text-gray-600 font-medium mb-1 '>
                                Gender
                            </label>
                            <input
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className='h-12 border pl-2 w-[100%] outline-none rounded-[6px] text-lg'
                            />
                        </div>
                        <div className='flex flex-col mt-6'>
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
                    <button className='w-full rounded-[8px] bg-[#7650e0] hover:bg-[#7e59e4] font-medium mt-8 text-lg py-2 text-white' onClick={handleUpdateUser}>Save Changes</button>
                </div>
            </div>
            {/* <AppointmentInfo/> */}
        </main>
    )
};

export default Page;


