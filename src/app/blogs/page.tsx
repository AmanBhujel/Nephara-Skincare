import { cn } from "@/utils/cn";
import React from "react";
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { HoverEffect } from "./components/card-hover-effect";
import { info } from "./components/file";

const card = () => {
    return (
        <div className='flex flex-col min-h-screen bg-white'>
            <Navbar />
            <div className="max-w-5xl mx-auto px-8">
            <h1 className="text-center text-4xl font-bold my-8 text-dark-silver">Learn More about us</h1>
                <HoverEffect items={info} />
            </div>
            <div className="fixed bottom-0 left-0 right-0">
                <Footer />
            </div>
        </div>
    );
};


export default card;