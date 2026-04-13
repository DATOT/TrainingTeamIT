import { useState } from "react";

export default function Status() {
  const [online, setOnline] = useState(false);

  return (
    <div>
      <button onClick={() => setOnline(!online)}>Toggle</button>

      <div
        className={
          online
            ? "text-green-500 bg-green-100 px-2 py-1 rounded"
            : "text-gray-400 bg-gray-100 px-2 py-1 rounded"
        }
      >
        {online ? "Online" : "Offline"}
      </div>
    </div>
  );
}
