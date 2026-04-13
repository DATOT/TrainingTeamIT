import { useState } from "react";

export default function FullName() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const f = first.trim();
  const l = last.trim();
  const fullName = f || l ? `${f} ${l}`.trim() : "Chưa có tên";

  return (
    <div>
      <input
        value={first}
        onChange={(e) => setFirst(e.target.value)}
        placeholder="First name"
      />

      <input
        value={last}
        onChange={(e) => setLast(e.target.value)}
        placeholder="Last name"
      />

      <div>Full name: {fullName}</div>
    </div>
  );
}
