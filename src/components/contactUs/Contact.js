import React, { useState } from 'react';
import './Contact.css'

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

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div className='contactUs p-5'>
            <div className='contactUs__content'>
                <div className='contactUs-left'>
                    <h6>Laissez-nous votre message</h6>
                    <form className='contact-form form-control' onSubmit={() => handleSubmit} action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfz76GuxyLyRStx0UD1azYscCANzIsqHKsM0_eAToWIi781KA/formResponse" target='_blanck' method='post'>
                        <div >
                            <label className='form-label' htmlFor="">Entrez votre nom</label>
                            <input className='form-control' type="text" name="entry.1479319914" value={name} onChange={handleName} />
                        </div>
                        <div>
                            <label className='form-label' htmlFor="">Entrez votre adresse email</label>
                            <input className='form-control' type="email" name="entry.1473153097" value={email} onChange={handleEmail} />
                        </div>
                        <div>
                            <textarea className='form-control' name="entry.1173495417" id="" placeholder='Message' value={message} onChange={handleMessage}></textarea>
                        </div>
                        <button className='btn btn-success' type='submit'>Envoyer</button>

                    </form>

                </div>
                <div className='contactUs-right'>
                    <p>Phone: <br /> <span>000000</span></p>
                    <p>Mail: <br /> <span>abc@domaine.com</span></p>
                    <p>Direction: <br /> <span>street 234</span></p>
                </div>
            </div>

        </div>
    )
}

export default Contact
