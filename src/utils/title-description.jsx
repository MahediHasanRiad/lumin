import './style/title-description.style.css';

function TitleDescription({test, highlighed, description}) {
  return (
    <section className='mx-auto w-full text-center my-10'>
      <div className="inline-block">
        <h1 className="title-part">
          How it <span className="highlighted-word">Work</span>
        </h1>
        <p className="description-part">Start Bingeing in 3 Simple Steps</p>
      </div>
    </section>
  );
}

export default TitleDescription;
