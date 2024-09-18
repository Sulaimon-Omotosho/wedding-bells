import CountdownTimer from '@/components/CountdownTimer'

export default function Home() {
  return (
    <div className='flex items-center justify-center w-full h-[100vh] bg-mainBg bg-cover bg-center'>
      <div className='bg-slate-800 bg-opacity-20 h-[100vh] w-full flex flex-col gap-4 items-center justify-center'>
        <CountdownTimer />
        <p className='text-2xl text-white font-bold'> Wedding Bells</p>
      </div>
    </div>
  )
}
