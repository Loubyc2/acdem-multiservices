import React, { useState } from 'react';
import Footer from '../footer/Footer';
import './Contact.css'

// Icons
import * as HiIcons from 'react-icons/hi'

// Images


function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
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
    const handlePhone = e => {
        setPhone(e.target.value)
    }



    return (
        <div className='contactUs'>
            <div className='contactUs__banner'>
                <div className='contactUs__banner-text'><h3>Contactez-Nous</h3></div>
            </div>
            <h2>Laissez-nous votre message</h2>
            <div className="contactUs-line"></div>
            <div className='contactUs__content px-5 pb-5 pt-4'>
                <div className='contactUs-left'>
                    <form className='contact-form form-control py-3 rounded' onSubmit={e => e.preventDefault} action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfz76GuxyLyRStx0UD1azYscCANzIsqHKsM0_eAToWIi781KA/formResponse" target='_blanck' method='post'>
                        <div >
                            <input className='form-control' type="text" name="entry.1479319914" value={name} onChange={handleName} placeholder='Nom' />
                        </div>
                        <div>
                            <input className='form-control' type="email" name="entry.1473153097" value={email} onChange={handleEmail} placeholder='Email' />
                        </div>
                        <div>
                            <input className='form-control' type="text" name="entry.1473153097" value={phone} onChange={handlePhone} placeholder='Tel' />
                        </div>
                        <div>
                            <textarea className='form-control' name="entry.1173495417" id="" placeholder='Message' value={message} onChange={handleMessage}></textarea>
                        </div>
                        <button className='btn btn-success' type="submit" >Envoyer</button>

                    </form>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Contact
