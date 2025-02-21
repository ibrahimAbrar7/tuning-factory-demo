import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-black dark:bg-stone-950 text-center py-12">
      <h1 
        className="text-white text-5xl lg:text-6xl font-bold animate-bounce-1s font-barlow                                        "
      >
        About Us
      </h1>
      <h2 
        className="text-orange-400 text-3xl lg:text-4xl font-bold mt-4 animate-bounce-1s font-barlow                                        "
      >
        TUNING FACTORY
      </h2>
    </div>
  );
};

export default About;
