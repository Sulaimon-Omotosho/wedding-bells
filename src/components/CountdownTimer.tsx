'use client'

import { useEffect, useState } from 'react'

export default function CountdownTimer() {
  const targetDate = new Date(`11/11/2024`).getTime()
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime())

  const formatTime = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((time % (1000 * 60)) / 1000)
    return {
      days: String(days).padStart(2, '0'),
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1000)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const { days, hours, minutes, seconds } = formatTime(timeLeft)

  return (
    <div>
      <span className='font-bold text-5xl text-yellow-300'>
        {days}:{hours}:{minutes}:{seconds}
      </span>
    </div>
  )
}
