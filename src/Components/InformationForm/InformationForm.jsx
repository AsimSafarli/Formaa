import React from 'react'

function InformationForm({name,number,email,adress,fincode,note,setName,setNumber,setEmail,setAdress,setFincode,setNote}) {
     
      
  return (
    <div className='accordion w-5/6'>
      <h1 className='flex items-center justify-center text-3xl mt-'>Contact Information</h1>
     <form               className="flex flex-col items-center gap-y-10 justify-center w-max mx-auto max-w-md px-6 py-12">
     <div className='flex flex-row gap-x-20'>
     <input className='h-10 border mt-1  px-4 w-80  rounded-lg bg-transparent' value={name} placeholder=' Aslan' onChange={(e)=>setName(e.target.value)}/>
     <input className='h-10 border mt-1  px-4 w-80  rounded-lg bg-transparent' value={number} placeholder='+994505005555' onChange={(e)=>setNumber(e.target.value)}/>

     </div>
     <div     className='flex flex-row gap-x-20'>
     <input className='h-10 border mt-1  px-4 w-80  rounded-lg bg-transparent' value={email}  placeholder='user@gmail.com'  onChange={(e)=>setEmail(e.target.value)}/>
     <input className='h-10 border mt-1  px-4 w-80  rounded-lg bg-transparent' value={adress} placeholder='Bakixanov qes kuc ev m70'  onChange={(e)=>setAdress(e.target.value)}/>
    
     </div>
     <div     className='flex flex-row gap-x-20'>
     <input className='h-10 border mt-1  px-4 w-80  rounded-lg bg-transparent' value={fincode} placeholder='7SS5RDF'  onChange={(e)=>setFincode(e.target.value)}/>
     <input className='h-10 border mt-1  px-4 w-80  rounded-lg bg-transparent' value={note} placeholder='what do want '  onChange={(e)=>setNote(e.target.value)}/>
    
     </div>
       </form>
    </div>
  )
}

export default InformationForm
