import React from "react";
import CompanyLogosContainer from "./CompanyLogosContainer";
import "../Styles/MidContainer.css";

function MidContainer() {
  return (
    <div className="midContainer container mt-4" id="cardaccess">
      <div className="row">
        <div className="col-md-12">
          <div className="text-center">
            <p className="text-center">Seameless Experince</p>
            <h1>
              Unleasing the Next <br />
              Generation of Card
              <br /> Solutions
            </h1>
            <p>
              Realisze the content of Card Solutions in the solutions for the
              customer{" "}
            </p>
            <button className="btn unlock-btn">
              Unlock Your Card <i class="fa-solid fa-arrow-right"></i>
            </button>
            <br />
            <br></br>
            <p>*No credit card required.</p>
          </div>
        </div>
      </div>
      <CompanyLogosContainer />
    </div>
  );
}

export default MidContainer;
