'use client'
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "./landing/HeroSection";
import WhoWeAre from "./landing/WhoWeAre";
import Feedback from "./landing/Feedback";
import Features from "./landing/Features";
import Footer from "@/components/Footer";
import { useUserStore } from "@/stores/userStore";
import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { useLoadingStore } from "@/stores/LoadingStore";
import Loader from "@/components/Loader";
import { useAuthorizedStore } from "@/stores/AuthorizedStore";
import FAQ from "./landing/FAQ";
import PremiumCareInfosAndImages from "./landing/PremiumCareInfosAndImages";
import { getUserInfo } from "@/components/utils/GetUserInfo";
import { GET_USER_INFO } from "@/apollo_client/Queries";

const Home = () => {
  const setUserInfo = useUserStore((state) => state.setUserInfo);
  const isLoading = useLoadingStore((state) => state.isLoading);
  const setIsLoading = useLoadingStore((state) => state.setIsLoading);
  const isAuthorized = useAuthorizedStore((state) => state.isAuthorized);            //----------------------- Cause of Call Stack error in line 31
  const setIsAuthorized = useAuthorizedStore((state) => state.setIsAuthorized);

  const [getUserInfoByToken] = useLazyQuery(GET_USER_INFO, {
    fetchPolicy: "no-cache"
  });

  useEffect(() => {
    getUserInfo(isAuthorized, setIsAuthorized, getUserInfoByToken, setUserInfo);
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="bg-[#f9fdff]  w-screen h-auto min-h-screen flex flex-col items-center justify-center">
      {isLoading ? <Loader />
        :
        <div className='w-full h-auto overflow-x-hidden flex flex-col  justify-center items-center'>
          <Navbar />
          <HeroSection />
          <Features />
          <WhoWeAre />
          <PremiumCareInfosAndImages />
          <Feedback />
          <FAQ />
          <Footer />
        </div>
      }

    </main>
  );
};

export default Home;
