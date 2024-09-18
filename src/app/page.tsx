import CountdownTimer from '@/components/CountdownTimer'
import MainPage from '@/components/MainPage'
import OurStory from '@/components/OurStory'

export default function Home() {
  return (
    <div className=' w-full h-screen bg-mainBg bg-cover bg-center'>
      <div className='bg-slate-800 bg-opacity-30 h-[100vh] w-full pt-[15%] overflow-scroll remove-scrollbar'>
        <MainPage />
        <OurStory />
      </div>
    </div>
  )
}
