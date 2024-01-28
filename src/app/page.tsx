
import Navbar from "@/components/Navbar";

import HeroSection from "./landing/HeroSection";
import WhoWeAre from "./landing/WhoWeAre";
import WhatWeBelieve from "./landing/WhatWeBelieve";
import Feedback from "./landing/Feedback";
import Services from "./landing/Services";
import Footer from "@/components/Footer";

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
        <Footer />
      </div>
    </main>
  );
};

export default Home;
