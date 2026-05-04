import LogoTypeButton from "../../utils/logo-type-button";
import TitleDescription from "../../utils/title-description";
import WatchingInfo from "../../utils/watching-info";
import WorkingInfo from "../../utils/working-info";
import "../style/working.style.css";

function Working() {
  return (
    <section className="main-content">
      {/* logo like button  */}
      <div>
        <LogoTypeButton text={"From Discovery to Drama in 3 Taps"} />
      </div>

      {/* title section  */}
      <TitleDescription
        test={"How it"}
        highlighed={"Work"}
        description={"Start Bingeing in 3 Simple Steps"}
      />

      {/* info part  */}
      <section className="grid grid-cols-2 gap-y-12 relative mx-auto py-10">
        {/* The Vertical Dashed Line */}
        <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-dashed border-pink-500 transform -translate-x-1/2 z-0" />

        {/* Left Column */}
        <div className="col-start-1 pr-12">
          <WorkingInfo
            number={"1"}
            text={"Download & Onboard"}
            description={"Get started in seconds with a seamless UI."}
          />
        </div>

        {/* Spacer for Step 1 Right Side */}
        <div className="col-start-2" />

        {/* Spacer for Step 2 Left Side */}
        <div className="col-start-1" />

        {/* Step 2: Right Column */}
        <div className="col-start-2 pl-12">
          <WorkingInfo
            number={"2"}
            text={"Discover"}
            description={
              "Browse through trending dramas or use search to find your niche."
            }
          />
        </div>

        {/* Step 3: Left Column */}
        <div className="col-start-1 pr-12 text-right">
          <WorkingInfo
            number={"3"}
            text={"Earn & Watch"}
            description={
              "Watch ads to earn coins or join membership for unlimited access."
            }
          />
        </div>
      </section>
    </section>
  );
}

export default Working;
