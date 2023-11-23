import React from "react";

const Header = () => {
  return (
    <div>
      {/* Top Header */}
      <div className="bg-gray-900 text-white p-1 text-center">
        Worldwide Shipping* | Free Returns* | Handpicked Artwork
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between p-4 bg-gray-900 text-white">
        {/* Left side with SVG */}
        <div className="flex items-center">
          <svg
            className="z-30 flex items-center cursor-pointer"
            fill="#ffcc7e"
            viewBox="0 0 100 80"
            width="28"
            height="24"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </div>

        {/* Middle with the logo */}
        <div className="flex items-center w-18 ml-16">
          <img
            src="https://dirums.com/images/logo%20and%20bird.webp"
            alt="Logo"
            className="h-16 w-18"
          />
        </div>


        <div className="flex items-center">
          <img src="src/assets/Wishlist_icon.png" className="h-16" alt="" />
          <img src="src/assets/Cart_image_icon.png" className="h-16" alt="" />
        </div>
      </div>

      {/* Centered Search box */}
      <div className="flex items-center justify-center bg-gray-900 p-4">
        <form className="w-11/12">
          <label
            htmlFor="default-search"
            className="mb-6 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-32 text-lg text-gray-900 placeholder-gray-900 placeholder-text-lg border border-gray-300 rounded-lg bg-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for artworks, artists, and many more"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
