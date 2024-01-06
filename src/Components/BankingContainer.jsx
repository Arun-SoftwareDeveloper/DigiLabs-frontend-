import React from "react";
import "../Styles/BankingContainer.css";

function BankingContainer() {
  return (
    <div className="bankingContainer container mt-4" id="banking">
      <div className="row">
        <div className="col-md-12">
          <div className="text-center">
            <h1 className="compareFeatures">
              Elevating Card Programs
              <br /> with Cutting-Edge <br />
              Technologies
            </h1>
            <br></br>
            <p className="compareFeatures">
              Conspector elevating elit, by using the card holder
              <br /> during their card profit assurance
            </p>
            <h5 className="compareFeatures compare-features-btn">
              Compare all pro features{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </h5>
            <br /> <br /> <br />
            <div className="row justify-content-around bankContainer-spacing">
              <div className="col-md-3 feature-item">
                <i className="fa-solid fa-globe"></i>
                <h5>Globally Accepted</h5>
                <p>
                  The cards are globally accepted worldwide for the global
                  customers.
                </p>
              </div>
              <div className="col-md-3 feature-item">
                <i className="fa-solid fa-key"></i>
                <h5>Biometric Integrated</h5>
                <p>The cards have biometric integration for added security.</p>
              </div>
              <div className="col-md-3 feature-item">
                <i className="fa-solid fa-lock"></i>
                <h5>Fully Secured</h5>
                <p>The cards are fully secured to ensure data protection.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankingContainer;
