// 1.react로 쇼핑몰 코딩하기 :: https://www.inflearn.com/course/lecture?courseSlug=%EC%98%AC%EC%9D%B8%EC%9B%90-%EA%B0%9C%EB%B0%9C%ED%81%B4%EB%9E%98%EC%8A%A4&unitId=63364
// 2.react-router-dom 설치하기 :: https://www.inflearn.com/course/lecture?courseSlug=%EC%98%AC%EC%9D%B8%EC%9B%90-%EA%B0%9C%EB%B0%9C%ED%81%B4%EB%9E%98%EC%8A%A4&unitId=63369
// 3.react-router-dom Link 적용하기 :: https://www.inflearn.com/course/lecture?courseSlug=%EC%98%AC%EC%9D%B8%EC%9B%90-%EA%B0%9C%EB%B0%9C%ED%81%B4%EB%9E%98%EC%8A%A4&unitId=63370
import "./App.css";
import MainPage from "./main/index.js";
import {Routes, Route} from "react-router-dom";
import UploadPage from "./upload/index.js";
import ProductPage from "./product/index.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product:id" element={<ProductPage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </div>
  );
}

export default App;
