import React from "react";
import wise from "../Images/wise.png";
import ceo from "../Images/ceo.jpg";
import "../Styles/CarrierContainer.css";
import ModeUIContainer from "./ModeUIContainer";

function CarrierContainer() {
  return (
    <div className="carrierContainer container mt-4" id="carrer">
      <div className="row">
        <div className="text-center">
          <img
            src={wise}
            alt={`Company Logo`}
            style={{
              maxWidth: "100px",
              maxHeight: "100px",
              marginRight: "10px",
            }}
          />
          <h5>
            I had a pleasure of experiencing the next generration <br />
            of the card solutions with this incredible product.
            <br />
            It's refreshing to see such innovation in the <br />
            financial industry.
          </h5>

          <img
            src={
              "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwc21pbGV8ZW58MHx8MHx8fDA%3D"
            }
            alt={`Company Logo`}
            style={{
              maxWidth: "100px",
              maxHeight: "100px",
              marginRight: "10px",
              borderRadius: "50%",
              marginTop: "70px",
            }}
          />
          <h6>Jack Dave</h6>
          <p>Lead Designer</p>
          <i class="fa-solid fa-star" style={{ color: "gold" }}></i>
          <i class="fa-solid fa-star" style={{ color: "gold" }}></i>
          <i class="fa-solid fa-star" style={{ color: "gold" }}></i>
          <i class="fa-solid fa-star" style={{ color: "gold" }}></i>
        </div>
      </div>
      <div className="text-center" style={{ marginTop: "70px" }}>
        <h3>
          Unlock Limitless Possibilities with Our
          <br /> New Card Solutions
        </h3>
      </div>
      <div className="text-center">
        <button
          className="btn btn-primary"
          style={{ backgroundColor: "vilot" }}
        >
          Unlock your Card
          <i class="fa-solid fa-credit-card" style={{ marginLeft: "5px" }}></i>
        </button>
        <button
          className="btn btn-primary"
          style={{ backgroundColor: "gray", marginLeft: "10px" }}
        >
          Customer Support
          <i class="fa-solid fa-headphones" style={{ marginLeft: "5px" }}></i>
        </button>
      </div>
      <div style={{ marginTop: "100px", marginBottom: "100px" }}>
        <ModeUIContainer />
      </div>
    </div>
  );
}

export default CarrierContainer;
