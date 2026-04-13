import { useState } from "react";

export default function InputExample() {
  const [text, setText] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      {/* input controlled */}
      <input
        type={showPassword ? "text" : "password"}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập nội dung"
      />

      {/* hiển thị text */}
      <div>{text}</div>

      {/* uppercase / lowercase */}
      <div>UPPERCASE: {text.toUpperCase()}</div>
      <div>lowercase: {text.toLowerCase()}</div>

      {/* toggle password */}
      <button onClick={() => setShowPassword(!showPassword)}>Password</button>

      {/* actions */}
      <div>
        <button onClick={() => setText("")}>Clear</button>
        <button onClick={() => setText(text.toUpperCase())}>Uppercase</button>
        <button onClick={() => setText(text.toLowerCase())}>Lowercase</button>
      </div>
    </div>
  );
}
