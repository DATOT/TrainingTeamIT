/*
  Mini Challenge 4: Tic Tac Toe

  Mục tiêu:
  - useState
  - array state
  - event handling
  - conditional rendering
  - logic kiểm tra thắng
*/

import { useState } from "react";

export default function TicTacToe() {
  // bàn cờ 3x3 (9 ô)
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));

  const [xTurn, setXTurn] = useState(true);

  // Câu hỏi:
  // - Vì sao dùng array thay vì 9 useState riêng?
  // - board có bị mutate trực tiếp không?

  const handleClick = (index: number) => {
    // TODO:
    // - Nếu ô đã có giá trị → không cho click
    // - Gán:
    //     X nếu xTurn = true
    //     O nếu false
    // - Update lại board (KHÔNG mutate trực tiếp)
    // - Đổi lượt (setXTurn)
    // Gợi ý:
    // - copy array: [...board]
  };

  // TODO:
  // - Viết hàm checkWinner(board)
  // - Trả về "X", "O" hoặc null

  const winner = null; // TODO

  return (
    <div>
      {/* hiển thị trạng thái */}
      {/* TODO:
          - Nếu có winner → "Winner: X/O"
          - Nếu chưa → "Turn: X/O"
      */}

      {/* bàn cờ */}
      <div className="grid grid-cols-3 gap-2 w-40">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="w-12 h-12 border text-xl"
          >
            {/* TODO:
                - Hiển thị X hoặc O
            */}
          </button>
        ))}
      </div>

      {/* TODO:
          - Nút Reset:
              + reset board về null
              + reset lượt về X
      */}

      {/* Câu hỏi:
          - Nếu click nhanh nhiều lần thì có bug không?
          - Vì sao cần kiểm tra winner trước khi cho click tiếp?
      */}

      {/* Mở rộng:
          1. Highlight ô thắng (Tailwind: bg-green-200)
          2. Thêm animation khi click
          3. Hiển thị lịch sử nước đi
      */}

      {/* Bài tập:
          - Phát hiện hòa (draw)
          - Disable board khi game kết thúc
      */}

      {/* Nâng cao:
          - Tách <Cell />, <Board />
          - Implement "undo move"
          - AI đơn giản (random move)
      */}
    </div>
  );
}
