import React from "react";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Forma from "./Formalar/Forma1/Forma";
import Information from "./Pages/Information/Information";
import Forma2  from './Formalar/Forma2/Forma'
import Forma3 from './Formalar/Forma3/Forma'
import Forma4 from './Formalar/Forma4/Forma'
import Forma5  from './Formalar/Forma5/Forma'
import Forma6 from './Formalar/Forma6/Forma'
import Forma7 from './Formalar/Forma7/Forma'
import Forma8 from './Formalar/Forma8/Forma'
import Forma9 from './Formalar/Forma9/Forma'
import Forma10 from './Formalar/Forma10/Forma'
 import FormaStyle from "./Pages/FormaStyle/FormaStyle";
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/v-yaka' element={<FormaStyle/>}/>
      <Route path='/forma1' element={<Forma/>}/>
      <Route path='/forma2' element={<Forma2/>}/>
      <Route path='/forma3' element={<Forma3/>}/>
      <Route path='/forma4' element={<Forma4/>}/>
      <Route path='/forma5' element={<Forma5/>}/>
      <Route path='/forma6' element={<Forma6/>}/>
      <Route path='/forma7' element={<Forma7/>}/>
      <Route path='/forma8' element={<Forma8/>}/>
      <Route path='/forma9' element={<Forma9/>}/>
      <Route path='/forma10' element={<Forma10/>}/>

      <Route path='/information' element={<Information/>}/>
    </Routes>  
  );
}

export default App;