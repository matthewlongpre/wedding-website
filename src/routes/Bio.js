import React from "react";
import PageBackground from "./../components/styled-components/PageBackground";

const Bio = () => (
  <div>
    <PageBackground />
    <div className="page-content pt-100 position-relative pb-80 h-min-content">

      <h2 className="font-blithe m-0 f-3 text-center">Our Story</h2>

      <h4 className="text-italic">How did the happy couple meet? Well, it kinda depends who you ask.</h4>

      <p>Amee seems to think it was in September 2009 at <em>Sopranos</em>, the now shut-down local karaoke dive bar, where they shared a slobbery microphone and belted out <em>Hey Jude</em> (see Figure A).</p>

      <img className="w-100" alt="Matt and Amee at Sopranos, circa 2009" src="https://res.cloudinary.com/matt-amee/image/upload/v1548826020/matt-amee/m-a-sopranos.jpg" />

      <p>Matt would say that it was at a Balmoral house party, where Matt struck up the conversation with a clumsy comment about Amee’s treble clef tattoo. She then asked if his dirty kicks were “his party shoes.” But nope, they were just his everyday, very dirty shoes.</p>

      <p>Many bar nights and parties later… </p>

      <p>The pair crossed paths again at <em>Sasquatch Music Festival</em> down in Washington State in 2011. Not long afterward, Matt woke up one morning to see that Amee had commented on one of his super old Facebook photos at 3am...</p>

      <p>And they’ve been inseparable ever since.</p>

      <p>Over the past seven years, they’ve shared three apartments together (all within a two block radius in James Bay). They’ve travelled together to Seattle, Portland, San Francisco, Paris, Geneva, Ibiza, London, Athens and Santorini.</p>

      <p>It was in Santorini that Matt finally produced the engagement ring he had been secretly carrying halfway around the world, and Amee seemed to be into it. So, here we are!</p>

      <img alt="Matt and Amee in Santorini" className="w-100" src="https://res.cloudinary.com/matt-amee/image/upload/v1548827669/matt-amee/santorini-4.jpg" />

    </div>
  </div>
);

export default Bio;
