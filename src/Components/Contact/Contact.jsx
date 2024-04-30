import React from 'react'
import './Contact.css'
import msg_icon from'../../assets/msg-icon.png'
import mail_icon from'../../assets/mail-icon.png'
import phone_icon from'../../assets/phone-icon.png'
import location_icon from'../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c3a5fb85-5306-4cbf-8a67-4ead02ed5ee7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




  return (
    <div className='contact'>
       <div className="contact-col">
       <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
       <p>Feel free to reach out through contact from or find out our contact information below. Your feedback, quetions, and suggestions are important to us as we strive to proviode expectational service to our university communinity.</p>
       <ul>
        <li><img src={mail_icon} alt="" />sumedhkhillare05@gmail.com</li>
        <li><img src={phone_icon} alt="" /> +91-7030450922</li>
        <li><img src={location_icon} alt="" /> Hinjewadi phase 1 <br /> Pune, Maharashtra, India</li>
       </ul>
       </div>
       <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required />
            <label>Phone Number</label>
            <input type="Tel" name='phone' placeholder='Enter Your Mobile Number' required/>
            <label >Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
       </div>

    </div>
  )
}

export default Contact