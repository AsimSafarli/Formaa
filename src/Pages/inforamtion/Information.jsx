import React, { useState } from "react";
import ColorTable from "../../components/ColorTable/ColorTable";
import Form from "../../Forms/Form";
import axios from "axios";
import InformationForm from "../../components/InformationForm/InformationForm";

function Information() {
  const [fields, setFields] = useState([{ name: '', number: '', size: '' }]);
  const [name,setName]=useState('')
  const [number,setNumber]=useState('')
  const [email,setEmail]=useState('')
  const [adress,setAdress]=useState('')
const [fincode,setFincode]=useState('')
  const [note,setNote]=useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Promise.all([
        axios.post('http://localhost:8000/forma', colorData),
        axios.post('http://localhost:8000/player', fields),
      axios.post('http://localhost:8000/contact',{name,number,email,adress,fincode,note})

      ]);
      alert('three form requests completed successfully');
    } catch (error) {
      alert('Failed to send requests');
    }
  };
  const colorData = {
    forma: localStorage.getItem("forma"),
    formadesign: localStorage.getItem("formadesign"),
    sort: localStorage.getItem("sort"),
    sortdesign: localStorage.getItem("sortdesign"),
    backnamenumber: localStorage.getItem("backnamenumber"),
    socks: localStorage.getItem("socks")
  };
  

  const forma = localStorage.getItem("forma");
  const formadesign = localStorage.getItem("formadesign");
  const sort = localStorage.getItem("sort");
  const sortdesign = localStorage.getItem("sortdesign");
  const backnamenumber = localStorage.getItem("backnamenumber");
  const socks = localStorage.getItem("socks");
  return (
    <div className="flex flex-col gap-y-20 items-center justify-center">
      <InformationForm 
      name={name}
number={      number}
email={      email}
adress={      adress}
fincode={      fincode}
note={      note}
setName={setName}
setNumber={setNumber}
setEmail={setEmail}
setAdress={setAdress}
setFincode={setFincode}
setNote={setNote}
      />
      <ColorTable
        forma={forma}
        formadesign={formadesign}
        sort={sort}
        sortdesign={sortdesign}
        backnamenumber={backnamenumber}
        socks={socks}
      />
      <Form 
      fields={fields}
      setFields={setFields}
      handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Information;
