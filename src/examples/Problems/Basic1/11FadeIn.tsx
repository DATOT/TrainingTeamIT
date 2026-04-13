/*
  Ví dụ: Fade in với motion (framer-motion)

  Mục tiêu:
  - animation cơ bản
  - conditional rendering
*/

import { useState } from "react";
import { motion } from "framer-motion";

export default function FadeExample() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>

      {/* TODO:
          - Khi show = true → hiện box với fade in
          - Khi false → ẩn
      */}

      {/* Gợi ý:
          - initial: opacity 0
          - animate: opacity 1
      */}

      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          // TODO:
          // - Thêm duration (0.3s)
          className="w-32 h-32 bg-blue-400 mt-2"
        />
      )}

      {/* Câu hỏi:
          - Nếu bỏ initial thì chuyện gì xảy ra?
          - animate chạy khi nào?
      */}

      {/* Mở rộng:
          1. Thêm fade out (khi ẩn)
          2. Kết hợp scale (zoom nhẹ)
      */}

      {/* Bài tập:
          - Thêm text bên trong box
          - Thêm delay 0.2s
      */}

      {/* Nâng cao:
          - Dùng AnimatePresence để animate khi unmount
      */}
    </div>
  );
}
