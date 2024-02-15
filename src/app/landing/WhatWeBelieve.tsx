"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Nurse from '@/assets/nurse-smile.jpg'

const WhatWeBelieve = () => {
    const WhatweBelieveRef = useRef<HTMLDivElement>(null);
    const [startAnimation, setStartAnimation] = useState<Boolean>(false);

    const handleScroll = () => {
        if (WhatweBelieveRef.current) {
            const elementTop = WhatweBelieveRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            setStartAnimation(elementTop < windowHeight);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
                // eslint-disable-next-line react-hooks/exhaustive-deps

    }, []);
    return (
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20 border-t border-gray-800">
    
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Premium care for your skin</div>
                <h1 className="h2 text-2xl mb-4">Reach Out to our Skin care Specialist now</h1>
                <p className="text-xl text-gray-400">Skin Doctor with 10 years of experience with Masters Degree</p>
              </div>
    
              {/* Items */}
              <div className="grid gap-20">
    
                {/* 1st item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Image */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={"https://cdna.artstation.com/p/assets/images/images/008/265/652/large/siwoo-kim-546-max.jpg"} width={540} height={405} alt="Features 01" />
                  </div>
                  {/* Content */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right" data-aos-delay="150">
                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">Premium Service and spend Less</div>
                      <h3 className="h3 mb-3">Low cost Skin care service</h3>
                      <p className="text-xl text-gray-400 mb-4">Do skin skin check up with our certified Skin specialist doctor</p>
                    </div>
                  </div>
                </div>
    
                {/* 2nd item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Image */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={"https://r2.starryai.com/results/376525370/0f90d74a-d037-436f-b1a2-d3844b10caf1.webp"} width={540} height={405} alt="Features 02" />
                  </div>
                  {/* Content */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left"  data-aos-delay="150">
                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">Comfort of your home</div>
                      <h3 className="h3 mb-3">Easy Scheduleing from your home in your home</h3>
                      <p className="text-xl text-gray-400 mb-4">Talk or video call with our doctor.</p>
                    </div>
                  </div>
                </div>
    
                {/* 3rd item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Image */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={"https://img.freepik.com/premium-photo/photo-cyberpunk-woman-showing-backfuturistic-clothes_740020-532.jpg"} width={540} height={405} alt="Features 03" />
                  </div>
                  {/* Content */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right"  data-aos-delay="150">
                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">Our Support</div>
                      <h3 className="h3 mb-3">Exceptional Support</h3>
                      <p className="text-xl text-gray-400 mb-4">You can have our out of the world bestest of the best support for free</p>
                    </div>
                  </div>
                </div>
    
              </div>
    
            </div>
          </div>
        </section>
      )
};

export default WhatWeBelieve;