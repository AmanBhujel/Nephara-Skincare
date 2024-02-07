'use client'
import React, { useState } from 'react'
import TimeZoneSelector from './components/TimeZoneSelector';
import DatePickerDemo from '../book-appointment/components/DatePicker';

const Page = () => {
    const [selectedTimeZone, setSelectedTimeZone] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState('');

    return (
        <div className='w-full h-auto lg:h-full flex justify-center'>
            <div className='w-[95%] lg:w-[78rem] lg:min-w-[78rem] xl:w-[90rem] h-auto lg:h-[50rem] pb-12 sm:pb-8  xl:h-[49rem] mt-12 flex flex-col items-center p-0'>
                <h3 className='text-4xl md:text-5xl font-semibold text-[#0736bc]'>Make an appointment</h3>
                <p className='text-sm sm:text-base md:text-lg text-[#6e6e6e] font-medium mt-4 text-center'>By filling out the form, you automatically make an appointment with a doctor.</p>
                <p className='text-sm sm:text-base md:text-lg text-[#6e6e6e] font-medium text-center'>A reminder will be sent in the email.</p>
                <div className='w-full md:w-[80%]  h-auto lg:h-[48rem] mt-8 md:border md:shadow-xl flex  items-center lg:justify-around flex-col lg:flex-row'>

                    {/* ---------GENERAL INFORMATION------------- */}
                    <div className='w-[95%] sm:w-[90%] md:w-[80%] lg:w-[45%] h-full  md:pl-8 md:pt-10'>
                        <p className='text-[#0736bc] text-2xl sm:text-3xl font-medium'>General information</p>
                        <p className='font-medium mt-4 mb-2'>Select Timezone:</p>
                        <TimeZoneSelector onTimeZoneChange={setSelectedTimeZone} />
                        <div className='mt-4 flex flex-row gap-x-[5%]'>
                            <div className='flex flex-col w-[45%]'>
                                <label className='font-semibold mt-2 sm:mt-4 mb-2'>Date*</label>
                                <DatePickerDemo onDateChange={setSelectedDate} />
                            </div>
                            <div className='flex flex-col w-[45%] '>
                                <label className='font-medium mt-2 sm:mt-4 mb-2'>Time*</label>
                                <select
                                    className='w-[100%] sm:w-full h-10 border rounded-[6px] border-gray-500 px-3 outline-none  bg-white '
                                    value={selectedTime}
                                    onChange={(e) => setSelectedTime(e.target.value)}
                                >
                                    <option>--Select Time</option>
                                    <option value='10:00 AM'>10:00 AM</option>
                                    <option value='11:00 AM'>11:00 AM</option>
                                    <option value='12:00 PM'>12:00 PM</option>
                                    <option value='1:00 PM'>1:00 PM</option>
                                    <option value='2:00 PM'>2:00 PM</option>
                                    <option value='3:00 PM'>3:00 PM</option>
                                    <option value='4:00 PM'>4:00 PM</option>
                                    <option value='5:00 PM'>5:00 PM</option>
                                </select>
                            </div>


                        </div>
                        <div className='mt-4 flex flex-col'>
                            <label className='font-medium sm:mb-2 mt-4'>Reason for appointment*</label>
                            <select
                                className='w-[100%] sm:w-[95%] h-10 border rounded-[6px] border-gray-500 px-3 outline-none bg-white'
                            >
                                <option value="consultation">Consultation</option>
                                <option value="routine-exam">Routine Skin Examination</option>
                                <option value="suspicious-lesions">Suspicious Moles or Lesions</option>
                                <option value="allergy-irritations">Skin Allergies or Irritations</option>
                                <option value="sun-damage">Sun Damage Assessment</option>
                            </select>
                        </div>
                        <div className='mt-4 flex flex-col'>
                            <label className='font-medium sm:mb-2 mt-4'>Select Doctor*</label>
                            <select
                                className='w-[100%] sm:w-[95%] h-10 border rounded-[6px] border-gray-500 px-3 outline-none bg-white'
                            >
                                <option value="consultation">Dr. Evan Sunde</option>
                                <option value="routine-exam">Dr Sunde Evan</option>
                            </select>
                        </div>
                    </div>

                    {/* ------PERSONAL INFORMATION---------- */}
                    <div className='w-[95%] sm:w-[90%] md:w-[80%] lg:w-[45%] h-full md:pl-8 pt-10 flex flex-col'>
                        <p className='text-[#0736bc] text-2xl sm:text-3xl font-medium'>Personal information</p>
                        <p className='font-medium mt-2 sm:mt-4 mb-2'>Patient Name:</p>
                        <input
                            type='text'
                            placeholder='Enter your Name...'
                            className='w-[100%] sm:w-[95%] lg:w-[90%] h-10 border rounded-[6px] border-gray-500 px-3 outline-none mt-2 sm:mt-0'
                            // value={"Aman Bhujel"}
                        />
                        <p className='font-medium mt-4'>Email*</p>
                        <input
                            type='text'
                            placeholder='Email Address'
                            className='w-[100%] sm:w-[95%] lg:w-[90%] h-10 border rounded-[6px] border-gray-500 px-3 outline-none mt-2 sm:mt-0'
                            value={"bhujelaman20@gmail.com"}
                            readOnly
                        />
                        <p className='font-medium mt-8 mb-2'>Do you have allergies?</p>
                        <div className='flex gap-x-8 text-sm mt-0'>
                            <label>
                                <input type="radio" name="option" value="yes" />
                                <span className='ml-1'> Yes</span>
                            </label>
                            <label>
                                <input type="radio" name="option" value="no" />
                                <span className='ml-1'> No</span>
                            </label>
                            <label>
                                <input type="radio" name="option" value="notSure" />
                                <span className='ml-1'> Not Sure</span>
                            </label>

                        </div>
                        <p className='font-medium mt-4 mb-2'>Comment</p>
                        <textarea
                            placeholder='Something that doctor should know...'
                            className='w-[100%] sm:w-[95%] lg:w-[90%] h-24 pt-2 border rounded-[6px] border-gray-500 px-3 outline-none mt-2 sm:mt-0 text-sm'
                        />
                        <label className='mt-4 text-sm'>
                            <input type="checkbox" name="option" value="notSure" />
                            <span className='ml-1'>
                                I have read and agree with <span className='text-blue-400 underline cursor-pointer'>Terms and Conditions</span>
                            </span>
                        </label>
                        <button className='text-white bg-[#0736bc] hover:bg-[#0737bcda] py-2 font-medium mt-4 w-40 rounded-[8px] mb-6 lg:mb-0'>
                            Confirm
                        </button>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Page