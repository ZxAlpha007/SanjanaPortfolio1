import React from 'react';
import './contactForm.css';

const ContactForm = () => {
  return (
    <div className='cBody'>
      <form action="/action_page.php" className='formx'>
        <div className='ponky'>
          <label htmlFor="name" className='labelx'>Name</label>
          <input type="text" className='inputx' id="fname" name="firstname" placeholder="Your name.." required />
        </div>
        <div className='ponky'>
          <label htmlFor="number" className='labelx'>Number</label>
          <input type="tel" className='inputx' id="lname" name="lastname" placeholder="Your number.." required />
        </div>
        <div className='ponky'>
          <label htmlFor="email" className='labelx'>Email</label>
          <input type="email" className='inputx' id="email" name="email" placeholder="Your email.." required />
        </div>
        <div className='ponky'>
          <label htmlFor="message" className='labelx'>Message</label>
          <textarea className='inputy' id="message" name="message" placeholder="Your message.." required />
        </div>
        
        <div className='ponky'>
          <label htmlFor="jobType" className='labelx'>Job Type</label>
          <select className='inputx' id="jobType" name="jobType" required>
            <option value="Freelance">Freelance</option>
            <option value="Job">Job</option>
          </select>
        </div>

        <input className='submitBtn' type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ContactForm;
