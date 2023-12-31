// react로 쇼핑몰 코딩하기 : https://www.inflearn.com/course/lecture?courseSlug=%EC%98%AC%EC%9D%B8%EC%9B%90-%EA%B0%9C%EB%B0%9C%ED%81%B4%EB%9E%98%EC%8A%A4&unitId=63364
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();


// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );