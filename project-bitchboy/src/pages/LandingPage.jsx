import React, { useState } from "react";
import "./css/LandingPage.css";
import "./css/SubscribeButton.css";
import ModelAnimated from "./../components/jsx/LandingPage/ModelAnimated.jsx";
import PopupModal from "./../components/jsx/PopupModal/PopupModal.jsx";



function LandingPage() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);


  return (
    <div style={{ minHeight: "100vh", minWidth: "100vw", background: "#0c0c0c", position: "relative" }}>
      <ModelAnimated />
      <div className="centered-logo-container">
        <img
          src="/images/logotextwhite.svg"
          alt="Logo"
          className="centered-logo-img"
        />
      </div>

      {/* Subscribe button */}
      <button className="cyber-button" onClick={handleOpenModal}>
        <span data-text="SIGN UP NOW" class="glitch">SIGN UP NOW</span>
        <span class="cyberpunk-border"></span>
        <span class="gradient-overlay"></span>
        <span class="scanline"></span>
      </button>

      {isModalOpen && (
        <PopupModal className="myModal relative w-full max-w-200 mx-auto font-mono z-50" onClose={handleCloseModal} />
      )}

      {/* Diagonal stripes */}
      {/* <div className="diagonal-stripe" id="stripe1"></div>
      <div className="diagonal-stripe" id="stripe2"></div>
      <div className="diagonal-stripe" id="stripe3"></div> */}

      {/* Scroll Sections */}
      <section id="section-1" className="scroll-section"></section>
      <section id="section-2" className="scroll-section"></section>
      <section id="section-3" className="scroll-section"></section>
      <section id="section-4" className="scroll-section"></section>
    </div>
  );
}

export default LandingPage;
