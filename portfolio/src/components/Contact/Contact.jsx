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
          console.log(result.text);
          console.log("message sent!! boooyaaa");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
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
      <input type="submit" value="SEND" />
      </div>
    </form>

        {/* <form onSubmit={handleSubmit}>
          <div className="email-container">
          <h4>your email</h4>
          <input type="text"  />
          </div>
         
          <div className="message-container">
          <h4>your message
          </h4>
          <textarea  type="text" >
          

          </textarea>
          </div>
          <button type="Submit">SEND</button>
         
          {message && <span>Thank you for leaving me a message, I'll reply shortly  :)
            </span>}

        </form> */}
      </div>
    </div>
  )
}
