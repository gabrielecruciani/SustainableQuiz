import './Quiz.css'
import Form from '../../Components/Form/Form';
import Footer from '../../Components/Footer/Footer';
import image from "../../Components/Images/background.png";
import { Link } from 'react-router-dom';

const Quiz = () => {
  return (
    <div className='quiz-container'>
      <div className='container'>
        <img src={image} className='background' alt="" />
        <Form />
      </div>
      <button className='go-home'>
        <Link to='/'>Home</Link>
      </button>
      
      <Footer />
    </div>
  );
}

export default Quiz