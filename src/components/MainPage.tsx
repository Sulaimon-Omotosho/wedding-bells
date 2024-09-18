import CountdownTimer from './CountdownTimer'
import { Button } from './ui/button'

const MainPage = () => {
  return (
    <div className='flex items-center flex-col gap-10 mt-[50%] md:mt-[30%] xl:mt-[2%]'>
      <CountdownTimer />
      <p className='text-[60px] md:text-[80px] xl:text-[100px] text-white uppercase'>
        Taye & Ope
      </p>
      <div className='flex items-center justify-around rounded-full bg-slate-50 w-[95%] md:w-[60%] xl:w-[40%] px-6 md:px-12 xl:px-20 py-4 md:py-6 text-slate-600 text-center'>
        <p className='flex flex-col items-center justify-center text-lg md:text-xl w-full'>
          SATURDAY <span>Nov 11, 2024</span>
        </p>
        <hr className='w-[150px] rotate-90 border-black' />
        <p className='flex flex-col items-center justify-center text-lg md:text-xl w-full'>
          3:00PM <span>Akoko, Ondo State</span>
        </p>
      </div>
      <Button className='mt-12 text-slate-600 hover:text-white border-slate-600 hover:border-white border-[1px] px-8 rounded-full'>
        RSVP
      </Button>
    </div>
  )
}

export default MainPage
