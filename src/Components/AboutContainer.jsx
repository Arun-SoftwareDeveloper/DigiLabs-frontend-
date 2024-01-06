import React from "react";
import spend from "../Images/spend.png";
import "../Styles/AboutContainer.css";

function AboutContainer() {
  const rangeValue1 = 75;
  const rangeValue2 = 55;
  const rangeValue3 = 15;

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
            <div className="col-md-4">
              <label htmlFor="range1">100 USD</label>
              <input
                type="range"
                id="range1"
                value={rangeValue1}
                min="0"
                max="100"
                step="1"
                disabled
              />
              <p>{`${rangeValue1}%`}</p>
            </div>
            <div className="col-md-4">
              <label htmlFor="range2">500 USD</label>
              <input
                type="range"
                id="range2"
                value={rangeValue2}
                min="0"
                max="100"
                step="1"
                disabled
              />
              <p>{`${rangeValue2}%`}</p>
            </div>
            <div className="col-md-4">
              <label htmlFor="range3">1000 USD</label>
              <input
                type="range"
                id="range3"
                value={rangeValue3}
                min="0"
                max="100"
                step="1"
                disabled
              />
              <p>{`${rangeValue3}%`}</p>
            </div>
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
