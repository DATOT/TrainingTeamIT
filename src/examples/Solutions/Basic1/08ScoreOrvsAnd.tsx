import { useState } from "react";

export default function Score() {
  const [score, setScore] = useState<number | null>(0);

  return (
    <div>
      {/* so sánh || và ?? */}
      <div>score || "Chưa có": {score || "Chưa có"}</div>
      <div>score ?? "Chưa có": {score ?? "Chưa có"}</div>

      <div>{score === null ? "Chưa có" : `${score} điểm`}</div>
    </div>
  );
}
