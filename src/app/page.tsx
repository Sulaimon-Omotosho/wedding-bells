import Details from '@/components/Details'
import Gallery from '@/components/Gallery'
import MainPage from '@/components/MainPage'
import OurStory from '@/components/OurStory'

export default function Home() {
  return (
    <div className=' w-full h-screen bg-mainBg bg-cover bg-center'>
      <div className='bg-slate-800 bg-opacity-30 h-[100vh] w-full overflow-scroll remove-scrollbar'>
        <section id='Home' className=' pt-[15%]'>
          <MainPage />
        </section>
        <section id='OurStory'>
          <OurStory />
        </section>
        <section id='Details'>
          <Details />
        </section>
        <section id='Gallery'>
          <Gallery />
        </section>
      </div>
    </div>
  )
}
