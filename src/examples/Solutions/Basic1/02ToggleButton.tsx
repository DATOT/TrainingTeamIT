import { useState } from "react";

function CounterButton() {
  const [ticked, setTicked] = useState(false); // dùng state

  const onButtonClicked = () => {
    setTicked(!ticked);
  };

  return (
    <div>
      {/* nút tick */}
      <button onClick={onButtonClicked}>Tick</button>

      {/* hiển thị trạng thái */}
      <div
        className={
          ticked
            ? "text-green-500" // màu xanh khi đã tick
            : "text-red-500" // màu đỏ khi chưa tick
        }
      >
        {ticked ? "Ticked" : "Not ticked"}
      </div>
    </div>
  );
}
