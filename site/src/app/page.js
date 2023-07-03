'use client'

import { useEffect, useState, useRef } from 'react'
import * as sortingAlgorithms from '../components/sortingAlgorithms'
import Link from 'next/link';
import useSound from 'use-sound';
import Sound from '../../public/sounds/merge.mp3';

export default function Sortify() {

  const [mainArray, setMainArray] = useState([]);
  const [sortFunction, setSortFunction] = useState("bubble");
  const [playSound, { stop: stopSound }] = useSound(Sound, { loop: true });
  const playSoundRef = useRef();
  const stopSoundRef = useRef();

  let continueAnimation = true;


  const sortArray = () => {
    switch (sortFunction) {
      case "bubble":
        console.log("bubble")
        break;
      case "merge":
        mergeSort(mainArray);
        break;
      case "insert":
        console.log("insert")
        break;
      case "heap":
        console.log("heap")
        break;
      case "quick":
        console.log("quick")
        break;
      default:
        console.error("Invalid sort function");
    }
  }

  const resetArray = () => {
    continueAnimation = false;
    stopSound();
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(randomIntFromInterval(5, 1000));
    }
    setMainArray(array);

    const arrayBars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < arrayBars.length; i++) {
      const barStyle = arrayBars[i].style;
      barStyle.backgroundColor = 'white';
    }
  }
  

  const mergeSort = () => {
    continueAnimation = true;
    playSoundRef.current();
    const animations = sortingAlgorithms.mergeSort(mainArray);
    const totalAnimationTime = animations.length * 10;
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'red' : 'green';
        setTimeout(() => {
          if (continueAnimation) {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }
        }, i * 10);
      } else {
        setTimeout(() => {
          if (continueAnimation) {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }
        }, i * 10);
      }
    }
    setTimeout(stopSoundRef.current, totalAnimationTime);
  }

  useEffect(() => {
    resetArray();
  }, [])

  useEffect(() => {
    playSoundRef.current = playSound;
    stopSoundRef.current = stopSound;
  }, [playSound, stopSound]);

  // HELPER FUNCTION
  function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className='min-w-screen min-h-screen flex flex-col bg-gradient-to-b from-sky-400 via-sky-300 to-sky-100'>

      <div className='flex-grow flex flex-col justify-center items-center p-7 sm:p-3 md:p-5'>
        <div className='bg-light-gray rounded-xl p-5 drop-shadow-xl'>
          <h1 className='sm:text-xl md:text-2xl font-pressStart animate-appearFromBottom1 text-4xl text-bold text-center text-black'>Sortify</h1>
          <p className='sm:text-xxs md:text-sm font-pressStart animate-appearFromBottom2 text-base text-bold text-center text-black'>visualize your sorting algorithms with ease </p>
        </div>

        <div className='flex flex-grow w-full justify-center rounded-xl p-3 mt-6 bg-light-gray drop-shadow-xl'>
          <div className='flex-grow flex flex-col items-center rounded-xl bg-transparent border-8 border-sky-400'>
            <div className='flex justify-center basis-10/12 min-w-full bg-black'>
              <div className="relative">
                {mainArray.map((value, id) => (
                  <div
                    className="w-0.5 xl:mx-0.5 lg:mx-0.5 md:mx-0.5 md:w-[0.5px] sm:mx-[0.07rem] sm:w-[0.015rem] inline-block mx-1 array-bar bg-white"
                    key={id}
                    style={{ height: `${value}px` }}
                  >
                  </div>
                ))}
              </div>
            </div>
            <div className='basis-2/12 flex flex-col items-center justify-start w-full m-3'>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-row sm:flex-col sm:space-y-3 items-center justify-center space-x-3 sm:space-x-0'>
                  <div className='flex flex-col items-center justify-center sm:w-full'>
                    <label className='font-pressStart text-xxs text-center'>Algoithm Type</label>
                    <select
                      className='text-xxs rounded-b-2xl font-pressStart p-1 w-full text-center'
                      onChange={e => setSortFunction(e.target.value)}
                      value={sortFunction}
                      id="Algorithms">
                      <option className='text-center' value="bubble">Bubble</option>
                      <option className='text-center' value="merge">Merge</option>
                      <option className='text-center' value="quick">Quick</option>
                      <option className='text-center' value="insert">Insert</option>
                      <option className='text-center' value="heap">Heap</option>
                    </select>
                  </div>
                </div>
                <div className='flex flex-row space-x-3'>
                  <button onClick={resetArray} className='text-center text-xxs font-pressStart mt-3 bg-sky-400 hover:bg-gradient-to-b from-sky-400 via-sky-300 to-sky-100 text-white font-bold py-2 px-4 rounded self-center'>Reset</button>
                  <button onClick={sortArray} className='text-center text-xxs font-pressStart mt-3 bg-sky-400 hover:bg-gradient-to-b from-sky-400 via-sky-300 to-sky-100 text-white font-bold py-2 px-4 rounded self-center'>Sort</button>
                </div>
              </div>
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
