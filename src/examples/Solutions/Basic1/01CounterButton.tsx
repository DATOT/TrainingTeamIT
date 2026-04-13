import { useState } from "react";

interface CounterButtonProps {
  countFrom: number;
  countMax: number; // thêm countMax
}

function CounterButton({ countFrom, countMax }: CounterButtonProps) {
  // Sử dụng useState để cập nhật render khi thay đổi count
  const [count, setCount] = useState(countFrom);

  const onButtonClicked = () => {
    setCount(Math.min(count + 1, countMax)); // tăng đếm bởi 1 và giới hạn bởi countMax
  };

  return (
    <div>
      {/* nút tăng đếm */}
      <button onClick={onButtonClicked}>Tăng đếm</button>
      {/* hiển thị đếm */}
      <div>Đếm là: {count}</div>
    </div>
  );
}
