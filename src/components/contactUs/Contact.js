import React, { useState } from 'react';
import Footer from '../footer/Footer';
import './Contact.css'

// Icons
import * as HiIcons from 'react-icons/hi'

// Images


function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleName = e => {
        setName(e.target.value)

    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handleMessage = e => {
        setMessage(e.target.value)
    }



    return (
        <div className='contactUs'>
            <div className='contactUs__banner'>
                <div className='contactUs__banner-text'><h3>Contactez-Nous</h3></div>
            </div>
            <h2>Laissez-nous votre message</h2>
            <div className="contactUs-line"></div>
            <div className='contactUs__content p-3'>
                <div className='contactUs-left'>

                    <form className='contact-form form-control  rounded' onSubmit={e => e.preventDefault} action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfz76GuxyLyRStx0UD1azYscCANzIsqHKsM0_eAToWIi781KA/formResponse" target='_blanck' method='post'>
                        <div >
                            <label className='form-label' htmlFor="">Votre Nom</label>
                            <input className='form-control' type="text" name="entry.1479319914" value={name} onChange={handleName} />
                        </div>
                        <div>
                            <label className='form-label' htmlFor="">Votre Email</label>
                            <input className='form-control' type="email" name="entry.1473153097" value={email} onChange={handleEmail} />
                        </div>
                        <div>
                            <textarea className='form-control' name="entry.1173495417" id="" placeholder='Message' value={message} onChange={handleMessage}></textarea>
                        </div>
                        <button className='btn btn-success' type="submit" >Envoyer</button>

                    </form>

                </div>
                <div className='contactUs-right'>
                    <p> <strong><HiIcons.HiPhone /></strong>  <span>  +123 8989 8989</span></p>
                    <p><strong><HiIcons.HiMail /></strong> <span>abc@domaine.com</span></p>
                    <p><strong><HiIcons.HiLocationMarker /></strong>  <span>street 234</span></p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
