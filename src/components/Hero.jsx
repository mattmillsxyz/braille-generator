import React from 'react';

const Hero = (props) => {
  return (
    <section className="row">
      <div className="col-md-8 offset-md-2">
        <img
          src="/img/braille-generator.jpg"
          width="315"
          alt="Braille Generator"
        />
        <h1 style={{ fontWeight: 'bold' }}>Braille Generator</h1>
        <p>
          Simply type in a word or phrase to have it converted to braille. Click
          the download button to save the braille code as an image.
        </p>
      </div>
    </section>
  );
};

export default Hero;
