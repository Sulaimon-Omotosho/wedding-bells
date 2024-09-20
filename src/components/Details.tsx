import Image from 'next/image'

export default function Details() {
  return (
    <div className='bg-slate-600 lg:px-[150px] xl:px-[200px] py-16 lg:py-28 text-white flex flex-col-reverse lg:flex-row'>
      <div className='flex-1 md:pl-16 lg:px-0 pt-8 lg:pt-0 text-center md:text-left'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl pb-10 md:pb-14'>
          Wedding Details
        </h1>
        <div className='flex flex-col gap-6'>
          <div className=''>
            <h2 className='uppercase text-2xl pb-[10px]'>date</h2>
            <p className='flex flex-col text-lg'>
              November 16th, 2024 <span>12:00pm - 5:00pm</span>
            </p>
          </div>
          <div className=''>
            <h2 className='uppercase text-2xl pb-[10px]'>reception location</h2>
            <p className='flex flex-col text-lg'>
              10, Adebayo street, <span>Akoko, Ondo</span>
            </p>
          </div>
          <div className=''>
            <h2 className='uppercase text-2xl pb-[10px]'>color</h2>
            <p className='flex flex-col text-lg'>Slate | Purple</p>
          </div>
        </div>
      </div>
      <div className='flex-1 flex items-center justify-center lg:justify-normal'>
        <div className='bg-yellow-700 w-[320px] h-[450px] ml-16 relative'>
          <Image
            src='/assets/images/couple.jpg'
            alt='couple'
            width={1000}
            height={1000}
            className='w-full h-[90%] absolute top-[5%] right-[20%]'
          />
        </div>
      </div>
    </div>
  )
}
