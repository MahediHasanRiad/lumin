import React from "react";
import Button from "../../utils/button";
import "../style/hero.style.css";
import LogoTypeButton from "../../utils/logo-type-button";

function HeroPart() {
  return (
    <section className="hero-content">
      {/* logo type button  */}
      <LogoTypeButton text={"THE ULTIMATE POCKET CINEMA"} />

      {/* heading text  */}
      <div style={{ marginBottom: "20px", width: '60%', margin: 'auto' }}>
        <p className="hero-title-text">Cinematic Stories, Right in</p>
        <p className="hero-heighlited-text">Your Pocket.</p>

        {/* heading description  */}
        <p className="hero-description-text">
          Binge-watch high-quality short drama series anytime, anywhere. From
          romance to thrillers, experience stories that keep you on the edge.
        </p>
      </div>

      {/* app store logo  */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          margin: "20px 0px",
        }}
      >
        <Button
          img={"../../../public/playstore.png"}
          text1={"GET IT ON"}
          text2={"Google Play"}
          size="13"
        />
        <Button
          img={"../../../public/apple_logo.png"}
          text1={"Download on the"}
          text2={"App Store"}
        />
      </div>
    </section>
  );
}

export default HeroPart;
