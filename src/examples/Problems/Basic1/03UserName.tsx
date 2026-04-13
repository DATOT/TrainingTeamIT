/*
  Đây là ví dụ cho conditional rendering (??)

  ?? vs giá trị rỗng
*/

import { useState } from "react";

export default function UserName() {
  const [name, setName] = useState<string | null>(null);

  // Câu hỏi:
  // - name có thể là những giá trị nào?
  // - "" (chuỗi rỗng) có phải là null không?
  // - ?? kiểm tra điều gì?

  return (
    <div>
      <input placeholder="Nhập tên" onChange={(e) => setName(e.target.value)} />

      {/* TODO:
          - Nếu name là null hoặc rỗng ("") -> hiển thị "Ẩn danh"
          - Nếu có name -> hiển thị name
      */}

      {/* Gợi ý:
          - Dùng ?? cho null
          - Nhưng cần xử lý thêm trường hợp "" (chuỗi rỗng)
      */}

      {/* Yêu cầu:
          - Test với:
              name = null
              name = ""
              name = "Tabby"
      */}

      {/* Câu hỏi:
          - name ?? "Ẩn danh" có hoạt động đúng khi name = "" không?
          - Vì sao ?? không xử lý được chuỗi rỗng?
      */}

      {/* Mở rộng:
          1. So sánh:
              name || "Ẩn danh"
              name ?? "Ẩn danh"
          2. Khi nào nên dùng ||, khi nào dùng ??
      */}

      {/* Bài tập:
          - Trim khoảng trắng:
              "   " -> coi như rỗng
          - Nếu rỗng -> "Ẩn danh"
      */}

      {/* Nâng cao:
          - Kết hợp ?? với toán tử 3 ngôi
          - Tách logic thành biến:
              const displayName = ...
      */}
    </div>
  );
}
