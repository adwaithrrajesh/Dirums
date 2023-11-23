import React from 'react';
import ViewMore from './ViewMore';

const productData = [
  {
    id: 1,
    imageUrl: 'https://sotinpc.files.wordpress.com/2013/05/1-backyard-butterflies-10-12-0911.jpg?w=520',
    productName: 'BUTTERFLY',
    sellerName: 'Amit Chaudhary',
    price: '₹10,000/-',
  },
  {
    id: 2,
    imageUrl: 'https://th.bing.com/th/id/OIP.W1uc8ua2ul18YEXwboPNtAHaE7?w=980&h=653&rs=1&pid=ImgDetMain',
    productName: 'FROG',
    sellerName: 'Amit Chaudhary',
    price: '₹12,000/-',
  },
  {
    id: 3,
    imageUrl: 'https://sotinpc.files.wordpress.com/2013/05/1-backyard-butterflies-10-12-0911.jpg?w=520',
    productName: 'BUTTERFLY',
    sellerName: 'Amit Chaudhary',
    price: '₹10,000/-',
  }
];

function Card({ product }) {
    return (
      <div className="max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-4 my-4 rounded overflow-hidden shadow-lg relative" key={product.id}>
        {/* Image */}
        <div className="relative">
          <img
            src={product.imageUrl}
            alt={product.productName}
            className="w-full h-64 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover rounded-t"
          />
  
          {/* Cart Icon Inside Image */}
          <div className="absolute bottom-2 right-2 flex items-center">
            {/* "Add to Cart" Text with Cart Icon */}
            <span className="text-black font-extrabold bg-gray-300 px-2 py-1 rounded-full flex items-center">
              <img src="src/assets/cart.png" alt="Cart" className="h-6 w-6 mr-2" />
              Add to Cart
            </span>
          </div>
        </div>
  
        {/* Heart Icon */}
        <div className="absolute top-2 right-2">
          <div className="bg-gray-300 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.3 2 7.5 2 4.42 4.42 2 7.5 2c1.74 0 3.41.81 4.5 2.09C13.09 2.81 14.76 2 16.5 2 19.58 2 22 4.42 22 7.5c0 3.8-3.4 6.75-8.55 12.54L12 21.35z"
              />
            </svg>
          </div>
        </div>
  
        {/* Name, Seller, and Price */}
        <div className="px-6 py-4">
          <div className="font-extrabold text-3xl text-yellow-600 mb-2">{product.productName}</div>
          <p className="text-gray-800 text-lg mb-2 ">{product.sellerName}</p>
          <p className="text-gray-900 font-extrabold text-xl">{product.price}</p>
        </div>
      </div>
    );
  }



  function App() {
    return (
      <div>
        <div className="flex flex-wrap justify-center">
          {productData.map((product) => (
            <div key={product.id} className="mx-4 my-4">
              <Card product={product} />
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-4 pr-4">
        <ViewMore />
      </div>
        </div>
    );
  }


  

  export default App;