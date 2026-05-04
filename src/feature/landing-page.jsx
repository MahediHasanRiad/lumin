import React from "react";
import HeaderPart from "./component/header";
import HeroPart from "./component/hero-part";
import Streaming from "./component/streaming";
import Working from "./component/working";
import Experience from "./component/experience";
import MobileScreen from "./component/mobile-screen";
import "./style/landing-page.style.css";

function LandingPage() {
  return (
    <section className="hero-container">
      <div className="glow-wrapper">
        <div className="glow-pink" />
        <div className="glow-blue" />
        <div className="glow-noise" />
      </div>
      <div className="hero-content">
        <HeaderPart />
        <HeroPart />
        <MobileScreen />
        <Streaming />
        <Working />
        <Experience />
      </div>
    </section>
  );
}

export default LandingPage;
