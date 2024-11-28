import React from "react";

const CarouselCard = ({ imgUrl, imgTitle }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <img
        src={imgUrl}
        alt={imgTitle}
        className="max-w-[20rem] aspect-square object-cover rounded-lg"
      />
    </div>
  );
};

export default CarouselCard;
