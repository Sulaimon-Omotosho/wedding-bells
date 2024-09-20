import CountdownTimer from './CountdownTimer'
import { Button } from './ui/button'

const MainPage = () => {
  return (
    <div className='flex items-center flex-col gap-10 mt-[50%] md:mt-[30%] xl:mt-[2%] pb-28'>
      <CountdownTimer />
      <p className='font-indie text-[60px] md:text-[80px] xl:text-[100px] text-white uppercase'>
        Taye & Ope
      </p>
      <div className='flex items-center rounded-full bg-slate-50 w-[60%] md:w-[50%] lg:w-[40%] md:px-8 xl:px-20 py-4 xl:py-6 text-slate-600 text-center'>
        <p className='flex flex-col items-center justify-center text-sm lg:text-xl w-[100vw]'>
          SATURDAY <span>Nov 11, 2024</span>
        </p>
        <hr className='w-[150px] rotate-90 border-black bg-black' />
        <p className='flex flex-col items-center justify-center text-sm lg:text-xl w-[100vw]'>
          3:00PM <span>Akoko, Ondo</span>
        </p>
      </div>
      <Button className='mt-12 text-white border-white-600 hover:border-none hover:bg-slate-600 border-[1px] px-8 rounded-full'>
        RSVP
      </Button>
    </div>
  )
}

export default MainPage
