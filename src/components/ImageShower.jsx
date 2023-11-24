import React from "react";

function ImageShower() {
  return (
    <div className="lg:p-28 md:p-20">
    <div className="flex flex-wrap">
      <img
        src="https://i.ibb.co/N7pV10S/camel-art2.png"
        alt="First Image"
        className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2"
      />
      <img
        src="https://i.ibb.co/NZSyc0c/elephant-Artwork.png"
        alt="Second Image"
        className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 "
      />
    </div>
    </div>
  );
}

export default ImageShower;
