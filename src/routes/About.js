import './About.css';

function About(props) {
  console.log(props);
  return (
    <div className='about__container'>
      <span>"When you have faults, do not fear to abandon them."</span>
      <span>- Confucius, B.C 551-479</span>
    </div>
  );
}

export default About;
