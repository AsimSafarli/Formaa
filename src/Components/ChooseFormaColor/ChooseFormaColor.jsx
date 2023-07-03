import React from 'react'

function ChooseFormaColor({onChooseForma}) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2 wrap w-64'>
                <button className='w-8 h-8 bg-black' onClick={() => onChooseForma("black")}></button>
        <button className='w-8 h-8 bg-[#f2f2f2]'  onClick={() => onChooseForma("#f2f2f2")}></button>
         <button className='w-8 h-8 bg-[#56595A]'  onClick={() => onChooseForma("#56595A")}></button>
        <buttson className='w-8 h-8 bg-[#B8A061]'  onClick={() => onChooseForma("#B8A061")}></buttson>
        <button className='w-8 h-8 bg-[#F1B843]'  onClick={() => onChooseForma("#F1B843")}></button>
        <button className='w-8 h-8 bg-[#EC8F3A]'  onClick={() => onChooseForma("#d97706")}></button>
        <button className='w-8 h-8 bg-[#FCEE5F]' onClick={() => onChooseForma("#FCEE5F")}></button>
                </div>
            <div className='flex gap-2 wrap w-64'>     
        <button className='w-8 h-8 bg-[#E8742F]' onClick={() => onChooseForma("#E8742F")}></button>
        <button className='w-8 h-8 bg-[#EC6131]' onClick={() => onChooseForma("#EC6131")}></button>
        <button className='w-8 h-8 bg-[#E65027]' onClick={() => onChooseForma("#E65027")}></button>
        <button className='w-8 h-8 bg-[#D32D28]' onClick={() => onChooseForma("#e11d48")}></button>
        <button className='w-8 h-8 bg-[#C02825]' onClick={() => onChooseForma("#C02825")}></button>
        <button className='w-8 h-8 bg-[#BB2A1A]' onClick={() => onChooseForma("#BB2A1A")}></button>
        <button className='w-8 h-8 bg-[#469C30]' onClick={() => onChooseForma("#469C30")}></button>

        </div>
        <div className='flex gap-2 wrap w-64'>     
        <button className='w-8 h-8 bg-[#469C52]' onClick={() => onChooseForma("#469C52")}></button>
        <button className='w-8 h-8 bg-[#347843]' onClick={() => onChooseForma("#347843")}></button>
        <button className='w-8 h-8 bg-[#315A37]' onClick={() => onChooseForma("#315A37")}></button>
        <button className='w-8 h-8 bg-[#91C4DF]' onClick={() => onChooseForma("#91C4DF")}></button>
        <button className='w-8 h-8 bg-[#48A0D8]' onClick={() => onChooseForma("#48A0D8")}></button>
        <button className='w-8 h-8 bg-[#479EC0]' onClick={() => onChooseForma("#479EC0")}></button>
        <button className='w-8 h-8 bg-[#2050B3]' onClick={() => onChooseForma("#2050B3")}></button>
        </div>
        <div className='flex gap-2 wrap w-64'>     
        <button className='w-8 h-8 bg-[#101C86]' onClick={() => onChooseForma("#101C86")}></button>
        <button className='w-8 h-8 bg-[#02003A]' onClick={() => onChooseForma("#02003A")}></button>
        <button className='w-8 h-8 bg-[#72CBCF]' onClick={() => onChooseForma("#72CBCF")}></button>
        <button className='w-8 h-8 bg-[#57BEB5]' onClick={() => onChooseForma("#57BEB5")}></button>
        <button className='w-8 h-8 bg-[#73D3C1]' onClick={() => onChooseForma("#73D3C1")}></button>
        <button className='w-8 h-8 bg-[#7AD5AB]' onClick={() => onChooseForma("#7AD5AB")}></button>
        <button className='w-8 h-8 bg-[#7C1D2C]' onClick={() => onChooseForma("#7C1D2C")}></button>
        </div>
        <div className='flex gap-2 wrap w-64'>     
        <button className='w-8 h-8 bg-[#54101B]' onClick={() => onChooseForma("#54101B")}></button>
        <button className='w-8 h-8 bg-[#E1707A]' onClick={() => onChooseForma("#E1707A")}></button>
        <button className='w-8 h-8 bg-[#771B89]' onClick={() => onChooseForma("#771B89")}></button>
        <button className='w-8 h-8 bg-[#530D75]' onClick={() => onChooseForma("#530D75")}></button>
        <button className='w-8 h-8 bg-[#E7A8AB]' onClick={() => onChooseForma("#E7A8AB")}></button>
        <button className='w-8 h-8 bg-[#EA337F]' onClick={() => onChooseForma("#EA337F")}></button>
        <button className='w-8 h-8 bg-[#EA337F]' onClick={() => onChooseForma("#EA337F")}></button>
        </div>
    </div>
  )
}

export default ChooseFormaColor
