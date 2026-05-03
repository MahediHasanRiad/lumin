import React from "react";
import "../style/header.style.css";

function HeaderPart() {
  return (
    <section className="main">
      <div className="w-full" style={{ width: "137px", height: "48px" }}>
        <img src="../../../public/POTG LOGO.png" alt="" />
      </div>
      <div>
        <button className="button">Download now</button>
      </div>
    </section>
  );
}

export default HeaderPart;
