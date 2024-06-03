import React from "react";
import Layout from '../components/layout/Layout'
import { Link } from "react-router-dom";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import { FaWpforms, FaInstagramSquare, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src="/images/contact.jpg" alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2"> Any query and info about product feel free to call anytime we 24X7 vaialible </p>
          <p className="mt-3"> <BiMailSend /> : www.help@ecommerceapp.com </p>
          <p className="mt-3"> <BiPhoneCall /> :+91 888 59 29 690 </p>
          <p className="mt-3"> <FaWpforms /> : Your feedback is important to us. If you have any suggestions or comments about your experience, please fill out our Feedback Form.
            <h5 className="mt-2 fw-bold ">Social Media:</h5>
            <p>Connect with us on social media for the latest updates and promotions:</p>
            <div className="conatct-icons" >
              <Link to="https://www.instagram.com/accounts/login/?hl=en"><FaInstagramSquare /></Link>
              <Link to="https://www.facebook.com/login/"><FaFacebook /></Link>
              <Link to='https://in.linkedin.com/?trk=guest_homepage-basic_nav-header-logo'><FaLinkedin /></Link>
              <Link to='https://x.com/i/flow/login'><FaSquareXTwitter /></Link>
            </div>
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;