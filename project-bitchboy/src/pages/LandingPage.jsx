import "./css/LandingPage.css";
import "./css/SubscribeButton.css";
import ModelAnimated from "./../components/jsx/LandingPage/ModelAnimated.jsx";

function LandingPage() {
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
      <button class="cyber-button">
        <span data-text="SIGN UP NOW" class="glitch">SIGN UP NOW</span>
        <span class="cyberpunk-border"></span>
        <span class="gradient-overlay"></span>
        <span class="scanline"></span>
      </button>

      {/* Diagonal stripes */}
      <div className="diagonal-stripe" id="stripe1"></div>
      <div className="diagonal-stripe" id="stripe2"></div>
      <div className="diagonal-stripe" id="stripe3"></div>

      {/* Scroll Sections */}
      <section id="section-1" className="scroll-section"></section>
      <section id="section-2" className="scroll-section"></section>
      <section id="section-3" className="scroll-section"></section>
      <section id="section-4" className="scroll-section"></section>
    </div>
  );
}

export default LandingPage;
