import React from 'react'

function ChooseSortColor({onChooseSort}) {
  return (
    <div className='flex flex-col gap-2'>
    <div className='flex gap-2 wrap w-64'>
              <button className='w-8 h-8 bg-black' onClick={() => onChooseSort("black")}></button>
      <button className='w-8 h-8 bg-[#f2f2f2]'  onClick={() => onChooseSort("#f2f2f2")}></button>
       <button className='w-8 h-8 bg-[#56595A]'  onClick={() => onChooseSort("#56595A")}></button>
      <buttson className='w-8 h-8 bg-[#B8A061]'  onClick={() => onChooseSort("#B8A061")}></buttson>
      <button className='w-8 h-8 bg-[#F1B843]'  onClick={() => onChooseSort("#F1B843")}></button>
      <button className='w-8 h-8 bg-[#EC8F3A]'  onClick={() => onChooseSort("#d97706")}></button>
      <button className='w-8 h-8 bg-[#FCEE5F]' onClick={() => onChooseSort("#FCEE5F")}></button>
              </div>
          <div className='flex gap-2 wrap w-64'>     
      <button className='w-8 h-8 bg-[#E8742F]' onClick={() => onChooseSort("#E8742F")}></button>
      <button className='w-8 h-8 bg-[#EC6131]' onClick={() => onChooseSort("#EC6131")}></button>
      <button className='w-8 h-8 bg-[#E65027]' onClick={() => onChooseSort("#E65027")}></button>
      <button className='w-8 h-8 bg-[#D32D28]' onClick={() => onChooseSort("#e11d48")}></button>
      <button className='w-8 h-8 bg-[#C02825]' onClick={() => onChooseSort("#C02825")}></button>
      <button className='w-8 h-8 bg-[#BB2A1A]' onClick={() => onChooseSort("#BB2A1A")}></button>
      <button className='w-8 h-8 bg-[#469C30]' onClick={() => onChooseSort("#469C30")}></button>

      </div>
      <div className='flex gap-2 wrap w-64'>     
      <button className='w-8 h-8 bg-[#469C52]' onClick={() => onChooseSort("#469C52")}></button>
      <button className='w-8 h-8 bg-[#347843]' onClick={() => onChooseSort("#347843")}></button>
      <button className='w-8 h-8 bg-[#315A37]' onClick={() => onChooseSort("#315A37")}></button>
      <button className='w-8 h-8 bg-[#91C4DF]' onClick={() => onChooseSort("#91C4DF")}></button>
      <button className='w-8 h-8 bg-[#48A0D8]' onClick={() => onChooseSort("#48A0D8")}></button>
      <button className='w-8 h-8 bg-[#479EC0]' onClick={() => onChooseSort("#479EC0")}></button>
      <button className='w-8 h-8 bg-[#2050B3]' onClick={() => onChooseSort("#2050B3")}></button>
      </div>
      <div className='flex gap-2 wrap w-64'>     
      <button className='w-8 h-8 bg-[#101C86]' onClick={() => onChooseSort("#101C86")}></button>
      <button className='w-8 h-8 bg-[#02003A]' onClick={() => onChooseSort("#02003A")}></button>
      <button className='w-8 h-8 bg-[#72CBCF]' onClick={() => onChooseSort("#72CBCF")}></button>
      <button className='w-8 h-8 bg-[#57BEB5]' onClick={() => onChooseSort("#57BEB5")}></button>
      <button className='w-8 h-8 bg-[#73D3C1]' onClick={() => onChooseSort("#73D3C1")}></button>
      <button className='w-8 h-8 bg-[#7AD5AB]' onClick={() => onChooseSort("#7AD5AB")}></button>
      <button className='w-8 h-8 bg-[#7C1D2C]' onClick={() => onChooseSort("#7C1D2C")}></button>
      </div>
      <div className='flex gap-2 wrap w-64'>     
      <button className='w-8 h-8 bg-[#54101B]' onClick={() => onChooseSort("#54101B")}></button>
      <button className='w-8 h-8 bg-[#E1707A]' onClick={() => onChooseSort("#E1707A")}></button>
      <button className='w-8 h-8 bg-[#771B89]' onClick={() => onChooseSort("#771B89")}></button>
      <button className='w-8 h-8 bg-[#530D75]' onClick={() => onChooseSort("#530D75")}></button>
      <button className='w-8 h-8 bg-[#E7A8AB]' onClick={() => onChooseSort("#E7A8AB")}></button>
      <button className='w-8 h-8 bg-[#EA337F]' onClick={() => onChooseSort("#EA337F")}></button>
      <button className='w-8 h-8 bg-[#EA337F]' onClick={() => onChooseSort("#EA337F")}></button>
      </div>
  </div>
  )
}

export default ChooseSortColor
