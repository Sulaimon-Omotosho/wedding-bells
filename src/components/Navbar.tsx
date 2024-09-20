export default function Navbar() {
  return (
    <div className='flex items-center justify-center h-16 bg-mainBg fixed w-full z-10'>
      <div className='flex gap-6 md:gap-12 items-center justify-center border-t-[1px] border-b-[1px] px-8 py-[6px] border-black'>
        <p className='text-md md:text-xl cursor-pointer rounded-full'>Home</p>
        <p className='text-md md:text-xl cursor-pointer rounded-full'>
          Our Story
        </p>
        <p className='text-md md:text-xl cursor-pointer rounded-full'>
          Details
        </p>
        <p className='text-md md:text-xl cursor-pointer rounded-full'>
          Gallery
        </p>
        <p className='text-md md:text-xl cursor-pointer rounded-full'>RSVP</p>
      </div>
    </div>
  )
}
