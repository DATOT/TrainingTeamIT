/*
  Đây là ví dụ cho event (input + state)

  Code này CỐ TÌNH để thiếu phần xử lý
*/

import { useState } from "react";

export default function InputExample() {
  const [text, setText] = useState("");

  // Câu hỏi:
  // - Input controlled là gì?
  // - Vì sao cần value + onChange?

  return (
    <div>
      {/* TODO:
          - Tạo input
          - Gán value = text
          - onChange để cập nhật state
      */}

      {/* hiển thị lại text bên dưới */}
      {/* TODO:
          - Hiển thị text gốc
      */}

      {/* Mở rộng 1: Uppercase / Lowercase
          - Hiển thị:
              + UPPERCASE: text.toUpperCase()
              + lowercase: text.toLowerCase()
      */}

      {/* Mở rộng 2: Password mode
          - Thêm state: showPassword (boolean)
          - Nếu true → type="text"
          - Nếu false → type="password"
      */}

      {/* Gợi ý:
          - Dùng useState cho showPassword
          - Toggle bằng button
      */}

      {/* Mở rộng 3: Validation
          - Nếu text.length < 5 → hiển thị "Quá ngắn" (màu đỏ)
          - Nếu >= 5 → "Hợp lệ" (màu xanh)
      */}

      {/* Câu hỏi:
          - Khi nhập ký tự, component render lại bao nhiêu lần?
          - Có nên xử lý logic nặng trong onChange không?
      */}

      {/* Bài tập thêm:
          - Thêm nút:
              + Clear (xóa text)
              + Uppercase (setText(text.toUpperCase()))
              + Lowercase
              + Password
          - Hiển thị số ký tự đã nhập
      */}

      {/* Nâng cao:
          - Debounce input (trì hoãn cập nhật)
          - Tách thành component <TextInput />
          - So sánh controlled vs uncontrolled input
      */}
    </div>
  );
}
