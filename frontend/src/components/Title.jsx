import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className="flex items-center justify-center gap-4 my-6">
      
      {/* Left Line */}
      <span className="block w-12 sm:w-20 h-[1px] bg-gray-500"></span>

      {/* Text */}
      <p className="text-sm sm:text-base text-gray-700 tracking-widest uppercase">
        {text1}{" "}
        <span className="text-gray-800 font-semibold">
          {text2}
        </span>
      </p>

      {/* Right Line */}
      <span className="block w-12 sm:w-20 h-[1px] bg-gray-500"></span>

    </div>
  );
};


export default Title