import { useState } from 'react'
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import './Home.css';
import image from "../../Components/Images/background.png";
import LanguageSwitch from '../../Components/SwitchLanguage/LanguageSwitch';
import HomeData from '../../Components/Data/HomeData';


const Home = () => {
    const [currentLanguage, setCurrentLanguage] = useState('it');

    const handleChangeLanguage = (language: string) => {
        setCurrentLanguage(language);
    };

    const data = HomeData[currentLanguage === 'it' ? 0 : 1];

    return (
        <>
            <div className='container'>
                <LanguageSwitch onChangeLanguage={handleChangeLanguage} />
                <img src={image} className='background' alt="" />
                <h1 className='title'>
                    {data.title}
                </h1>
                <h2 className='description'>
                    <div className="quiz-info">
                        <p>
                            {data.paragraph1}
                            <br/>
                            {data.paragraph2}
                            <br/><br/>
                            {data.paragraph3}
                            <br/>
                            {data.paragraph4}
                        </p>
                    </div>
                </h2>
                <button className='enter-quiz'>
                    <Link to='/quiz'>LET'S GO</Link>
                </button>
            </div>
            <Footer />
        </>
    );
}

export default Home