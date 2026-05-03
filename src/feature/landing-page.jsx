import React from "react";
import HeaderPart from "./component/header";
import HeroPart from "./component/hero-part";
import Streaming from "./component/streaming";
import Working from "./component/working";
import Experience from "./component/experience";
import MobileScreen from "./component/mobile-screen";

function LandingPage() {
  return (
    <section
      style={{
        fontFamily: 'system-ui',
        background: `
          url("../../public/bg.png"),
          radial-gradient(circle at 30% 30%, #ff2d95 0%, transparent 40%),
          radial-gradient(circle at 70% 40%, #3b2cff 0%, transparent 50%),
          radial-gradient(circle at 50% 80%, #0a0f2c 0%, #050814 70%)
        `,
        backgroundColor: "#050814",
      }}
    >
      <HeaderPart />
      <HeroPart />
      <MobileScreen />
      <Streaming />
      <Working />
      <Experience />
    </section>
  );
}

export default LandingPage;
