import LogoTypeButton from "../../utils/logo-type-button";
import TitleDescription from "../../utils/title-description";
import "../style/experience.style.css";

function Experience() {
  return (
    <section className="experienct-contect">
      {/* logo like button  */}
      <div>
        <LogoTypeButton text={"Unlock Exclusive. Go Add Free"} />
      </div>

      {/* headline  */}
      <div className="w-[80%] mx-auto">
        <TitleDescription
          text={"Upgrade your"}
          highlighed={"Experience"}
          description={
            "Where entertainment meets rewards, personalization, and exclusive content — all in one seamless experience."
          }
        />
      </div>

      {/* benifits  */}
      <section className="benefits-card">
        <section className="benefits-card-inner">
          <h1 className="benefits-title">What Benifits :</h1>
          <ul className="benefits-list">
            <li>Unlimited access to 8,000+ series</li>
            <li>Download</li>
            <li>Daily member points</li>
            <li>Members-only dramas</li>
            <li>1080p quality</li>
            <li>Gift a membership to a friend</li>
            <li>Members-only themes</li>
            <li>Ad-free</li>
          </ul>
        </section>
      </section>
    </section>
  );
}

export default Experience;
