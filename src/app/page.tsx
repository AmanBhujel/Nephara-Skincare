import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-white flex w-full h-screen  '>
      <div className='flex w-1/2 h-full items-center justify-center'>
        <button className='bg-red-400 py-2 px-3 rounded-2xl'>AI-Checkup</button>
      </div>
      <div className='flex w-1/2 h-full items-center justify-center'>
      <button className='bg-red-400 py-2 px-3 rounded-2xl'>Doctor-Appointment</button>
      </div>
    </main>
  )
}
