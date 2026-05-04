import React from "react";
import "../style/streaming.style.css";
import LogoTypeButton from "../../utils/logo-type-button";

function Streaming() {
  return (
    <section className="content-section">
      {/* logo type button  */}
      <LogoTypeButton text={"BEYOND STEAMING"} />

      {/* header  */}
      <h1 className="heading">
        More than Just <span className="highlight-text">Watching</span>
      </h1>
      <p className="subtext">Where entertainment meets rewards, personalization, and exclusive content — all in one seamless experience.</p>
    </section>
  );
}

export default Streaming;
