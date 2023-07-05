import React from 'react'
import vyaka from '../../Data/vyaka.json'
import { Link, NavLink } from 'react-router-dom'
function Vyaka() {
  return (
    <div className='flex flex-col gap-y-5 items-center justify-center  mx-auto container' >
     <div className="flex flex-row gap-x-10 mt-10">
      <div className="text-xl w-max p-2 bg-slate-600 text-white  "><Link to='/'>Yaka Seçimi</Link></div>
      <div className="text-xl w-max p-2 bg-cyan-600 text-white ">Model Seçimi</div>
      <div className="text-xl w-max p-2 bg-slate-600 text-white ">Forma Detayları</div>
      <div className="text-xl w-max p-2 bg-slate-600 text-white ">Sifaris Et</div>

    </div>
    <div className='flex flex-row justify-between items-center p-5 gap-x-5 flex-wrap mt-10 gap-y-5 mx-auto container'>
    {vyaka.map((item) => (
        <div key={item.id} className="bgpost flex flex-col items-center justify-center p-5">
          <div><img src={item.image} className="w-52 " /></div>
          <div><button className="bgpost p-1 text-base w-max rounded "><NavLink to={item.link}>Sifaris Et</NavLink></button></div>
        </div>
      ))}
    </div>
      
    </div>
  )
}

export default Vyaka