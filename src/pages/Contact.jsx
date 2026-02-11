import React from 'react'
import '../styles/Contact/contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>
            <form >
                <div>
                    <label>name</label>
                    <input type="text" required placeholder='abc'/>
                </div>
                <div>
                    <label>email</label>
                    <input type="email" required placeholder='abc'/>
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" required placeholder='Tell us about your query....'/>
                </div>
                <button type='submit' onClick={(e)=>e.preventDefault()}>send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact
