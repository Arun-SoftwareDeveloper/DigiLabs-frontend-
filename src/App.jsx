import React from "react";
import HeaderContent from "./Components/HeaderContent";
import MidContainer from "./Components/MidContainer";
import BankingContainer from "./Components/BankingContainer";
import AboutContainer from "./Components/AboutContainer";
import CarrierContainer from "./Components/CarrierContainer";
import ModeUIContainer from "./Components/ModeUIContainer";
import ContactContainer from "./Components/ContactContainer";
import FooterContainer from "./Components/FooterContainer";

function App() {
  return (
    <div>
      <HeaderContent />
      <MidContainer />
      <BankingContainer />
      <AboutContainer />
      <CarrierContainer />
      <ContactContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
