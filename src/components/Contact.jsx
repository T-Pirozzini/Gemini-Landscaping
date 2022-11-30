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
    <div className="contact-container flex justify-center mb-4">
      <form className="contact-form w-11/12 tracking-wide rounded-md p-2 bg-slate-700" onSubmit={sendEmail}>
        <h1 className="text-center border-b-2 border-green-600 text-2xl">CONTACT US</h1>        
        <div className="contact-services-container grid grid-cols-2 pb-2">
          <div className="contact-info">
            <label>* Name:
              <input type="text" name="name" required className="text-black"/>
            </label>
            <label>Phone:
              <input type="text" name="phone" className="text-black" />
            </label>
          </div>
          <div>
            <label>* Email:
              <input type="email" name="email" required className="text-black"/>
            </label>
            <label>Property Type:        
              <select form="contact-form" name='property' className="w-3/4 text-black">
                <option  value="Strata" name='property'>Strata</option>
                <option value="Commercial" name='property'>Commercial</option>
                <option value="Residential" name='property'>Residential</option>
              </select>
            </label>
          </div>
        </div>

        <div className="pb-4">
          <label>Property Address:
            <input type="text" name="address" className="w-full text-black" />
          </label>
        </div>
        
        <div className="services pb-4">
          <div className="service-list grid grid-cols-2 text-sm gap-2">          
            <div className="border-2">
              <input type="checkbox" name="services" value="Lawn Care" className="m-2"/>
              <label for="lawn-care">Lawn Care</label>
            </div>
            <div className="border-2">
              <input type="checkbox" name="services" value="garden-care" className="m-2"/>
              <label for="garden-care">Garden Care</label>
            </div>
            <div className="border-2">
              <input type="checkbox" name="services" value="pruning-service" className="m-2"/>
              <label for="pruning-service">Pruning Service</label>
            </div>
            <div className="border-2">      
              <input type="checkbox" name="services" value="pressure-washing" className="m-2"/>
              <label for="pressure-washing">Pressure Washing</label>
            </div>
            <div className="border-2"> 
              <input type="checkbox" name="services" value="irrigation" className="m-2"/>
              <label for="irrigation">Irrigation</label>
            </div>
            <div className="border-2">
              <input type="checkbox" name="services" value="other" className="m-2"/>
              <label for="other">Other</label>
            </div>
          </div>
        </div>        
        
        <div className="details">        
          <p>Details:</p>
          <textarea name="details" className="w-full h-20 text-black"></textarea>         
        </div>  
        <div className="flex justify-center m-2 hover:text-green-600">
          <button className="btn-contact text-center border-2 p-1">SUBMIT</button>
        </div>              
      </form>
    </div>
  )
}
