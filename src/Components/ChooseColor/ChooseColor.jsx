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
      const headerStyle = {
        color: '#C8C8C8', 
      };
      const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
      const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
  return (
    <div className='flex flex-col gap-y-5 p-4'>
        <Collapse accordion size="large" className='flex flex-col gap-y-2'>
            
        <Panel header={<span style={headerStyle}>Forma rəngi seçin</span>} key="1" className='accordion text-slate-50 rounded-lg'  >
            <div  className='flex flex-col gap-2'>
                <ChooseFormaColor onChooseForma={onChooseForma}/>
            </div>
       
    </Panel>
    </Collapse>
    <Collapse>

    <Panel header={<span style={headerStyle}>Forma dizayn rəngini seçin</span>} key="2" className='accordion text-slate-50 rounded-lg'   >
            <div  className='flex flex-col gap-2'>
                <ChooseFormaColorDesign onChooseFormaDesign={onChooseFormaDesign}/>
            </div>
       
    </Panel>
    </Collapse>
    <Collapse>

 <Panel header={<span style={headerStyle}>Şortik rəngini seçin</span>}key="3" className='accordion text-slate-50 rounded-lg' >
<ChooseSortColor onChooseSort={onChooseSort}/>
 </Panel>
 </Collapse>
  <Collapse>

 <Panel  header={<span style={headerStyle}>Corab rəngini seçin</span>}key="6" className='accordion text-slate-50 rounded-lg' >
<ChooseColorSock  onChooseSock={onChooseSock}/>
 </Panel>
  </Collapse>


 
    <div className='flex felx-row gap-x-5'>
    <button className='bg-amber-600 text-black w-max p-1 h-max bgpost' onClick={onSubmit}>
<NavLink to='/information' className='text-base'>Növbəti</NavLink>    </button>

    </div>
   

    </div>
  )
}

export default ChooseColor