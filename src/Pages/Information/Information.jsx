import React, { useState } from "react";
import ColorTable from "../../Components/ColorTable/ColorTable";
import Form from "../Form/Form";
import InformationForm from "../../Components/InformationForm/InformationForm";
import emailjs from '@emailjs/browser';

function Information() {
  const [fields, setFields] = useState([{ name: '', number: '', size: '' }]);
  const [name,setName]=useState('')
  const [number,setNumber]=useState('')
  const [email,setEmail]=useState('')
  const [adress,setAdress]=useState('')
const [fincode,setFincode]=useState('')
  const [note,setNote]=useState('')
  const sendEmail = (e) => {
    e.preventDefault();
  
    const emailData = {
      contact: { name, number, email, adress, fincode, note },
      colorData,
      fields
    };
  
    emailjs.sendForm('service_tjli2y9', 'template_hisp76b', emailData, 'YYC3TXW0ITxY98_e4K')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
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
      sendEmail={sendEmail}
      />
    </div>
  );
}

export default Information;
