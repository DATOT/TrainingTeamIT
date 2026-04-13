import { useState } from "react";

export default function UserName() {
  const [name, setName] = useState<string | null>(null);

  // nếu name null hoặc rỗng thì dùng "Ẩn danh"
  const displayName = name?.trim() ? name : "Ẩn danh";

  return (
    <div>
      <input placeholder="Nhập tên" onChange={(e) => setName(e.target.value)} />

      {/* hiển thị tên đã xử lý */}
      <div>{displayName}</div>
    </div>
  );
}
