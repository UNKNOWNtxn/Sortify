'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link';

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
    <div className='min-w-screen min-h-screen flex flex-col bg-gradient-to-b from-sky-400 via-sky-300 to-sky-100'>

      <div className='flex-grow flex flex-col justify-center items-center p-7 sm:p-3 md:p-5'>
        <div className='bg-light-gray rounded-xl p-5 drop-shadow-xl'>
          <h1 className='sm:text-xl md:text-2xl font-pressStart animate-appearFromBottom1 text-4xl text-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-sky-800 via-sky-400 to-sky-200'>Sortify</h1>
          <p className='sm:text-xxs md:text-sm font-pressStart animate-appearFromBottom2 text-base text-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-sky-800 via-sky-400 to-sky-200'>visualize your sorting algorithms with ease </p>
        </div>

        <div className='flex flex-grow w-full justify-center rounded-xl p-3 mt-6 bg-light-gray drop-shadow-xl'>
          <div className='flex-grow flex flex-col items-center rounded-xl bg-transparent border-8 border-sky-400'>
            <div className='basis-10/12 min-w-full bg-black'>

            </div>
            <div className='basis-2/12 flex flex-col items-center justify-start w-full m-3'>
              <form className='flex flex-col items-center justify-center'>
                <div className='flex flex-row sm:flex-col sm:space-y-3 items-center justify-center space-x-3 sm:space-x-0'>
                  <div className='flex flex-col items-center justify-center w-1/2 sm:w-full'>
                    <label className='font-pressStart text-xxs text-center'>Array length</label>
                    <input className='rounded-b-2xl w-full text-center font-pressStart text-xxs p-0.5' placeholder='length' />
                  </div>
                  <div className='flex flex-col items-center justify-center w-1/2 sm:w-full'>
                    <label className='font-pressStart text-xxs text-center'>Algoithm Type</label>
                    <select className='text-xxs rounded-b-2xl font-pressStart p-1 w-full text-center' id="cars">
                      <option value="volvo">Bubble</option>
                      <option value="saab">Merge</option>
                      <option value="opel">Insert</option>
                      <option value="audi">Heap</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className='text-center text-xxs font-pressStart mt-3 bg-sky-400 hover:bg-gradient-to-b from-sky-400 via-sky-300 to-sky-100 text-white font-bold py-2 px-4 rounded self-center'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className='overflow-hidden'>
        <p className='whitespace-nowrap text-center text-2xl text-black hover:underline hover:curs font-bebas animate-marquee'>
          <Link target="_blank" href="https://github.com/UNKNOWNtxn/Sortify">An Open Source Project Managed By Reece Bailey</Link>
        </p>
      </div>

    </div>
  )
}
