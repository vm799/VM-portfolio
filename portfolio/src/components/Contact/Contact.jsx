import "./Contact.css"
import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
//   const [message, setMessage]= useState(false)

//   const handleSubmit = (e)=>{
// e.preventDefault();
// setMessage(true)
//   }

const [statusMessage, setStatusMessage] = useState("");
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'service_ln9daps', 
      'template_qffz3l1', 
      form.current, 
      'OB0udwl-DbYCzWBYt')
      .then((result) => {
        console.log(result.text, result.status);
        setStatusMessage("Thank you for reaching out, I'll get back to you shortly 😁 ");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          setStatusMessage(`${error.text} happened`);
      });
  };


  return (
    <div className="Contact" id="contact">
      <div className="left">
        <img src="VM-portfolio/assets/me_code.png" alt="" />
      </div>
      <div className="right">
        <h2> Contact.</h2>

        <form ref={form} onSubmit={sendEmail}>
        <div className="email-container">
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      </div>
      <div className="message-container">
      <textarea name="message" />
      <p className="statusMessage">{statusMessage}</p>
      <input type="submit" value="SEND" />
      </div>
    
    </form>

       
      </div>
    </div>
  )
}
