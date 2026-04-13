/*
  Đây là ví dụ cho conditional rendering (&&)

  Code này CỐ TÌNH để trống phần render
*/

import { useState } from "react";

export default function Notification1() {
  const [show, setShow] = useState(false);

  // Câu hỏi:
  // - show là kiểu dữ liệu gì?
  // - Khi show thay đổi thì React sẽ làm gì?

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle thông báo</button>

      {/* TODO:
          - Nếu show === true -> hiển thị "Có thông báo"
          - Nếu false -> không hiển thị gì
      */}

      {/* Gợi ý:
          - Dùng show && ...
      */}

      {/* Yêu cầu:
          - Khi click button → thông báo phải hiện / ẩn ngay
      */}

      {/* Câu hỏi:
          - show && <div>...</div> hoạt động như thế nào?
          - Khi show = false thì React render gì?
      */}

      {/* Mở rộng:
          1. Thêm style:
              - text-blue-500
          2. Thêm animation (fade in/out dùng motion dev)
      */}

      {/* Bài tập thêm:
          - Thêm nút "Reset" để setShow(false)
          - Hiển thị số lần đã bật thông báo
      */}

      {/* Nâng cao:
          - So sánh với toán tử 3 ngôi (condition ? A : null)
          - Khi nào nên dùng &&, khi nào nên dùng ternary?
          - Tách phần thông báo thành component riêng
      */}
    </div>
  );
}
