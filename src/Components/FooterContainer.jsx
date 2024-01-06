import React from "react";

function FooterContainer() {
  return (
    <div className="container mt-4">
      {" "}
      <div className="text-center social-mediaLinks">
        <i
          class="fa-brands fa-github"
          style={{ marginRight: "20px", cursor: "pointer", fontSize: "26px" }}
        ></i>
        <i
          class="fa-brands fa-linkedin-in"
          style={{ cursor: "pointer", fontSize: "26px" }}
        ></i>
        <p style={{ marginTop: "30px" }}>
          ©2024 MODE UI Inc.All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default FooterContainer;
