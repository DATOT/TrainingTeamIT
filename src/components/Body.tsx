import React from "react";

const Body: React.FC = () => {
  return (
    <header className="w-full border-b bg-gray-50 shadow-sm h-[70%]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-gray-800">
          Title 
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-gray-500">hello,world</p>

        {/* Author */}
        <p className="text-xs text-gray-400 mt-1">
          Làm bởi:
          <span>Pham Nguyen Dang Khoi</span>
        </p>
      </div>
    </header>
  );
};

export default Body;
