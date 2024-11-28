import React from "react";
import Carousel from "./Carousel";
import SocialMedia from "./SocialMedia";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center">
      {/* Hero Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 lg:px-12 gap-8">
        {/* Left Column */}
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-7xl font-bold drop-shadow-lg">
            Welcome to{" "}
            <span className="text-primary">
              Only<span className="text-secondary">Darel</span>
            </span>
          </h1>
          <p className="text-sm md:text-lg drop-shadow-lg font-roboto ">
            <span className="text-secondary">Crafting the Web,</span> solving
            problems, built for results. Trusted by teams that value
            <span className="text-primary italic"> Efficiency</span> and
            <span className="italic text-secondary"> Innovation.</span>
          </p>
          <div className="space-x-4 drop-shadow-lg">
            <button className="bg-secondary text-bgBlue font-medium px-6 py-3 rounded-lg hover:bg-primary hover:text-secondary transition-all duration-500 ease-in-out">
              My Projects
            </button>
            <button className="border border-white text-white font-light px-6 py-3 rounded-lg hover:bg-secondary hover:text-bgBlue hover:border-bgBlue transition-all duration-500 ease-in-out">
              My Awards
            </button>
          </div>
        </div>

        {/* Right Column */}
        <Carousel />
      </div>
      <SocialMedia/>
    </section>
  );
};

export default Hero;
