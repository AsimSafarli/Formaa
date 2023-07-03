import React from 'react';

function Form({fields,setFields,sendEmail}) {

  const handleAddField = () => {
    setFields([...fields, { name: '', number: '', size: '' }]);
  };
  const handleFieldChange = (index, field, value) => {
    setFields((prevFields) => {
      const newFields = [...prevFields];
      newFields[index] = { ...newFields[index], [field]: value };
      return newFields;
    });
  };
  const handleFieldDelete = (index) => {
    setFields((prevFields) => {
      const newFields = [...prevFields];
      newFields.splice(index, 1);
      return newFields;
    });
  };
  return (
    <form
              className="flex flex-col items-center gap-y-10 justify-center mx-auto max-w-md px-6 py-12">
              <table className="max-w-full leading-normal">
              <thead>
                <tr>
                <th class="px-6 accordion text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                #
                  </th>
                  <th class="px-6 accordion text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Player Name
                  </th>
                  <th className="px-6 accordion text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Player Number
                  </th>
                  <th className="px-6 accordion text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                   Player Forma Size
                  </th>
                  <th className="px-6 accordion text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                   Delete 
                  </th>
                </tr>
              </thead>
      
         <thead  >
         {fields.map((field, index) => (
         <tr key={index} className='p-5'>
            <th className='bg-gray-50  h-5 w-5'>
                {index +1}
            </th>
            <th>
            
        
            <input className='h-10 border mt-1  px-4 w-full bg-gray-50 rounded-lg' value={field.name} onChange={(e) => handleFieldChange(index, 'name', e.target.value)}  />
        
            </th>
         
         <th>
        
        
            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type='number' value={field.number} onChange={(e) => handleFieldChange(index, 'number', e.target.value)} />

         </th>
        <th>

        
    
            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' value={field.size} onChange={(e) => handleFieldChange(index, 'size', e.target.value)} />
        </th>
        <th>
            <button onClick={handleFieldDelete} className='bg-red-700 w-20 text-slate-50 hover:bg-transparent hover:text-red-700'> Delete</button>
        </th>
          </tr>
            ))}
          </thead>
    
      
      </table>
      <button type="button" onClick={handleAddField} className='w-20 bg-emerald-800 text-slate-50'>Add Player</button>
      <button type="submit" onClick={sendEmail}>Submit</button>
    </form>
  );
}
export default  Form