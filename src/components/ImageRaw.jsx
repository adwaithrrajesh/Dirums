import React from 'react';

function ImageRaw() {
  const images = [
    { name: 'JEWELLERY', path: 'src/assets/Dog image.png' },
    { name: 'TABLE DECOR', path: 'src/assets/Squirell image.png' },
    { name: 'MADHUBANI', path: 'src/assets/Bee.png' },
    { name: 'LIPPAN ART', path: 'src/assets/Tiger.png' },
  ];

  const facilities = [{path:'/src/assets/Easy Returnn.png'},{path:'src/assets/Secured .png'},{path:'src/assets/Free shipping.png'}]

  return (
    <>
    <div className="flex justify-center items-center mt-10 flex-wrap">
      {images.map((image, index) => (
        <div key={index} className={`text-center mb-4 ${index !== images.length - 1 ? 'mr-4 sm:mr-8 md:mr-12 lg:mr-20 xl:mr-24 2xl:mr-32' : ''}`}>
          <img
            src={image.path}
            alt={image.name}
            className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-60 object-cover rounded-full overflow-hidden"
          />
          <div className="mt-2 text-uppercase font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            {image.name}
          </div>
        </div>
      ))}
    </div>
    
    <div className="flex justify-center items-center mt-10 ml-14 flex-wrap">
      {facilities.map((image, index) => (
        <div key={index} className={`text-center mb-4 ${index !== images.length - 1 ? 'mr-4 sm:mr-8 md:mr-12 lg:mr-20 xl:mr-24 2xl:mr-32' : ''}`}>
          <img
            src={image.path}
            className="overflow-hidden"
          />
        </div>
      ))}
    </div>
    </>
  );
}

export default ImageRaw;
