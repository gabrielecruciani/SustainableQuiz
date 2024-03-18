import { useState } from 'react';
import './Score.css';
import Footer from '../../Components/Footer/Footer';
import image from "../../Components/Images/background.png";
import LanguageSwitch from '../../Components/SwitchLanguage/LanguageSwitch';
import { useScore } from '../../Components/ScoreContext/ScoreContext';
import ScoreData from '../../Components/Data/ScoreData';
import { Link } from 'react-router-dom';

const Score = () => {
  const { finalScore } = useScore();
  const [currentLanguage, setCurrentLanguage] = useState('it');
  const data = ScoreData[currentLanguage === 'it' ? 0 : 1];

  const handleChangeLanguage = (language: string) => {
    setCurrentLanguage(language);
  };

  return (
    <>
      <div className='container'>
        <LanguageSwitch onChangeLanguage={handleChangeLanguage} />
        <img src={image} className='background' alt="" />

        <h1 className='title'>
          {finalScore >= 7 ? data.acknowledgments[0] : finalScore >= 3 ? data.acknowledgments[1] : data.acknowledgments[2]}
        </h1>
        <div className='score-container'>
          <h2 className='final-score'>
            {data.valutation} {finalScore}/10
          </h2>
          <div className='line' />
          <div className='details'>
            {data.scoreDetails}
          </div>
        </div>        
        <button className='enter-quiz'>
          <Link to='/'>{data.backButton}</Link>
        </button>

      </div>
      <Footer />
    </>
  );
}

export default Score