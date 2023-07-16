
import React, {useRef} from 'react'
import {Modal } from 'react-bootstrap'
import emailjs from '@emailjs/browser';

const ContactForm = (props) => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4yb7t6g','template_bo1hel8',  form.current, '0KIzIWDE-7r_XuJac')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      ><Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter" className='ps-3'>
        Contact Us
      </Modal.Title>
    </Modal.Header>
      
    <form ref={form} onSubmit={sendEmail}  style={{padding:"2rem"}}>
      <div class="mb-3 ">
      <label  class="form-label">Name</label>
      <input type="text" class="form-control" name="user_name" />
      </div>

    <div class="mb-3">
      <label class="form-label">Email</label>
      <input class="form-control" type="email" name="user_email" />
      </div>
      <div class="mb-3">
      <label class="form-label">Number</label>
      <input class="form-control" type="number" name="user_mobile" />
      </div>

      <div class="mb-3">
      <label class="form-label">Message</label>
      <textarea class="form-control" name="message" />
      </div>
      <button className='btn btn-primary' type="submit" value="Send" onClick={props.onHide}>Send Message</button>
    </form>
  </Modal>
  )
}

export default ContactForm
