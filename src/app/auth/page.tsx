'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import nurse from '@/assets/girl.jpg'
import {  Signin, Signup } from './components/AuthFormComponent'

const Page = () => {
    const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(true)
    return (
        <div className="flex w-full justify-center items-center bg-white">
            <div className="flex flex-col lg:flex-row justify-center items-center w-full   xl:max-w-[95rem] 2xl:w-full 2xl:max-w-[120rem] 2xl:h-screen 2xl:max-h-[83rem]  h-screen">
                {/* <div className='hidden lg:flex w-[50%] relative h-full  items-end'>
                    <Image src={nurse} width={1500} height={1500} className='w-full h-full absolute object-cover bg-red-100 z-10' alt='nurse' />
                    <div style={{
                        position: 'absolute',
                        content: '""',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'black',
                        opacity: 0.5,
                        zIndex: 20,
                        top: 0,
                        left: 0,
                        display: 'flex',
                        flexDirection: 'column',

                    }}>

                    </div>
                    <div className='z-20 flex flex-col ml-12 mb-16 '>
                        <p className='text-xl xl:text-2xl font-semibold text-white w-[90%] flex flex-wrap'>
                             I am so glad I gave this a try, it was an amazing experience and everything from appointment to getting report was with in 2 days just my home.
                        </p>
                        <p className='text-base xl:text-lg font-medium text-white mt-5'>-Kaminari Sunde, Australia</p>
                    </div>
                </div> */}
                {isSignUpOpen ?
                    <Signup setIsSignUpOpen={setIsSignUpOpen} />
                    :
                    <Signin setIsSignUpOpen={setIsSignUpOpen} />}
            </div>
        </div>
    )
}

export default Page;
