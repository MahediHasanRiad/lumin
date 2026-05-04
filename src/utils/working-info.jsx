import './style/working-info.style.css'

function WorkingInfo({number, text, description}) {
  return (
    <section>
      {/* <section className="w-[90%] grid grid-cols-[max-content_1fr] gap-4 p-6"> */}
        <section className="md:w-[70%] md:grid grid-cols-[max-content_1fr] gap-4 p-6 overflow-hidden">
        <div>
          <span className="working-info-title">
            {number}. {text}:
          </span>
        </div>
        <div>
          <span className="working-info-description">{description}</span>
        </div>
      </section>
    </section>
  );
}

export default WorkingInfo;
