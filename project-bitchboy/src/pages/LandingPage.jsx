"use client";
import React, { useState } from "react";
import "./css/LandingPage.css";
import "./css/SubscribeButton.css";
import ModelAnimated from "./../components/jsx/LandingPage/ModelAnimated.jsx";
import PopupModal from "./../components/jsx/PopupModal/PopupModal.jsx";
import Balatro from "./Balatro/Balatro.jsx";

function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "#0c0c0c",
        position: "relative",
      }}
    >
      {/* Balatro Component */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Balatro
          pixelFilter={10000}
          color1="#FFFFFF"
          color2="#FF6B00"
          color3="#FFFFFF"
          lighting={1}
          contrast={1}
          spinAmount={0.1}
          spinSpeed={10}
          // mouseInteraction={false}
          // spinEase={10}
        />
      </div>

      {/* Background video */}
      <ModelAnimated />
      <div className="centered-logo-container">
        <img
          src="/images/logoblack.svg"
          alt="Logo"
          className="centered-logo-img"
        />
      </div>

      {/* Subscribe button */}
      <button className="cyber-button" onClick={handleOpenModal}>
        <span data-text="SIGN UP NOW" class="glitch">
          SIGN UP NOW
        </span>
        <span class="cyberpunk-border"></span>
        <span class="gradient-overlay"></span>
        <span class="scanline"></span>
      </button>

      {isModalOpen && (
        <PopupModal
          className="myModal relative w-full max-w-200 mx-auto font-mono z-50"
          onClose={handleCloseModal}
        />
      )}

      {/* Scroll Sections */}
      <section id="section-1" className="scroll-section"></section>
      <section id="section-2" className="scroll-section"></section>
      <section id="section-3" className="scroll-section"></section>
      <section id="section-4" className="scroll-section"></section>
    </div>
  );
}

export default LandingPage;
