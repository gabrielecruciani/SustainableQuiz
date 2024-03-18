import React, { useState, useEffect } from 'react';
import './LanguageSwitch.css'

interface LanguageSwitchProps {
  onChangeLanguage: (language: string) => void;
}

const itFlag = 'https://img.icons8.com/fluency/italy-circular.png';
const enFlag = 'https://img.icons8.com/color/usa-circular.png';

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ onChangeLanguage }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'it');

  useEffect(() => {
    localStorage.setItem('selectedLanguage', selectedLanguage);
    onChangeLanguage(selectedLanguage);
  }, [selectedLanguage, onChangeLanguage]);
  
  const handleLanguageChange = () => {
    const newLanguage = selectedLanguage === 'en' ? 'it' : 'en';
    setSelectedLanguage(newLanguage);
  };

  return (
    <div className='switch-language'>
      <input
        type='checkbox'
        id='language-toggle'
        className='language'
        onChange={handleLanguageChange}
        checked={selectedLanguage === 'it'}
      />
      <label htmlFor='language-toggle'>
        <img
          src={selectedLanguage === 'it' ? enFlag : itFlag}
          alt='italy-circular'
          className='flag flag-down'
        />
        <img
          src={selectedLanguage === 'en' ? enFlag : itFlag}
          alt='usa-circular'
          className=' flag flag-up'
        />
      </label>
    </div>
  );
};

export default LanguageSwitch;