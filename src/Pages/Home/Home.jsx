import React from 'react'
import Post from '../../Components/Post/Post'

function Home() {
  return (
    <div className="App text-3xl flex  flex-col items-center justify-center mainbg ">
      <h1 className='flex items-center justify-center mt-5'>Formani Sec Terzini Yarat</h1>
      <div >
      <Post/>
      </div>
  
    </div>
  )
}

export default Home