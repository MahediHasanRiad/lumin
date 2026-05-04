import React from "react";
import "../style/header.style.css";

function HeaderPart() {
  return (
    <section className="main">
      <div className="logo-wrapper">
        <img src="../../../public/POTG LOGO.png" alt="" />
      </div>
      <div>
        <button className="button">Download now</button>
      </div>
    </section>
  );
}

export default HeaderPart;
