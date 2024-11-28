import React from "react";
import { cardDetails } from "../assets/carousel-config";
import CarouselCard from "./CarouselCard";

const Carousel = () => {
  return (
    <div className="flex justify-center overflow-hidden relative h-64 md:h-full w-full rounded-lg">
      <div className="carousel-track flex absolute left-0 justify-center items-center gap-4 w-[200%] h-full animate-slide rounded-full">
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <CarouselCard
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselCard>
          );
        })}
        
        
      </div>
    </div>
  );
};

export default Carousel;
