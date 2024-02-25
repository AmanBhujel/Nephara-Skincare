const DoctorBlogContent = () => {
    return (
        <div className='w-[98%] sm:w-[90%] md:w-[80%] lg:w-[70%] h-auto flex flex-col gap-y-6 lg:gap-y-10 '>
            <div id="introduction" className='w-full'>
                {/* <h6 className='text-xl sm:text-2xl xl:text-3xl font-medium  lg:mb-2'>Introduction</h6> */}
                <p className='text-[#666666] sm:text-lg xl:text-xl text-justify '>Dr. Keyal, a distinguished dermatologist, graduated from Tianjin Medical University, China, before furthering her studies with a Master&apos;s and PhD in Dermatology from Shanghai Skin Disease Hospital (affiliated with Tongji University, Shanghai, China) in 2018. With a rich academic background, she embarked on her professional journey, serving in esteemed hospitals in Kathmandu, including DI Skin Health & Referral Centre (DISHARC) and Let Mein Korean Aesthetic Skin Hospital. Currently, Dr. Keyal offers her expertise at Nepal Mediciti Hospital, where she continues to provide exemplary care and contribute to the advancement of dermatological practice.</p>
            </div>
            <div id="education" className='w-full'>
                <h6 className='text-xl sm:text-2xl xl:text-3xl font-medium  lg:mb-2'>Education</h6>
                <p className='text-[#666666] sm:text-lg xl:text-xl text-justify'>
                    Dr. Keyal holds a distinguished educational background, graduating from Tianjin Medical University, China, before pursuing her master&apos;s and PhD in Dermatology at Shanghai Skin Disease Hospital (affiliated with Tongji University, Shanghai, China) in 2018. This academic journey has equipped her with a robust foundation in dermatological science, enabling her to provide comprehensive care and innovative treatments to her patients.</p>
                <p className="text-base sm:text-lg font-semibold text-[#666666] mt-2">-M.B.B.S. from Tianjin Medical University</p>
                <p className="text-base sm:text-lg font-semibold text-[#666666]">-M.D. from Tongji Hospital (Tongji University)</p>
                <p className="text-base sm:text-lg font-semibold text-[#666666]">-Ph.D. from Shanghai Skin Disease Hopital (Tongji University)</p>
            </div>
            <div id="testimonials" className='w-full'>
                <h6 className='text-xl sm:text-2xl xl:text-3xl font-medium  lg:mb-2'>Patient Testimonials</h6>
                <p className='text-[#666666] sm:text-lg xl:text-xl text-justify'>Before consulting with Dr. Uma, I struggled with persistent acne on my face and back, along with frustrating whiteheads on my nose. However, after seeking her expertise, she devised a simple yet effective skincare plan that targeted my specific concerns. I&apos;m delighted to say that her recommendations yielded fantastic results! My skin has never looked better, and I&apos;m grateful to Dr. Uma for her professional guidance and support.</p>
                <div className='text-[#000000] sm:text-lg xl:text-xl text-justify flex flex-col w-full justify-end items-end '>
                    <p className="text-sm sm:text-base font-semibold">-Aman Bhujel</p>
                    <p className="text-sm sm:text-base font-medium">Software Engineer</p>
                </div>
                {/* ----2nd testimonial------ */}
                <p className='text-[#666666] sm:text-lg xl:text-xl text-justify mt-4 sm:mt-6'>In the event of any unforeseen circumstances preventing you from attending your scheduled appointment, you have the option to request a refund via email. Refunds will be processed promptly within one week of your request. Alternatively, you may choose to reschedule your appointment for a more convenient date and time by contacting us at nephara@outlook.com.</p>
                <div className='text-[#000000] sm:text-lg xl:text-xl text-justify flex flex-col w-full justify-end items-end '>
                    <p className="text-sm sm:text-base font-semibold">-Evan Sunde</p>
                    <p className="text-sm sm:text-base font-medium">Student</p>
                </div>
            </div>
        </div>
    )
};

export default DoctorBlogContent;