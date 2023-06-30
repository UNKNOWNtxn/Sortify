'use client'

import { useEffect, useState } from 'react'

export default function Sortify() {

  const [arrayLength, setArrayLength] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setInputValue(value);
  }

  const handleSubmit = () => {
    setArrayLength(parseInt(inputValue, 10));
  }

  return (
    <div className='min-w-screen min-h-screen bg-gradient-to-b from-sky-400 via-sky-300 to-sky-100'>

      <div className='flex flex-col justify-center items-center p-5 mb-14'>
        <div className='bg-light-gray rounded-xl p-5 drop-shadow-xl	'>
          <h1 className='sm:text-xl md:text-2xl font-pressStart animate-appearFromBottom1 text-4xl text-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-sky-800 via-sky-400 to-sky-200'>Sortify</h1>
          <p className='sm:text-xxs md:text-sm font-pressStart animate-appearFromBottom2 text-base text-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-sky-800 via-sky-400 to-sky-200'>visualize your sorting algorithms with ease </p>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center space-y-2'>
        <input
          className='bg-light-gray text-center rounded-md drop-shadow-xl'
          onChange={handleInputChange}
          value={inputValue}
          inputMode="numeric"
          pattern="[0-9]*"
          type="text"
          placeholder="length"
        />
        <button
          className='bg-light-gray text-center rounded-md drop-shadow-xl px-2'
          onClick={handleSubmit}
        >
          Enter
        </button>
        <h3 className='font-bebas text-xl'>Items to be in array: {arrayLength}</h3>
      </div>

    </div>
  )
}
