import React from "react";

const Para: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 py-8 md:py-12 px-12 md:text-justify md:px-48">
      <p className="text-black text-lg md:text-xl dark:text-white animate-bounce-1s">
        Tuning Factory is a small automotive hobby shop based in Calgary, 
        Alberta .  We cater to specific makes and models from different
        manufacturers to ensure we have the specific tools, workshop manuals, 
        and the knowledge to ensure a successful stress-free repair, service, or
        performance upgrade.
      </p>
    </div>
  );
};

export default Para;
