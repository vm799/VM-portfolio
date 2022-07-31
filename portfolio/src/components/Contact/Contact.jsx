import "./Contact.css"
import { useState } from "react";

export default function Contact() {
  const [message, setMessage]= useState(false)

  const handleSubmit = (e)=>{
e.preventDefault();
setMessage(true)
  }

  return (
    <div className="Contact" id="contact">
      <div className="left">
        <img src="assets/me_code.png" alt="" />
      </div>
      <div className="right">
        <h2> Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="Submit">SEND</button>
          <br />
          {message && <span>Thank you for leaving me a message, I'll reply shortly  :)
            </span>}

        </form>
      </div>
    </div>
  )
}
