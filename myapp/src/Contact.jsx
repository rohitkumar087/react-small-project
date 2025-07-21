import React from 'react'
import Nav from "./nav";

const Contact = () => {
  return (
    <>
    <Nav/>
    <div className="page contact">
      <h2>Contact Me</h2>
      <p><b><i class="fa-solid fa-envelope"></i> Email :</b>  rohitkumar087@gmail.com</p>
      <p><b><i class="fa-solid fa-phone"></i> Mobile :</b> +91-9320618432</p>
      <a href='https://github.com/rohitkumar087' target='blank' className='btn' style={{marginRight:"30px"}}>Github <i class="fa-brands fa-github"></i></a>
      <a href='https://www.linkedin.com/in/rohit-kumar-8567a8314?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXxNxuf%2FqTZmIy8f%2F%2F6w7zg%3D%3D'  target='blank' className='btn'>Linkedin <i class="fa-brands fa-linkedin"></i></a>
    </div>
    </>
  );
};

export default Contact;