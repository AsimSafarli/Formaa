import React from 'react'

function ChooseDesignColorSort({onChooseSortDesign}) {
  return (
    <div className='flex flex-col gap-2'>
    <div className='flex gap-2 wrap w-64'>
              <button className='w-8 h-8 bg-red-600' onClick={() => onChooseSortDesign("red")}></button>
      <button className='w-8 h-8 bg-black'  onClick={() => onChooseSortDesign("black")}></button>
       <button className='w-8 h-8 bg-orange-600'  onClick={() => onChooseSortDesign("orange")}></button>
      <button className='w-8 h-8 bg-lime-600'  onClick={() => onChooseSortDesign("lime")}></button>
      <button className='w-8 h-8 bg-emerald-600'  onClick={() => onChooseSortDesign("#059669")}></button>
      <button className='w-8 h-8 bg-amber-600'  onClick={() => onChooseSortDesign("#d97706")}></button>
              </div>
          <div className='flex gap-2 wrap w-64'>      <button className='w-8 h-8 bg-white' onClick={() => onChooseSortDesign("white")}></button>
      <button className='w-8 h-8 bg-cyan-600' onClick={() => onChooseSortDesign("#0891b2")}></button>
      <button className='w-8 h-8 bg-purple-600' onClick={() => onChooseSortDesign("#9333ea")}></button>
      <button className='w-8 h-8 bg-pink-600' onClick={() => onChooseSortDesign("#db2777")}></button>
      <button className='w-8 h-8 bg-rose-600' onClick={() => onChooseSortDesign("#e11d48")}></button>
      <button className='w-8 h-8 bg-yellow-600' onClick={() => onChooseSortDesign("#ca8a04")}></button>
      <button className='w-8 h-8 bg-stone-600' onClick={() => onChooseSortDesign("#57534e")}></button>
      </div>
  </div>
  )
}

export default ChooseDesignColorSort
