import React from 'react';

function ViewMore() {
  return (
    <div className="flex items-center">
      <span className="text-gray-900 font-bold text-lg mr-2">VIEW ALL</span>
      <img
        src="src/assets/Arrow Icon.png"
        alt="View More"
        className="h-18 w-20 mb-3 ml-1" 
      />
    </div>
  );
}

export default ViewMore;
