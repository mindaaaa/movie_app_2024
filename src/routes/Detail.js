import { useLocation } from 'react-router-dom';

function Detail() {
  const location = useLocation();
  console.log(location); // 전달된 상태 출력
  return <span>hello</span>;
}

export default Detail;
