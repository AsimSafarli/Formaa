import React from 'react'

function ColorTable({forma,
  formadesign,
  sort,
  sortdesign,
  backnamenumber,
  socks,}) {
    
  return (
    <div className='flex flex-col items-center justify-center'>
       <div className=" px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block max-w-full shadow rounded-lg overflow-hidden">
          <table className="max-w-full leading-normal">
              <thead>
                <tr>
                  <th class="px-6 accordion text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Forma
                  </th>
                  <th className="px-6 accordion text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Forma Design
                  </th>
                  <th className="px-6 accordion text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Short
                  </th>
                  <th className="px-6 accordion text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Sock
                  </th>
                </tr>
              </thead>
              <tbody className="border-b ">
                  <tr  className='accordion'>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                    {forma}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                    {formadesign}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700   ">
                    {sort}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                    {socks}
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default ColorTable
