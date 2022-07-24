import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <div className="contact-container">
      <form className="contact-form">
        <div className="contact-info">
          <label>Name:
            <input type="text" required/>
          </label>
          <label>Email:
            <input type="email" required/>
          </label>
          <label>Phone:
            <input type="text" />
          </label>
          <label>Property Type:        
            <select form="contact-form">
              <option value="Strata">Strata</option>
              <option value="Commercial">Commercial</option>
              <option value="Residential">Residential</option>
            </select>
          </label>
          <p>Details:</p>
          <textarea></textarea>
          <button className="btn-contact">SUBMIT</button>          
        </div>
        <div className="services">
          <label for="lawn-care">Lawn Care</label>
          <input type="checkbox" name="lawn-care" value="Lawn Care"/>
          <label for="garden-care">Garden Care</label>
          <input type="checkbox" name="garden-care" value="garden-care"/>
          <label for="pruning-service">Pruning Service</label>
          <input type="checkbox" name="pruning-service" value="pruning-service"/>
          <label for="pressure-washing">Pressure Washing</label>
          <input type="checkbox" name="pressure-washing" value="pressure-washing"/>
          <label for="irrigation">Irrigation</label>
          <input type="checkbox" name="irrigation" value="irrigation"/>
          <label for="other">Other</label>
          <input type="checkbox" name="other" value="other"/>
        </div>        
      </form>
    </div>
  )
}
