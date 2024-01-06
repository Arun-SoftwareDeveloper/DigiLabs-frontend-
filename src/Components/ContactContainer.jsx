import React from "react";
import "../Styles/ContactContainer.css";

function ContactContainer() {
  return (
    <div className="contactContainer container mt-4" id="contact">
      <div className="row text-center">
        <div className="col-md-2">
          <h5>Company</h5>
          <p>About Us</p>
          <p>Pricing</p>
          <p>Contact Us</p>
          <p>Features</p>
        </div>
        <div className="col-md-2">
          <h5>Products</h5>
          <p>Figma Design System</p>
          <p>App Dev</p>
          <p>Digital Marketing</p>
          <p>Android Dev</p>
        </div>
        <div className="col-md-2">
          <h5>Resources</h5>
          <p>Templates</p>
          <p>Landing Pages</p>
          <p>Documentation</p>
          <p>Comp Library</p>
        </div>
        <div className="col-md-2">
          <h5>Legal</h5>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Disclaimer</p>
          <p>Affilitive Programs</p>
        </div>
        <div className="col-md-2">
          <h5>Support</h5>
          <p>Help Center</p>
          <p>Raise Tickets</p>
          <p>Report</p>
          <p>Refund</p>
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;
