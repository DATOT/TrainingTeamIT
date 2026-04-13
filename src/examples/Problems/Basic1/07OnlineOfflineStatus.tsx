/*
  Ví dụ cho tailwind, conditional rendering

  Code này CỐ TÌNH để trống phần render
*/

import { useState } from "react";

export default function Status() {
  const [online, setOnline] = useState(false);

  // Câu hỏi:
  // - online là kiểu dữ liệu gì?
  // - Khi state thay đổi thì React làm gì?

  return (
    <div>
      <button onClick={() => setOnline(!online)}>Toggle</button>

      {/* TODO:
          - Nếu online -> hiển thị "Online"
          - Nếu offline -> hiển thị "Offline"
          - Áp dụng Tailwind:
              + Online: text-green-500
              + Offline: text-gray-400
      */}

      {/* Gợi ý:
          - Dùng toán tử 3 ngôi (condition ? A : B)
          - className có thể thay đổi theo điều kiện
      */}

      {/* Yêu cầu:
          - Khi click button → trạng thái phải đổi ngay trên UI
      */}

      {/* Câu hỏi:
          - Nếu không dùng useState mà dùng biến thường thì sao?
          - Vì sao cần state để render lại UI?
      */}

      {/* Bài tập:
          - Thêm nền:
              + Online: bg-green-100
              + Offline: bg-gray-100
          - Thêm padding + bo góc
      */}

      {/* Nâng cao:
          - Tách phần hiển thị thành component <StatusBadge />
          - Truyền online qua props
      */}
    </div>
  );
}
