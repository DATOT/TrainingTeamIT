import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import MemberList from "./components/MemberList";
import Reference from "./components/Reference";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="w-full h-72">
      <div>Header của Bằng</div>
      <Header />

      <div>Body của Khôi</div>
      <Body />

      <div>MemberList của Phát</div>
      <MemberList />

      <div>Reference của Đạt</div>
      <Reference />

      <div>Footer của Khang</div>
      <Footer />
    </div>
  );
}

export default App;
