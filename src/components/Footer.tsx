import React from "react";

const Footer: React.FC = () => {
  return (
    <header className="w-full border-b bg-black shadow-sm h-[70%]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-gray-50">
          {/* Điền tiêu đề ở đây */}
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-gray-100">{/* Điền bất kì ở đây */}</p>

        {/* Author */}
        <p className="text-xs text-gray-300 mt-1">
          Làm bởi:
          <span>{/* Điền tên ở đây */}</span>
        </p>
      </div>
    </header>
  );
};

export default Footer;
