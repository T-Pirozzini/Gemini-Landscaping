import React, {useState} from 'react'
import "./Contact.css"
import emailjs from 'emailjs-com'

export default function Contact() {
  const [message, setMessage] = useState("")  

  const sendEmail = (e) => {
    e.preventDefault()    
    emailjs.sendForm(
      'service_k56wdek',
      'template_vrspn8p',
      e.target,
      'fZzoE3AXoEhioZYVZ'
      ).then(res => {
        setMessage("Thank you for your message - We will respond as soon as we can.")
        e.target.reset()        
        console.log(res)
      }).catch(err => {
        console.log(err)
    })
  }

  return (  
    <div className="contact-container flex justify-center mb-4 md:text-2xl">
      <form
        className="contact-form w-11/12 tracking-wide rounded-md p-2 bg-slate-700 lg:w-1/2 md:mb-6"
        onSubmit={sendEmail}
      >
        <h1 className="text-center border-b-2 border-green-600 text-2xl md:text-4xl">CONTACT</h1>        
        <div className="contact-services-container grid grid-cols-2 pb-2">
          <div className="md:p-2">
            <label>* Name:
              <input type="text" name="name" required className="text-black md:ml-2"/>
            </label>
          </div>
          <div className="md:p-2">
            <label>Phone:
              <input type="text" name="phone" className="text-black md:ml-2" />
            </label>
          </div>
          <div className="md:p-2">
            <label>* Email:
              <input type="email" name="email" required className="text-black md:ml-2"/>
            </label>
          </div>
          <div className="md:p-2">
            <label>Property:        
              <select form="contact-form" name='property' className="w-3/4 text-black md:ml-2 md:w-1/2">
                <option  value="Strata" name='property'>Strata</option>
                <option value="Commercial" name='property'>Commercial</option>
                <option value="Residential" name='property'>Residential</option>
              </select>
            </label>
          </div>
        </div>

        <div className="pb-4 md:span-col-2 md:w-full md:flex md:justify-center">
          <label>Property Address:
            <input type="text" name="address" className="w-full text-black" />
          </label>
        </div>
        
        <div className="services pb-4 md:flex md:justify-center">
          <div className="service-list grid grid-cols-2 text-sm gap-2 md:text-2xl md:w-3/4">          
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
        
        <div className="details md:flex md:justify-center md:flex-col md:items-center">        
          <p className="self-start ml-10">Details:</p>
          <textarea name="details" className="w-full h-20 text-black md:w-5/6"></textarea>         
        </div>  
        <div className="flex flex-col items-center mt-4">
          <button className="btn-contact border-2 p-2 w-32 mb-2 hover:bg-green-600 hover:text-white transition">SUBMIT</button>
          <div className="text-white text-lg text-center">{message}</div>
        </div>              
      </form>
    </div>
  )
}
