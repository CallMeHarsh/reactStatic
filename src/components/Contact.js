import React, {useState} from 'react';
import emailjs from 'emailjs-com';



function ContactUs() {

  const [loader, setLoader] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setLoader(true);


    emailjs.sendForm('service_txty6as', 'template_chun92i', e.target, 'user_ycxTVV07zdKbn4oqbyERb')
      .then((result) => {
          console.log(result.text);
          alert("Message recieved !!!");
          setLoader(false);
      }, 
      (error) => {
          console.log(error.text);
          setLoader(true);

      });
      e.target.reset()
  }

  // function myFunction() {
  //   alert("Your Message Is recieved !!")
  //     }
  

  return (
    <div className="container my-5 py-5">
    <h1 className="font-weight-light text-center py-5">
      <span className="text-info">Thank you! </span>for your interest
    </h1>
    <div className="row justify-content-center">
      <div className="col-11 col-lg-5">
     <form className="contact-form bg-light" onSubmit={sendEmail}>



      <input type="hidden" name="contact_number" />
      <div className="form-group">
      <label>Name</label>
      <input type="text" placeholder="Enter name" className="form-control" name="name" />
      </div>
      <div className="form-group">
      <label>Email</label>
      <input type="email" placeholder="Enter email" className="form-control" name="email" />    
      </div>
      <div className="form-group">
      <label>Message</label>
      <textarea placeholder="Tell me about your project or leave a little message :)" className="form-control" name="message"/>
      </div>
      <input type="submit" value="Send" className="btn btn-dark float-right" style={{ backgroundColor: "black"}}/>
     </form>



      </div>
      </div>
      </div>

);
}


export default ContactUs;

{/* <div className="container my-5 py-5">
<h1 className="font-weight-light text-center py-5">
  <span className="text-info">Thank you! </span>for your interest
</h1>
<div className="row justify-content-center">
  <div className="col-11 col-lg-5">
    <form className="px-5 mx-5" onSubmit={sendEmail}>
      <div className="form-group">
        <label>Name *</label>
        <input
          placeholder="Name"
         
          className="form-control"
          
        />
      </div>

      <div className="form-group">
        <label>Email *</label>
        <input
          placeholder="Email"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>
          Tell me about your project *
        </label>
        <textarea
          placeholder="Message"
          className="form-control"
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="btn btn-dark float-right"
        style={{ backgroundColor: "black"}}
      >
        Let's talk business
      </button>
    </form>
  </div>
</div> */}
    
