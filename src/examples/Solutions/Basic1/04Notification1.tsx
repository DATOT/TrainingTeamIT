import { useState } from "react";

export default function Notification1() {
  const [show, setShow] = useState(false);

  // đếm số lần bật thông báo
  const [count, setCount] = useState(0);

  const handleToggle = () => {
    const next = !show;
    setShow(next);

    // chỉ tăng khi bật
    if (next) setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle thông báo</button>

      <button onClick={() => setShow(false)}>Reset</button>

      {/* chỉ render khi show = true */}
      {show && <div className="text-blue-500">Có thông báo</div>}

      {/* hiển thị số lần đã bật */}
      <div>Đã bật: {count}</div>
    </div>
  );
}
