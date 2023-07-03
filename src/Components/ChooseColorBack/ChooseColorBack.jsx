import React from 'react'

function ChooseColorBack({onChooseBack}) {
  return (
    <div className='flex flex-col gap-2'>
    <div className='flex gap-2 wrap w-64'>
              <button className='w-8 h-8 bg-red-600' onClick={() => onChooseBack("red")}></button>
      <button className='w-8 h-8 bg-black'  onClick={() => onChooseBack("black")}></button>
       <button className='w-8 h-8 bg-orange-600'  onClick={() => onChooseBack("orange")}></button>
      <button className='w-8 h-8 bg-lime-600'  onClick={() => onChooseBack("lime")}></button>
      <button className='w-8 h-8 bg-emerald-600'  onClick={() => onChooseBack("#059669")}></button>
      <button className='w-8 h-8 bg-amber-600'  onClick={() => onChooseBack("#d97706")}></button>
              </div>
          <div className='flex gap-2 wrap w-64'>
          <button className='w-8 h-8 bg-white' onClick={() => onChooseBack("white")}></button>
      <button className='w-8 h-8 bg-cyan-600' onClick={() => onChooseBack("#0891b2")}></button>
      <button className='w-8 h-8 bg-purple-600' onClick={() => onChooseBack("#9333ea")}></button>
      <button className='w-8 h-8 bg-pink-600' onClick={() => onChooseBack("#db2777")}></button>
      <button className='w-8 h-8 bg-rose-600' onClick={() => onChooseBack("#e11d48")}></button>
      <button className='w-8 h-8 bg-yellow-600' onClick={() => onChooseBack("#ca8a04")}></button>
      <button className='w-8 h-8 bg-stone-600' onClick={() => onChooseBack("#57534e")}></button>


      </div>
  </div>
  )
}

export default ChooseColorBack
