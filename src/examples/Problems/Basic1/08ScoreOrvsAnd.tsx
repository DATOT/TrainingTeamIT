/*
  Ví dụ conditional rendering

  Code này tạo ra để so sánh toán tử
*/

import { useState } from "react";

export default function Score() {
  const [score, setScore] = useState<number | null>(0);

  // Câu hỏi:
  // - score có thể nhận những giá trị nào?
  // - 0 có được coi là "falsy" không?

  return (
    <div>
      {/* TODO:
          Hiển thị score theo 2 cách:

          1. Dùng:
             score || "Chưa có"

          2. Dùng:
             score ?? "Chưa có"
      */}

      {/* Yêu cầu:
          - Thử với các giá trị:
              score = 10
              score = 0
              score = null
      */}

      {/* Câu hỏi:
          - Khi score = 0 thì kết quả của (score || "...") là gì?
          - Khi score = 0 thì kết quả của (score ?? "...") là gì?
          - Tại sao lại khác nhau?
      */}

      {/* Mở rộng:
          1. Toán tử || kiểm tra điều gì? (falsy values)
          2. Toán tử ?? kiểm tra điều gì? (null / undefined)
          3. Khi nào nên dùng ?? thay vì ||?
      */}

      {/* Bài tập:
          - Hiển thị score:
              + Nếu score = null -> "Chưa có"
              + Nếu score = 0 -> hiển thị "0 điểm" (KHÔNG bị mất)
              + Nếu > 0 -> hiển thị "{score} điểm"
      */}

      {/* Nâng cao:
          - Nếu score có thể là undefined thì sao?
          - Kết hợp ?? với toán tử 3 ngôi để xử lý nhiều trường hợp
      */}
    </div>
  );
}
