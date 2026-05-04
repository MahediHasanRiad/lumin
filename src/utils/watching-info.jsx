import React from "react";
import "./style/working-info.style.css";

function WatchingInfo({ number, text, description }) {
  return (
    <section className="md:w-[70%] md:grid grid-cols-[max-content_1fr] gap-4 p-6 overflow-hidden">
      <div>
        <span className="title">
          {number}. {text}:
        </span>
      </div>
      <div>
        <span className="description">{description}</span>
      </div>
    </section>
  );
}

export default WatchingInfo;
