'use client'
import React, { useState } from 'react'
import { Signin, Signup } from './components/AuthFormComponent'

const Page = () => {
    const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(true)
    return (
        <div className="flex w-full justify-center items-center bg-white">
            <div className="flex flex-col lg:flex-row justify-center items-center w-full   xl:max-w-[95rem] 2xl:w-full 2xl:max-w-[120rem] 2xl:h-screen 2xl:max-h-[83rem]  h-screen">
                {isSignUpOpen ?
                    <Signup setIsSignUpOpen={setIsSignUpOpen} />
                    :
                    <Signin setIsSignUpOpen={setIsSignUpOpen} />}
            </div>
        </div>
    )
}

export default Page;
