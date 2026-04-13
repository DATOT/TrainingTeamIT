/*
  Mini Challenge 2: Login Status

  Mục tiêu:
  - useState
  - &&, ??
  - conditional rendering
*/

import { useState } from "react";

export default function LoginStatus() {
  const [user, setUser] = useState<string | null>(null);

  const login = () => setUser("Tabby");
  const logout = () => setUser(null);

  // Câu hỏi:
  // - user = null nghĩa là gì?
  // - Làm sao hiển thị fallback?

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>

      {/* TODO:
          - Nếu user có giá trị:
              "Xin chào, {user}"
          - Nếu null:
              "Chưa đăng nhập"
      */}

      {/* Gợi ý:
          - Dùng ??
      */}

      {/* Yêu cầu:
          - Nếu đã login -> chỉ hiện nút Logout
          - Nếu chưa -> chỉ hiện Login
      */}

      {/* Gợi ý:
          - Dùng &&
      */}

      {/* Mở rộng:
          - Thêm loading giả
      */}

      {/* Bài tập:
          - Hiển thị avatar khi login
      */}

      {/* Nâng cao:
          - Tách thành component riêng
      */}
    </div>
  );
}
