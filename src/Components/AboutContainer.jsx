import React from "react";
import spend from "../Images/spend.png";
import "../Styles/AboutContainer.css";

function AboutContainer() {
  return (
    <div className="aboutContainer container mt-4" id="processing">
      <div className="row">
        <div className="col-md-6">
          {/* Apply Bootstrap classes to the image */}
          <img src={spend} alt="spend" className="img-fluid rounded" />
        </div>
        <div className="col-md-6 wrap-container">
          <h6>Spending</h6>
          <p>
            <i
              className="fa-solid fa-credit-card"
              style={{ marginRight: "5px" }}
            ></i>
            9321 via cards
          </p>
          <br />
          <h5>
            127.21<sup>USD</sup>
          </h5>
          <br />
          <p>
            via last week <span>Last purchased on 12 Sep 2022</span>
          </p>
          <br />
          <div className="row">
            <div className="col-md-4">100 USD</div>
            {/* Here set the range like set 75% */}
            <div className="col-md-4">500 USD</div>
            {/* Here set the range like set 55% */}
            <div className="col-md-4">1000 USD</div>
            {/* Here set the range like set 75% */}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="row">
        <div className="col-md-3">
          <h3>2 Million</h3>
          <h6>Customers</h6>
          <p>We have million of global customers and card holders.</p>
        </div>
        <div className="col-md-3">
          <h3>1K Downloads</h3>
          <h6>Customers</h6>
          <p>We have million of global customers.</p>
        </div>
        <div className="col-md-3">
          <h3>$723 Million</h3>
          <h6>Transactions</h6>
          <p>We have million of global customers.</p>
        </div>

        <div className="col-md-3">
          <h3>2.0</h3>
          <h6>Version</h6>
          <p>We have million of global customers.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutContainer;
