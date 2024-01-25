
import Services from "@/components/Services";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import WhoWeAre from "@/components/WhoWeAre";
import Feedback from "@/components/Feedback";
import WhatWeBelieve from "@/components/WhatWeBelieve";
import Logo from '../assets/logo.png';
import Image from "next/image";
import Link from "next/link";

const Home = () => {

  return (
    <main className="bg-white  w-full h-screen">
      <div className='w-full h-auto flex flex-col  justify-center items-center  '>
        <Navbar />
        <HeroSection />
        {/* <div className="w-full h-40"> */}
          {/* <Link href={'http://localhost:8080/join?room=roomtest&name=test'}>
            <button className="bg-red-400">Join appointment</button>
          </Link> */}
        {/* </div> */}
        <WhoWeAre />
        <Services />
        <WhatWeBelieve />
        <Feedback />
        <div className="flex w-full justify-center items-center bg-[#14110f]">
          <div className="flex justify-center gap-x-[15%] sm:gap-x-[20%] lg:gap-x-0 lg:justify-between items-start w-[99%] lg:w-[61rem] xl:w-[70rem] 2xl:w-[85rem] h-64 text-white ">
            <div className="mt-10 hidden lg:block">
              <Image src={Logo} width={200} height={200} alt="Nephara" />
            </div>
            <div className="mt-10">
              <h6 className="font-bold sm:text-lg xl:text-xl">Navigate</h6>
              <ul className="mt-3 gap-y-1 flex flex-col text-sm xl:text-base">
                <li className="cursor-pointer hover:underline">Home</li>
                <li className="cursor-pointer hover:underline">Blogs</li>
                <li className="cursor-pointer hover:underline">Appointments</li>
                <li className="cursor-pointer hover:underline">Profile</li>
              </ul>
            </div>
            <div className="mt-10">
              <h6 className="font-bold sm:text-lg xl:text-xl">Assistance</h6>
              <ul className="mt-3 gap-y-1 flex flex-col text-sm xl:text-base">
                <li className="cursor-pointer hover:underline">FAQs</li>
                <li className="cursor-pointer hover:underline">Blogs</li>
                <li className="cursor-pointer hover:underline">Privacy Policy</li>
              </ul>
            </div>
            <div className="mt-10">
              <h6 className="font-bold sm:text-lg xl:text-xl">Social</h6>
              <ul className="mt-3 gap-y-1 flex flex-col text-sm xl:text-base">
                <li className="cursor-pointer hover:underline">Email</li>
                <li className="cursor-pointer hover:underline">Instagram</li>
                <li className="cursor-pointer hover:underline">Tiktok</li>
                <li className="cursor-pointer hover:underline">Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
