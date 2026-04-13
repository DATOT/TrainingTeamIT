/*
  Mini Challenge 3: Expandable Text

  Mục tiêu:
  - useState
  - conditional rendering
  - UI logic
*/

import { useState } from "react";

export default function ExpandText() {
  const [expanded, setExpanded] = useState(false);

  const text = "React is a powerful library for building user interfaces...";

  // Câu hỏi:
  // - Làm sao cắt text khi chưa expanded?

  return (
    <div>
      {/* TODO:
          - Nếu expanded = false:
              hiển thị 20 ký tự đầu + "..."
          - Nếu true:
              hiển thị full text
      */}

      {/* TODO:
          - Button:
              "Xem thêm" / "Thu gọn"
      */}

      {/* Gợi ý:
          - slice()
          - toán tử cond ? ... : ...
      */}

      {/* Yêu cầu:
          - Click button -> đổi trạng thái
      */}

      {/* Mở rộng:
          - Thêm animation (fade)
      */}

      {/* Bài tập:
          - Nếu text ngắn < 20 -> không cần button
      */}

      {/* Nâng cao:
          - Tách thành component reusable <ExpandableText />
      */}
    </div>
  );
}
