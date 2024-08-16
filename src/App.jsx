import { useContext, useReducer } from 'react';
import { LanguageContext } from './assets/LanguageContext';
import img1 from './assets/img1.png';
import SwitchContainer from './assets/SwitchComponent';
import LanguageSwitcher from './assets/LanguageSwitcher';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Footer from './layout/Footer';
import Projects from './layout/Projects';
import Profile from './layout/Profile';
import Skills from './layout/Skills';
import Hero from './layout/Hero';

const initialState = { checked: false };
const TOGGLE = 'toggle';

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE:
      return { checked: !state.checked };
    default:
      throw new Error('Unknown action type');
  }
};


function App() {
  const { state: languageState } = useContext(LanguageContext);



  /* Texts */
  const firstHeader = languageState.language === 'en' ? 'I am a Frontend Developer...' : 'Ben bir Frontend Yazılımcısıyım...';
  const firstText = languageState.language === 'en' ? '...who likes to craft solid and scalable frontend products with great user experiences.' : '...ve mükemmel kullanıcı deneyimlerine sahip, sağlam ve ölçeklenebilir ön uç ürünleri üretmeyi seviyorum.';


  /*Switch */
  const [switchState, dispatch] = useReducer(reducer, initialState);

  const handleToggle = () => {
    dispatch({ type: TOGGLE });
  };

  const darkModeText = switchState.checked ? "Light Mode" : "Dark Mode";
  


/*End of Switch */
  return (
    <div style={{ overflow: "hidden" }}>
<div id="Hero" className="flex relative">
  <div className="absolute top-0 left-0 mt-4 ml-4 flex items-center">
    <input type="checkbox" id="darkMode" name="darkMode" value="darkMode" />
    <label htmlFor="darkMode" className="text-black ml-2">dark mode</label>
  </div>
  <div className={`w-2/3 h-96 ${switchState.checked ? 'bg-indigo-950' : 'bg-indigo-700'} flex flex-col items-center justify-center relative`}>
    <div className="absolute top-0 left-0 mt-4 ml-4 text-white text-base lg:text-xl md:text-lg sm:text-sm">
      <span className="text-lime-300">Kerimcan</span>AK
    </div>
    <LanguageSwitcher />
    <h1 className="text-4xl font-bold text-white mt-8">{firstHeader}</h1>
    <p className="text-white mt-4">{firstText}</p>
    <div className="mt-8 flex">
      <a
        href="https://github.com/kerimcanak"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:bg-gray-200 transition duration-300 mr-4"
      >
        <button className={`bg-white text-indigo-700 font-bold py-2 px-4 rounded flex items-center ${switchState.checked ? 'bg-zinc-800 border-2 border-white text-white' : ''}`}>
          <FaGithub className="mr-2" />
          Github
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/kerimcan-ak-471278280/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:bg-gray-200 transition duration-300"
      >
        <button className={`bg-white text-indigo-700 font-bold py-2 px-4 rounded flex items-center ${switchState.checked ? 'bg-zinc-800 border-2 border-white text-white' : ''}`}>
          <FaLinkedin className="mr-2" />
          LinkedIn
        </button>
      </a>
    </div>
  </div>
  <div className={`w-1/3 h-96 ${switchState.checked ? 'bg-lime-950' : 'bg-lime-300' }`}>
    <div className="left-0 mt-4 ml-4 flex flex-row">
      <SwitchContainer onToggle={handleToggle} checked={switchState.checked} />
      <p className={`text-xl font-bold ${switchState.checked ? 'text-white' : 'text-indigo-700'}`}>
        {darkModeText}
      </p>
    </div>

  <img src={img1} alt="personal photo" className="rounded absolute pt-12 sm:left-1/2 sm:transform sm:-translate-x-1/2 md:left-2/3 md:transform md:-translate-x-1/2 lg:left-2/3 lg:transform lg:-translate-x-1/2 h-72 w-48" />
  </div>
</div>

  <Skills language={languageState.language} switchState={switchState} />
  <Profile language={languageState.language} switchState={switchState} />
  <Projects language={languageState.language} switchState={switchState} />
  <Footer language={languageState.language} switchState={switchState} />
    </div>
  );
  
}

export default App

