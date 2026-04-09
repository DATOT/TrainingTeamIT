import React from "react";

const Reference: React.FC = () => {
  return (
    <header className="w-full border-b bg-yellow-200 shadow-sm h-[70%]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-gray-800">Reference Title</h1>

        {/* Subtitle */}
        <p className="text-sm text-gray-500">Cá tra HN</p>

        {/* Author */}
        <p className="text-xs text-gray-400 mt-1">
          Làm bởi:
          <span>Lâm Tiến Đạt</span>
        </p>
      </div>
    </header>
  );
};

export default Reference;
