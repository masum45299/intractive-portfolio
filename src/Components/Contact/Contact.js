import {React,useRef} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      
      emailjs.sendForm('service_a8jecc9', 'template_crob4gn', form.current, '3nY8RmbxAzDMrn6Ki')
        .then((result) => {
            console.log(result.text);
            alert("Your message succefully send")
        }, (error) => {
            console.log(error.text);
        });
    };
  

    return (
        <div className='contact-form'>
            <div className='w-left'>
                <div className='awsome'>
                    <span>Get in touch</span>
                    <span>Contact me</span>
                    <div className='blur s-blur1' style={{backgroundColor:"#ABF1FF94"}}></div>
                </div>
            </div>
            <div className='c-right'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='user_name' className='user' placeholder='Name' required/>
                    <input type='number' name='user_number' className='user' placeholder='your mobile number'/>
                    <input type='email' name='user_email' className='user' placeholder='Email'/>
                    <textarea name='message' className='user' placeholder='Message'/>
                    <input type='submit' value='send' className='button'/>
                    <div className='blur c-blur1' style={{backgroundColor:"var(--purple)"}}></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;