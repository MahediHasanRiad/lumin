import React from "react";
import HeaderPart from "./component/header";
import HeroPart from "./component/hero-part";
import Streaming from "./component/streaming";
import Working from "./component/working";
import Experience from "./component/experience";
import MobileScreen from "./component/mobile-screen";
import Footer from "./component/footer";
import "./style/landing-page.style.css";

function LandingPage() {
  return (
    <section className="hero-container">
        <HeaderPart />
        <HeroPart />
        <MobileScreen />
        <Streaming />
        <Working />
        <Experience />
        <Footer />
    </section>
  );
}

export default LandingPage;
