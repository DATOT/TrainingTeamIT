import { useState } from "react";

export default function Notification2() {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const handleClick = () => {
    const next = !show;
    setShow(next);

    if (next) {
      setError("lỗi happened!");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle thông báo</button>

      {/* ưu tiên error, nếu không thì fallback sang notification */}
      {error && <div className="text-red-500">{error}</div>}

      {!error && show && <div className="text-green-500">Có thông báo!</div>}
    </div>
  );
}
