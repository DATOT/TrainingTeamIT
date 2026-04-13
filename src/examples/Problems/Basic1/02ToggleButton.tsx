/*
  Đây là ví dụ cho useState, event, conditional rendering(cond ? ... : ...), tailwind cơ bản

  Note: code CỐ TÌNH viết sai để tạo vấn đề
*/

export default function CounterButton() {
  let ticked = false; // trạng thái đã tick hay chưa
  // - Biến này có được giữ lại sau mỗi lần render không?
  // - React có biết khi ticked thay đổi không?

  const onButtonClicked = () => {
    ticked = !ticked;

    // Sau khi click:
    // - UI có đổi từ "Not ticked" -> "Ticked" không?
    // - Nếu không thì vì sao?
  };

  return (
    <div>
      {/* nút tick */}
      <button onClick={onButtonClicked}>Tick</button>

      {/* Bài tập:
          - Sửa lại bằng useState
          - Hiển thị trạng thái:
            + Nếu ticked = true -> hiện "Ticked" (màu xanh)
            + Nếu ticked = false -> hiện "Not ticked" (màu đỏ)
      */}

      {/* Gợi ý:
          - Dùng (condition ? A : B)
          - className cũng có thể thay đổi theo điều kiện
      */}

      {/* Mở rộng:
          1. Sau khi click, UI có thay đổi không? Vì sao?
          2. React render lại khi nào?
          3. Làm sao để React "biết" trạng thái đã đổi?
      */}

      {/* Nâng cao:
          - Biến phần hiển thị này thành component riêng (StatusLabel)
          - Truyền ticked qua props
          - Thêm hiệu ứng transition (Motion dev)
      */}
    </div>
  );
}
