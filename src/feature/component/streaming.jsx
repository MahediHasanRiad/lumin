import React from "react";
import LogoTypeButton from "../../utils/logo-type-button";
import WatchingInfo from "../../utils/watching-info";
import "../style/streaming.style.css";

function Streaming() {
  return (
    <section className="content-section">
      {/* logo type button  */}
      <LogoTypeButton text={"BEYOND STEAMING"} />

      {/* header  */}
      <h1 className="heading">
        More than Just <span className="highlight-text">Watching</span>
      </h1>
      <p className="subtext">
        Where entertainment meets rewards, personalization, and exclusive
        content — all in one seamless experience.
      </p>

      {/* info part  */}
      <section className="grid md:grid-cols-2 gap-4 my-8">
        <section className="grid lg:border-r-2 lg:border-dashed lg:border-[#DD2C91] pl-4">
          <WatchingInfo
            number={"1"}
            text={"Daily Reward"}
            description={
              "Where entertainment meets rewards, personalization, and exclusive content — all in one seamless experience."
            }
          />
          <WatchingInfo
            number={"3"}
            text={"Daily Reward"}
            description={
              "Where entertainment meets rewards, personalization, and exclusive content — all in one seamless experience."
            }
          />
        </section>
        <section className="grid pl-4">
          <WatchingInfo
            number={"1"}
            text={"Daily Reward"}
            description={
              "Where entertainment meets rewards, personalization, and exclusive content — all in one seamless experience."
            }
          />
          <WatchingInfo
            number={"3"}
            text={"Daily Reward"}
            description={
              "Where entertainment meets rewards, personalization, and exclusive content — all in one seamless experience."
            }
          />
        </section>
      </section>
    </section>
  );
}

export default Streaming;
