import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='flex items-center justify-center h-16 bg-mainBg fixed w-full z-10'>
      <div className='flex gap-6 md:gap-12 items-center justify-center border-t-[1px] border-b-[1px] px-8 py-[6px] border-black'>
        <Link
          href='/#Home'
          className='text-md md:text-xl cursor-pointer rounded-full'
        >
          Home
        </Link>
        <Link
          href={'/#OurStory'}
          className='text-md md:text-xl cursor-pointer rounded-full'
        >
          Our Story
        </Link>
        <Link
          href={'/#Details'}
          className='text-md md:text-xl cursor-pointer rounded-full'
        >
          Details
        </Link>
        <Link
          href={'/#Gallery'}
          className='text-md md:text-xl cursor-pointer rounded-full'
        >
          Gallery
        </Link>
        <Link
          href='/rsvp'
          className='text-md md:text-xl cursor-pointer rounded-full'
        >
          RSVP
        </Link>
      </div>
    </div>
  )
}
