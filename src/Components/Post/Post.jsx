import React from "react";
import { NavLink } from "react-router-dom";
import style from '../../Data/style.json'

function Post() {
  return (
    <div className='flex flex-row justify-between items-center p-5 gap-x-5 flex-wrap mt-10' >
      {style.map((item) => (
        <div key={item.id} className="bgpost flex flex-col items-center justify-center">
          <div><img src={item.image} className="w-60 " /></div>
          <div><button className="bgpost p-1 text-base w-max rounded "><NavLink to={item.link}>Sifaris Et</NavLink></button></div>
        </div>
      ))}
    </div>
  );
}

export default Post;
