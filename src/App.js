import PropTypes from 'prop-types';

// 함수의 첫 번째 인자에는 props가 넘어간다.
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>{name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image:
      'https://cdn.pixabay.com/photo/2022/06/13/05/14/kimchi-7259268_1280.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image:
      'https://cdn.pixabay.com/photo/2015/11/20/08/17/meat-1052571_1280.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image:
      'https://cdn.pixabay.com/photo/2016/10/13/19/15/bibimbap-1738580_1280.jpg',
    rating: 3.2,
  },
  {
    id: 4,
    name: 'Doncasu',
    image:
      'https://cdn.pixabay.com/photo/2018/12/21/11/38/money-is-3887746_1280.jpg',
    rating: 5,
  },
  {
    id: 5,
    name: 'Kimbap',
    image:
      'https://cdn.pixabay.com/photo/2017/03/02/06/00/sushi-rolls-2110486_1280.jpg',
    rating: 4.3,
  },
];
// Food의 데이터가 객체로 변환되어 props에 전달되고, 인자로 출력된다.

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
