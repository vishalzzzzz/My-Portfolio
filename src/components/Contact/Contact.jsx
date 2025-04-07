import  React from 'react'
import './Contact.css'

const Contact = () => {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "02257755-1c14-4c36-9972-6556b21bd8b8");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(" EmailSent Successfully Thank You!");
        }
      };
    return (
        <div  id="Contact Us" className="contact">
            <div className="contact-title">
                <h1>Get In Touch</h1>

            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I am currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                    <div className='contant-details'>
                        <div className='contact-detail'>
                            <p>greatstackdev@gmail.com</p>

                        </div>
                        <div className='contact-detail'>
                            <p>+91 123456789</p>

                        </div>
                        <div className='contact-detail'>
                            <p>CA, United States</p>

                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter Your Name" name='name'></input>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter Your Email" name='email'></input>
                    <label htmlFor="">Write Your Message here</label>
                    <textarea  rows="8" placeholder="Enter Your Message" name='message'></textarea>
                    
                    <button  type="submit"className="contant-submit">Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact