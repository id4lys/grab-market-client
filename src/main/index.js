// (★★ 매우중요 -  복습하여 코딩순서 및 절차 외울것!!!)
// https://www.inflearn.com/course/lecture?courseSlug=%EC%98%AC%EC%9D%B8%EC%9B%90-%EA%B0%9C%EB%B0%9C%ED%81%B4%EB%9E%98%EC%8A%A4&unitId=63365
// 다른 터미널에서 $ npm install axios 실행한다
// axios 네크워크 통신으로 mock 서버에서 불러온다

import React from "react";
import "./index.css";
import axios from "axios";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://341cf269-c712-4751-a587-2c7fd1b972ec.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  }, []);
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map(function(product, index) {
            return (
              <div className="product-card">
                <div>
                  <img
                    className="product-img"
                    src={product.imageUrl}
                  />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div className="product-seller">
                    <img className="product-avatar" src="images/icons/avatar.png" />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;