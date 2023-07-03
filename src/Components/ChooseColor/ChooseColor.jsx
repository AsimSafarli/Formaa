import React from 'react'
import { Collapse } from 'antd';
import {NavLink} from 'react-router-dom'
import ChooseFormaColor from '../ChooseFormaColor/ChooseFormaColor';
import ChooseSortColor from '../ChooseSortColor/ChooseSortColor';
import ChooseFormaColorDesign from '../ChooseFormaColorDesign/ChooseFormaColorDesign';
import ChooseColorSock from '../ChooseColorSock/ChooseColorSock';
const { Panel } =   Collapse;
function ChooseColor({onChooseForma,
    onChooseSort,onChooseFormaDesign,onChooseSock,onSubmit}) {
    

      const items = [
        {
          key: '1',
          label: 'Forma rəngi seçin',
          children: <div  className='flex flex-col gap-2'>
          <ChooseFormaColor onChooseForma={onChooseForma}/>
      </div>,
        },
        {
          key: '2',
          label: 'Forma dizayn rəngini seçin',
          children:<div  className='flex flex-col gap-2'>
          <ChooseFormaColorDesign onChooseFormaDesign={onChooseFormaDesign}/>
      </div>,
        },
        {
          key: '3',
          label: 'Şortik rəngini seçin',
          children: <div  className='flex flex-col gap-2'>
<ChooseSortColor onChooseSort={onChooseSort}/>
      </div>,
        },
        {
          key: '4',
          label: 'Corab rəngini seçin',
          children: <div  className='flex flex-col gap-2'>
<ChooseColorSock  onChooseSock={onChooseSock}/>
      </div>,
        }
      ];

      const headerStyle = {
        color: '#C8C8C8', 
      };
      const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
  return (
    <div className='flex flex-col gap-y-5 p-4'>
    <Collapse accordion items={items} size="large" />
    <div className='flex felx-row gap-x-5'>
    <button className='bg-amber-600 text-black w-max p-1 h-max bgpost' onClick={onSubmit}>
<NavLink to='/information' className='text-base'>Növbəti</NavLink>    </button>

    </div>
   

    </div>
  )
}

export default ChooseColor