/*
  Đây là ví dụ cho useState với object, props và event

  Code này CỐ TÌNH viết sai để tạo vấn đề
*/

interface UserCardProps {
  name: string;
  age: number;

  // TODO:
  // - thêm 1 field: isOnline
  // - có thể toggle trạng thái online/offline
}

export default function UserCard({ name, age }: UserCardProps) {
  let user = {
    name: name,
    age: age,
    isOnline: false,
  };

  // Câu hỏi:
  // - Object này có được React theo dõi không?
  // - Nếu thay đổi property bên trong object thì có re-render không?

  const onIncreaseAge = () => {
    user.age++;

    // Sau khi tăng age:
    // - UI có cập nhật không?
    // - Vì sao?
  };

  const onToggleStatus = () => {
    user.isOnline = !user.isOnline;

    // Sau khi toggle:
    // - UI có đổi trạng thái không?
    // - Nếu không thì bug nằm ở đâu?
  };

  return (
    <div>
      {/* hiển thị thông tin */}
      <div>Tên: {user.name}</div>
      <div>Tuổi: {user.age}</div>
      <div>Trạng thái: {user.isOnline ? "Online" : "Offline"}</div>

      {/* nút tăng tuổi */}
      <button onClick={onIncreaseAge}>Tăng tuổi</button>

      {/* nút đổi trạng thái */}
      <button onClick={onToggleStatus}>Toggle Online</button>

      {/* Mở rộng:
          1. Vì sao thay đổi object nhưng UI không update?
          2. React so sánh state kiểu gì? (reference vs value)
          3. Có nên mutate object trực tiếp không?
      */}

      {/* Bài tập:
          - Sửa lại bằng useState
          - Khi update phải tạo object mới (spread ...)
          - Thêm giới hạn tuổi (ví dụ maxAge)
      */}

      {/* Nâng cao:
          - Nếu chỉ update 1 field (age) thì có cần copy toàn bộ object không?
          - Tại sao setState với object cần {...oldState}?
      */}
    </div>
  );
}
