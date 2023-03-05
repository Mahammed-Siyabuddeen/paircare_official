import React, { useRef, useState } from "react";
import style from '../styles/contact.module.css'
import CallIcon from '@mui/icons-material/Call';
import emailjs from "@emailjs/browser";
import { Alert } from "@mui/material";
function Contact() {
  const [succes, setSuccess] = useState(false)
  const formRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, e.target, process.env.NEXT_PUBLIC_PUBLIC_KEY).then(() => {
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
      }, 3000)
    }).catch(() => {
      alert(" please call Now ");
    })
    e.target.reset();

  }
  return (
    <>
      <div id="Contacts" className={style.formcontainer}>
        {
          succes && <Alert severity="success">email successfully submited we will contact soon.</Alert>
        }

        <div className={style.formheading}>
          <h1>Book A Repair Expert Today {process.env.NEXT_PUBLIC_ID}</h1>
          <p>
            We Provide Quality service.
          </p>
        </div>

        <form ref={formRef} className={style.form} id="form" onSubmit={handleSubmit}>
          <input required type="text" name="name" placeholder="name" />
          <br />
          <input type="tel" name="phoneNumber" value={9089090867} placeholder="phoneNumber" pattern="[0-9]{10}" required />
          <br />
          <input type="text" name="address" placeholder="Address" />
          <br />
          <input type="text" name="details" placeholder="says what you need?" />
          <div className={style.actionbuttons} >
            <button id="sendButton" className={style.submitbutton} type="submit">Send</button>
            <button type="button" className={style.submitbutton} onClick={() => location.href = 'tel:8792635047'}><CallIcon /></button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact;