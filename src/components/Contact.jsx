import React from 'react'
import "./Contact.css"
import emailjs from 'emailjs-com'

export default function Contact() {

  const sendEmail = (e) => {
    e.preventDefault()
    console.log(e.target)
    emailjs.sendForm(
      'service_k56wdek',
      'template_vrspn8p',
      e.target,
      'fZzoE3AXoEhioZYVZ'
      ).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
    })
  }

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="contact-services-container">
          <div className="contact-info">
            <label>Name:
              <input type="text" name="name" required/>
            </label>
            <label>Email:
              <input type="email" name="email" required/>
            </label>
            <label>Phone:
              <input type="text" name="phone" />
            </label>
            <label>Property Type:        
              <select form="contact-form" name='property'>
                <option value="Strata" name='property'>Strata</option>
                <option value="Commercial" name='property'>Commercial</option>
                <option value="Residential" name='property'>Residential</option>
              </select>
            </label>
            <label>Property Address:
              <input type="text" name="address" />
            </label>
          </div>
          <div className="services">
            <div className="service-list">          
              <div>
                <label for="lawn-care">Lawn Care</label>
                <input type="checkbox" name="services" value="Lawn Care"/>
              </div>
              <div>
                <label for="garden-care">Garden Care</label>
                <input type="checkbox" name="services" value="garden-care"/>
              </div>
              <div>
                <label for="pruning-service">Pruning Service</label>
                <input type="checkbox" name="services" value="pruning-service"/>
              </div>
              <div>      
                <label for="pressure-washing">Pressure Washing</label>
                <input type="checkbox" name="services" value="pressure-washing"/>
              </div>
              <div> 
                <label for="irrigation">Irrigation</label>
                <input type="checkbox" name="services" value="irrigation"/>
              </div>
              <div>
                <label for="other">Other</label>
                <input type="checkbox" name="services" value="other"/>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="details">        
          <p>Details:</p>
          <textarea name="details"></textarea>
          <div className="contact-btn-container">
            <button className="btn-contact">SUBMIT</button>
          </div>
        </div>                
      </form>
    </div>
  )
}
