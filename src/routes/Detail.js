import { useLocation, Navigate } from 'react-router-dom';

function Detail() {
  const location = useLocation();
  console.log(location.state.title);
  if (!location.state) {
    return <Navigate to='/' />;
  }
  console.log(location);
  return <span>{location.state.title}</span>;
}

export default Detail;
