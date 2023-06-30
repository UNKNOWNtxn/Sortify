'use client'

import { useEffect, useState } from 'react'

export default function Sortify() {

  const [bubbleSort, setBubbleSort] = useState("Hello KEv")

  function doBubbleSort() {
    setBubbleSort( bubbleSort + 1)
  }

  useEffect(() => {
    if (bubbleSort) {
      console.log(bubbleSort)
    }
  }, [bubbleSort])

  return (
    <div className='min-w-screen min-h-screen bg-gradient-to-b from-sky-400 via-sky-300 to-sky-100'>
      <div className='flex flex-col justify-center items-center p-5'>
        <div className='bg-light-gray rounded-xl p-5 drop-shadow-xl	'>
          <h1 className='sm:text-xl md:text-2xl font-pressStart animate-appearFromBottom1 text-4xl text-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-sky-800 via-sky-400 to-sky-200'>Sortify</h1>
          <p className='sm:text-xxs md:text-sm font-pressStart animate-appearFromBottom2 text-base text-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-sky-800 via-sky-400 to-sky-200'>Visualize your sorting algorithms with ease </p>
        </div>
      </div>
    </div>
  )
}
