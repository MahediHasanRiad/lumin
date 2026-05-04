import React from "react";
import "./style/watching.style.css";

function WatchingInfo({ number, text, description }) {
  return (
    <section className="w-[90%] grid grid-cols-[max-content_1fr] gap-4 p-6">
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
