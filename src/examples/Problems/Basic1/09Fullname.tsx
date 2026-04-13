/*
  topic: Derived state
*/

import { useState } from "react";

export default function FullName() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  // TODO:
  // - Tạo fullName từ first + last

  //  Câu hỏi:
  // - Có nên dùng useState cho fullName không?
  // - fullName có phải là "nguồn dữ liệu gốc" không?

  return (
    <div>
      {/* input first */}
      {/* TODO:
          - value = first
          - onChange để cập nhật first
      */}

      {/* input last */}
      {/* TODO:
          - value = last
          - onChange để cập nhật last
      */}

      {/* hiển thị full name */}
      {/* TODO:
          - Hiển thị: "Full name: {fullName}"
      */}

      {/*  Yêu cầu:
          - Nếu first hoặc last rỗng -> vẫn xử lý hiển thị hợp lý
      */}

      {/* Câu hỏi:
          - Nếu dùng useState cho fullName thì sẽ gặp vấn đề gì?
          - Khi first thay đổi thì fullName có tự update không?
      */}

      {/* Mở rộng:
          1. Derived state là gì?
          2. Khi nào KHÔNG nên dùng useState?
          3. Tránh duplication state như thế nào?
      */}

      {/* Bài tập:
          - Trim khoảng trắng dư (vd: "  A   B  ")
          - Nếu cả 2 rỗng -> hiển thị "Chưa có tên"
      */}

      {/* Nâng cao:
          - Tách thành component <FullNameDisplay />
          - Truyền first, last qua props
          - So sánh với việc lưu fullName trong state
      */}
    </div>
  );
}
