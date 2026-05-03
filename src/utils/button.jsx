import React from "react";

function Button({size = '16', img, text1, text2}) {
  return (
    <section
      style={{
        display: "flex",
        backgroundColor: "black",
        padding: "2px 4px",
        width: "110px",
        border: "1px solid gray",
        borderRadius: "5px",
        padding: "4px",
        justifyContent: 'space-between',
        cursor: 'pointer'
      }}
    >
      <div style={{ width: "28px" }}>
        <img src={img} />
      </div>
      <div style={{ lineHeight: "1.3", color: "white" }}>
        <p style={{ fontSize: "8px" }}>{text1}</p>
        <p style={{ fontSize: `${size}px` }}>{text2}</p>
      </div>
    </section>
  );
}

export default Button;
