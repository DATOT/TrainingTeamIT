/*
  Đây là ví dụ cho conditional rendering (||, &&)
*/

import { useState } from "react";

export default function Notification2() {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  // Câu hỏi:
  // - error là string rỗng ("") thì có được coi là falsy không?
  // - show và error dùng để điều khiển UI như thế nào?

  const handleClick = () => {
    setShow(!show);

    // lỗi fake
    if (!show) {
      setError("lỗi happened!");
    } else {
      setError("");
    }

    // Sau khi click:
    // - Khi nào error xuất hiện?
    // - Khi nào chỉ hiện notification?
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle thông báo</button>

      {/* TODO:
          - Nếu có error -> hiển thị error (ưu tiên cao nhất)
          - Nếu không có error:
              + Nếu show = true -> hiển thị "Có thông báo!"
              + Nếu show = false -> không hiển thị gì
      */}

      {/* Gợi ý:
          - Dùng:
              error && ...
              show && ...
              || để fallback
      */}

      {/* Yêu cầu:
          - error phải override notification
          - Không được hiển thị cả 2 cùng lúc
      */}

      {/* Câu hỏi:
          - error || "fallback" hoạt động như thế nào?
          - Khi error = "" thì chuyện gì xảy ra?
      */}

      {/* Mở rộng:
          1. Thêm style:
              - error: text-red-500
              - notification: text-green-500
          2. Thêm animation khi hiện/ẩn
          3. Tự động ẩn error sau 3s (setTimeout)
      */}

      {/* Bài tập thêm:
          - Thêm loading state:
              + Nếu loading -> "Đang tải..."
          - Thứ tự ưu tiên:
              loading > error > notification
      */}

      {/* Nâng cao:
          - Refactor logic render thành function riêng
          - So sánh với toán tử 3 ngôi (nested ternary)
          - Khi UI phức tạp thì nên tách component không?
      */}
    </div>
  );
}
