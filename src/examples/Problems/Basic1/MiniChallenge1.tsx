/*
  Mini Challenge 1: Character Counter

  Mục tiêu:
  - useState
  - event (input)
  - derived state
*/

import { useState } from "react";

export default function CharCounter() {
  const [text, setText] = useState("");

  // Câu hỏi:
  // - Có cần useState cho length không?

  return (
    <div>
      {/* TODO:
          - Tạo input (controlled)
      */}

      {/* TODO:
          - Hiển thị số ký tự đã nhập
      */}

      {/* Yêu cầu:
          - Nếu > 10 ký tự → text-red-500
          - Nếu <= 10 → text-green-500
      */}

      {/* Gợi ý:
          - text.length
      */}

      {/* Mở rộng:
          - Hiển thị "Quá dài!" nếu > 20
      */}

      {/* Bài tập:
          - Thêm nút clear
      */}

      {/* Nâng cao:
          - Đếm số từ (word count)
      */}
    </div>
  );
}
