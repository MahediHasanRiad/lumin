import './style/title-description.style.css';

function TitleDescription({text, highlighed, description}) {
  return (
    <section className='mx-auto w-full text-center my-10'>
      <div className="inline-block">
        <h1 className="working-info-title">
          {text} <span className="working-info-highlighted-word">{highlighed}</span>
        </h1>
        <p className="working-info-description">{description}</p>
      </div>
    </section>
  );
}

export default TitleDescription;
