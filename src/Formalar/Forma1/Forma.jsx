import React, { useState } from 'react'
import BackDesign from './BackDesign';
import FrontDesign from './FrontDesign';
import ChooseColor from '../../Components/ChooseColor/ChooseColor';
import {GiBackForth} from 'react-icons/gi'
function Forma() {
    const [svgFillColorForma, setSvgFillColorForma] = useState('black');
  const [svgFillFormaDesign, setSvgFillFormaDesign] = useState('white');
  const [svgFillColorSort, setSvgFillColorSort] = useState('black');
  const [svgFillColorSortDesign, setSvgFillColorSortDesign] = useState('black');
  const [svgFillSock, setSvgFillSock] = useState('black');
  const [toggle, setToggle] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('forma', svgFillColorForma);
    localStorage.setItem('formadesign', svgFillFormaDesign);
    localStorage.setItem('sort', svgFillColorSort);
    localStorage.setItem('sortdesign', svgFillColorSortDesign);
    localStorage.setItem('socks', svgFillSock);
    window.location.href = '/information';
  };
  const handleClick = () => {
    setToggle(!toggle);
  };

  function handleButtonClickForma(color) {
    setSvgFillColorForma(color);
  }
  function handleButtonClickFSort(color) {
    setSvgFillColorSort(color);
  }
  function handleButtonClickFSortDesign(color) {
    setSvgFillColorSortDesign(color);
  }

  function handleButtonClickFormaDesign(color) {
    setSvgFillFormaDesign(color);
  }
  function handleButtonClickSock(color) {
    setSvgFillSock(color);
  }
  return (
<div className="flex md:flex-row flex-col gap-y-10 items-center justify-center md:gap-x-10  p-20">    <div >
    {toggle ? (
        <div className="w-80">
          <BackDesign
            onFillForma={svgFillColorForma}
            onFillSort={svgFillColorSort}
            onFillSortDesign={svgFillColorSortDesign}
            onFillFormaDesign={svgFillFormaDesign}
            onFillSock={svgFillSock}
          />
                    <button onClick={handleClick} className="flex items-center justify-end ml-80 text-3xl"><GiBackForth/></button>

        </div>
      ) : (
        <div className="w-80">
          <FrontDesign
            onFillForma={svgFillColorForma}
            onFillFormaDesign={svgFillFormaDesign}
            onFillSort={svgFillColorSort}
            onFillSortDesign={svgFillColorSortDesign}
            onFillSock={svgFillSock}
          />
          <button onClick={handleClick} className="flex items-center justify-end ml-80 text-3xl"><GiBackForth/></button>
        </div>
      )}</div>
    <div className='md:w-1/3 w-max h-max  bgpost '>
    <ChooseColor
        onChooseFormaDesign={handleButtonClickFormaDesign}
        onChooseSort={handleButtonClickFSort}
        onChooseForma={handleButtonClickForma}
        onChooseSortDesign={handleButtonClickFSortDesign}
        onChooseSock={handleButtonClickSock}
        onSubmit={handleSubmit}
        handleClick={handleClick}
      /></div>
    </div>
  )
}

export default Forma