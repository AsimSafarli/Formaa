import React from 'react'

function ChooseFormaColorDesign({onChooseFormaDesign}) {
  return (
    <div className='flex flex-col gap-2'>
    <div className='flex gap-2 wrap w-64'>
              <button className='w-8 h-8 bg-black' onClick={() => onChooseFormaDesign("black")}></button>
      <button className='w-8 h-8 bg-[#f2f2f2]'  onClick={() => onChooseFormaDesign("#f2f2f2")}></button>
       <button className='w-8 h-8 bg-[#56595A]'  onClick={() => onChooseFormaDesign("#56595A")}></button>
      <buttson className='w-8 h-8 bg-[#B8A061]'  onClick={() => onChooseFormaDesign("#B8A061")}></buttson>
      <button className='w-8 h-8 bg-[#F1B843]'  onClick={() => onChooseFormaDesign("#F1B843")}></button>
      <button className='w-8 h-8 bg-[#EC8F3A]'  onClick={() => onChooseFormaDesign("#d97706")}></button>
      <button className='w-8 h-8 bg-[#FCEE5F]' onClick={() => onChooseFormaDesign("#FCEE5F")}></button>
              </div>
          <div className='flex gap-2 wrap w-64'>     
      <button className='w-8 h-8 bg-[#E8742F]' onClick={() => onChooseFormaDesign("#E8742F")}></button>
      <button className='w-8 h-8 bg-[#EC6131]' onClick={() => onChooseFormaDesign("#EC6131")}></button>
      <button className='w-8 h-8 bg-[#E65027]' onClick={() => onChooseFormaDesign("#E65027")}></button>
      <button className='w-8 h-8 bg-[#D32D28]' onClick={() => onChooseFormaDesign("#e11d48")}></button>
      <button className='w-8 h-8 bg-[#C02825]' onClick={() => onChooseFormaDesign("#C02825")}></button>
      <button className='w-8 h-8 bg-[#BB2A1A]' onClick={() => onChooseFormaDesign("#BB2A1A")}></button>
      <button className='w-8 h-8 bg-[#469C30]' onClick={() => onChooseFormaDesign("#469C30")}></button>

      </div>
      <div className='flex gap-2 wrap w-64'>     
      <button className='w-8 h-8 bg-[#469C52]' onClick={() => onChooseFormaDesign("#469C52")}></button>
      <button className='w-8 h-8 bg-[#347843]' onClick={() => onChooseFormaDesign("#347843")}></button>
      <button className='w-8 h-8 bg-[#315A37]' onClick={() => onChooseFormaDesign("#315A37")}></button>
      <button className='w-8 h-8 bg-[#91C4DF]' onClick={() => onChooseFormaDesign("#91C4DF")}></button>
      <button className='w-8 h-8 bg-[#48A0D8]' onClick={() => onChooseFormaDesign("#48A0D8")}></button>
      <button className='w-8 h-8 bg-[#479EC0]' onClick={() => onChooseFormaDesign("#479EC0")}></button>
      <button className='w-8 h-8 bg-[#2050B3]' onClick={() => onChooseFormaDesign("#2050B3")}></button>
      </div>
      <div className='flex gap-2 wrap w-64'>     
      <button className='w-8 h-8 bg-[#101C86]' onClick={() => onChooseFormaDesign("#101C86")}></button>
      <button className='w-8 h-8 bg-[#02003A]' onClick={() => onChooseFormaDesign("#02003A")}></button>
      <button className='w-8 h-8 bg-[#72CBCF]' onClick={() => onChooseFormaDesign("#72CBCF")}></button>
      <button className='w-8 h-8 bg-[#57BEB5]' onClick={() => onChooseFormaDesign("#57BEB5")}></button>
      <button className='w-8 h-8 bg-[#73D3C1]' onClick={() => onChooseFormaDesign("#73D3C1")}></button>
      <button className='w-8 h-8 bg-[#7AD5AB]' onClick={() => onChooseFormaDesign("#7AD5AB")}></button>
      <button className='w-8 h-8 bg-[#7C1D2C]' onClick={() => onChooseFormaDesign("#7C1D2C")}></button>
      </div>
      <div className='flex gap-2 wrap w-64'>     
      <button className='w-8 h-8 bg-[#54101B]' onClick={() => onChooseFormaDesign("#54101B")}></button>
      <button className='w-8 h-8 bg-[#E1707A]' onClick={() => onChooseFormaDesign("#E1707A")}></button>
      <button className='w-8 h-8 bg-[#771B89]' onClick={() => onChooseFormaDesign("#771B89")}></button>
      <button className='w-8 h-8 bg-[#530D75]' onClick={() => onChooseFormaDesign("#530D75")}></button>
      <button className='w-8 h-8 bg-[#E7A8AB]' onClick={() => onChooseFormaDesign("#E7A8AB")}></button>
      <button className='w-8 h-8 bg-[#EA337F]' onClick={() => onChooseFormaDesign("#EA337F")}></button>
      <button className='w-8 h-8 bg-[#EA337F]' onClick={() => onChooseFormaDesign("#EA337F")}></button>
      </div>
  </div>
  )
}

export default ChooseFormaColorDesign
