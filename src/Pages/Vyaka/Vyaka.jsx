import React from 'react'
import vyaka from '../../Data/vyaka.json'
import { NavLink } from 'react-router-dom'
function Vyaka() {
  return (
    <div className='flex flex-row justify-between items-center p-5 gap-x-5 flex-wrap mt-10 gap-y-5' >
      {vyaka.map((item) => (
        <div key={item.id} className="bgpost flex flex-col items-center justify-center p-5">
          <div><img src={item.image} className="w-52 " /></div>
          <div><button className="bgpost p-1 text-base w-max rounded "><NavLink to={item.link}>Sifaris Et</NavLink></button></div>
        </div>
      ))}
    </div>
  )
}

export default Vyaka