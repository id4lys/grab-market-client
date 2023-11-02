// 3.react-router-dom Link 적용하기 :: https://www.inflearn.com/course/lecture?courseSlug=%EC%98%AC%EC%9D%B8%EC%9B%90-%EA%B0%9C%EB%B0%9C%ED%81%B4%EB%9E%98%EC%8A%A4&unitId=63370

import { useParams } from 'react-router-dom';

function ProductPage() {
  // const params = useParams();
  const {id} = useParams();
  // console.log(params)
  return (
    <h1>상품 상세 페이지 {id} 상품 </h1>
  )
}

export default ProductPage;