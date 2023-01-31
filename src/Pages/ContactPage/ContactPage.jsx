import './ContactPage.scss'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Header from '../../Components/Header/Header';


function ContactPage() {
    const form = useRef();
    const [ name , setName ] = useState("")
    const [ email, setEmail] = useState("")
    const [ phone, setPhone ] = useState("")
    const [ message, setMessage] = useState("")
    const sendEmail = (e) => {
    e.preventDefault();
    if ( name === "" || email === "" || phone === "" || message === "") {
        alert('Please fill out the form')
    }
    else {
        emailjs.sendForm("service_976g7bq","template_ao9ibjb", form.current, 'nKy-Xq3HycHCwHSXx')
        .then((result) => {
            setName('');
            setEmail('');
            setMessage("");
            setPhone("");
        }, (error) => {
            console.log(error.text);
        });
    };
    }
    

    return (
        <div className="contact">
            <Header/>
            <h1 className='contact__heading'>contact me</h1>
            <form ref={form} onSubmit={sendEmail} className='contact__form'>
                <label className="contact__label" >tell me who you are</label>
                <input value={name} onChange={(e) => setName(e.target.value)} name="from_name"  className='contact__input' type="text" placeholder='your name'/>
                <label className="contact__label">how can i get back to you</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} name="from_email"  className='contact__input' type="email" placeholder='your email'/>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} name="from_phone"  className='contact__input' type="tel" placeholder='your phone number'/>
                <label className="contact__label">What problem I can help you with?</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message"  className='contact__input' rows="5" cols="50" placeholder='your message'/>
                <button type="submit" value="send" className="contact__button">DO IT!</button>
            </form>
        </div>
    )
}

export default ContactPage