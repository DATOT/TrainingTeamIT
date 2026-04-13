/*
  Đây là ví dụ cho useState, props và event

  Code này CỐ TÌNH viết sai để tạo vấn đề
*/

interface CounterButtonProps {
  countFrom: number;

  // TODO:
  // - thêm 1 biến là countMax
  // - nếu đạt max thì không cho tăng nữa
}

export default function CounterButton({ countFrom }: CounterButtonProps) {
  let count = countFrom; // đếm
  // - Biến này có được React "theo dõi" không?
  // - Khi component re-render thì chuyện gì xảy ra với count?

  const onButtonClicked = () => {
    count++;
    // Sau khi tăng count:
    // - UI có cập nhật không?
    // - Vì sao?
  };

  return (
    <div>
      {/* nút tăng đếm */}
      <button onClick={onButtonClicked}>Tăng đếm</button>

      {/* hiển thị đếm */}
      <div>Đếm là: {count}</div>

      {/* Mở rộng:
          1. Nếu click nhiều lần mà số không đổi, bug nằm ở đâu?
          2. Làm sao để React biết count đã thay đổi?
          3. Khi nào component sẽ re-render?
      */}

      {/* Bài tập:
          - Sửa lại để hoạt động đúng
          - Thêm giới hạn countMax
      */}

      {/* Nâng cao:
          - Nếu countFrom thay đổi từ props thì count có cập nhật không?
      */}
    </div>
  );
}
