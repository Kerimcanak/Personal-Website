import { useContext, useState } from 'react';
import { LanguageContext } from './LanguageContext';
import axios from 'axios';

function LanguageSwitcher() {
  const { dispatch } = useContext(LanguageContext);
  const [language, setLanguage] = useState('en');

  const toggleLanguage = async () => {
    try {
      const response = await axios.post('https://reqres.in/api/workintech', {
        language: language === 'en' ? 'tr' : 'en',
      });
      const audio = new Audio(
        response.status === 200
          ? 'https://upload.wikimedia.org/wikipedia/commons/6/68/Bicycle-bell-1.wav'
          : 'https://upload.wikimedia.org/wikipedia/commons/8/83/Bicycle-bell-3.wav'
      );
      audio.play();
      const storage = JSON.parse(localStorage.getItem('languageSwitch')) || { text: 'language switch' };
      localStorage.setItem('languageSwitch', JSON.stringify({ text: storage.text + ' you did it!' }));
      dispatch({
        type: 'SET_LANGUAGE',
        payload: language === 'en' ? 'tr' : 'en',
      });
      setLanguage(language === 'en' ? 'tr' : 'en');
    } catch (error) {
      console.error(error);
    }
  };

  return (
<div className="absolute top-0 right-0 mt-4 mr-4 text-white lg:text-xl md:text-lg sm:text-sm">      <span
        className="text-lime-300 cursor-pointer hover:text-orange-500"
        onClick={toggleLanguage}
      >
        {language === 'en' ? 'Türkçe' : 'English'}
      </span>
      {language === 'en' ? 'ye geç' : ' version'}
    </div>
  );
}

export default LanguageSwitcher;
