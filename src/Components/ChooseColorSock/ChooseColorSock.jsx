import React from 'react'

function ChooseColorSock({onChooseSock}) {
    return (
        <div className='flex flex-col gap-2'>
    <div className='flex gap-2 wrap w-64'>
              <button className='w-8 h-8 bg-black' onClick={() => onChooseSock("black")}></button>
      <button className='w-8 h-8 bg-[#f2f2f2]'  onClick={() => onChooseSock("#f2f2f2")}></button>
       <button className='w-8 h-8 bg-[#56595A]'  onClick={() => onChooseSock("#56595A")}></button>
      <buttson className='w-8 h-8 bg-[#B8A061]'  onClick={() => onChooseSock("#B8A061")}></buttson>
      <button className='w-8 h-8 bg-[#F1B843]'  onClick={() => onChooseSock("#F1B843")}></button>
      <button className='w-8 h-8 bg-[#EC8F3A]'  onClick={() => onChooseSock("#d97706")}></button>
      <button className='w-8 h-8 bg-[#FCEE5F]' onClick={() => onChooseSock("#FCEE5F")}></button>
              </div>
          <div className='flex gap-2 wrap w-64'>     
      <button className='w-8 h-8 bg-[#E8742F]' onClick={() => onChooseSock("#E8742F")}></button>
      <button className='w-8 h-8 bg-[#EC6131]' onClick={() => onChooseSock("#EC6131")}></button>
      <button className='w-8 h-8 bg-[#E65027]' onClick={() => onChooseSock("#E65027")}></button>
      <button className='w-8 h-8 bg-[#D32D28]' onClick={() => onChooseSock("#e11d48")}></button>
      <button className='w-8 h-8 bg-[#C02825]' onClick={() => onChooseSock("#C02825")}></button>
      <button className='w-8 h-8 bg-[#BB2A1A]' onClick={() => onChooseSock("#BB2A1A")}></button>
      <button className='w-8 h-8 bg-[#469C30]' onClick={() => onChooseSock("#469C30")}></button>

      </div>
      <div className='flex gap-2 wrap w-64'>     
      <button className='w-8 h-8 bg-[#469C52]' onClick={() => onChooseSock("#469C52")}></button>
      <button className='w-8 h-8 bg-[#347843]' onClick={() => onChooseSock("#347843")}></button>
      <button className='w-8 h-8 bg-[#315A37]' onClick={() => onChooseSock("#315A37")}></button>
      <button className='w-8 h-8 bg-[#91C4DF]' onClick={() => onChooseSock("#91C4DF")}></button>
      <button className='w-8 h-8 bg-[#48A0D8]' onClick={() => onChooseSock("#48A0D8")}></button>
      <button className='w-8 h-8 bg-[#479EC0]' onClick={() => onChooseSock("#479EC0")}></button>
      <button className='w-8 h-8 bg-[#2050B3]' onClick={() => onChooseSock("#2050B3")}></button>
      </div>
      <div className='flex gap-2 wrap w-64'>     
      <button className='w-8 h-8 bg-[#101C86]' onClick={() => onChooseSock("#101C86")}></button>
      <button className='w-8 h-8 bg-[#02003A]' onClick={() => onChooseSock("#02003A")}></button>
      <button className='w-8 h-8 bg-[#72CBCF]' onClick={() => onChooseSock("#72CBCF")}></button>
      <button className='w-8 h-8 bg-[#57BEB5]' onClick={() => onChooseSock("#57BEB5")}></button>
      <button className='w-8 h-8 bg-[#73D3C1]' onClick={() => onChooseSock("#73D3C1")}></button>
      <button className='w-8 h-8 bg-[#7AD5AB]' onClick={() => onChooseSock("#7AD5AB")}></button>
      <button className='w-8 h-8 bg-[#7C1D2C]' onClick={() => onChooseSock("#7C1D2C")}></button>
      </div>
      <div className='flex gap-2 wrap w-64'>     
      <button className='w-8 h-8 bg-[#54101B]' onClick={() => onChooseSock("#54101B")}></button>
      <button className='w-8 h-8 bg-[#E1707A]' onClick={() => onChooseSock("#E1707A")}></button>
      <button className='w-8 h-8 bg-[#771B89]' onClick={() => onChooseSock("#771B89")}></button>
      <button className='w-8 h-8 bg-[#530D75]' onClick={() => onChooseSock("#530D75")}></button>
      <button className='w-8 h-8 bg-[#E7A8AB]' onClick={() => onChooseSock("#E7A8AB")}></button>
      <button className='w-8 h-8 bg-[#EA337F]' onClick={() => onChooseSock("#EA337F")}></button>
      <button className='w-8 h-8 bg-[#EA337F]' onClick={() => onChooseSock("#EA337F")}></button>
      </div>
  </div>
      )
}

export default ChooseColorSock
