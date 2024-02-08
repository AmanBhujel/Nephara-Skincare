'use client'
import Navbar from "@/components/Navbar";
import HeroSection from "./landing/HeroSection";
import WhoWeAre from "./landing/WhoWeAre";
import WhatWeBelieve from "./landing/WhatWeBelieve";
import Feedback from "./landing/Feedback";
import Services from "./landing/Services";
import Footer from "@/components/Footer";
import { useUserStore } from "@/stores/userStore";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { useEffect } from "react";
import ToastMessage from "@/components/utils/ToastMessage";

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

const Home = () => {
  const userInfo = useUserStore((state) => state.userInfo);
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  const [getUserInfoByToken] = useLazyQuery(GET_USER_INFO ,{
    fetchPolicy: "no-cache" 
  });


  useEffect(() => {
    const getUserInfo = async () => {
      const response = await getUserInfoByToken();
      console.log(response, "from useeffect from landing")
      const { status, message, user } = response.data.getUserInfoByToken;
      // ToastMessage(status, message);
      if (user) {
        setUserInfo({ email: user.email, name: user.name, photo: user.photo, gender: user.gender, age: user.age, city: user.city, country: user.country })
      }
    }
    getUserInfo()
  }, [])

  console.log("useriNFO FROM STORE ", userInfo)
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
        <Footer />
      </div>
    </main>
  );
};

export default Home;
