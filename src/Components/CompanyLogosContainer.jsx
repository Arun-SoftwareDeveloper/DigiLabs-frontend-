import React from "react";
import nuxt from "../Images/nuxt.jpg";
import anglelist from "../Images/anglelist.webp";
import behance from "../Images/behance.png";
import dribble from "../Images/dribbble.jpg";
import kinsta from "../Images/kinsta.png";
import lottle from "../Images/lottle.svg";
import miro from "../Images/miro.webp";
import wise from "../Images/wise.png";
import "../Styles/CompanyLogosContainer.css";

function CompanyLogosContainer() {
  const Companies = [
    nuxt,
    anglelist,
    behance,
    dribble,
    kinsta,
    lottle,
    miro,
    wise,
  ];

  return (
    <div className="companyLogosContainer container mt-4">
      <div className="row">
        <div className="col-md-12">
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ overflowX: "auto" }}
          >
            {Companies.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Company Logo ${index + 1}`}
                style={{
                  maxWidth: "100px",
                  maxHeight: "100px",
                  marginRight: "10px",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyLogosContainer;
