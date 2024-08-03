import { useContext, useState } from 'react';
import { LanguageContext } from './assets/LanguageContext';
import LanguageSwitcher from './assets/LanguageSwitcher';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import items from './assets/items';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import Switch from "react-switch";

function App() {
  const { state } = useContext(LanguageContext);



  /* Texts */
  const firstHeader = state.language === 'en' ? 'I am a Frontend Developer...' : 'Ben bir Frontend Yazılımcısıyım...';
  const firstText = state.language === 'en' ? '...who likes to craft solid and scalable frontend products with great user experiences.' : '...ve mükemmel kullanıcı deneyimlerine sahip, sağlam ve ölçeklenebilir ön uç ürünleri üretmeyi seviyorum.';
  const skills = state.language === 'en' ? "Skills" : "Yeteneklerim";
  const profile = state.language === 'en' ? "Profile" : "Özgeçim";
  const basicInformation = state.language === 'en' ? "Basic Information" : "Temel Bilgiler";
  const birthDate = state.language === 'en' ? "Birth Date:" : "Dogum Tarihi:";
  const residence = state.language === 'en' ? "Residence:" : "İkametgâh:";
  const education = state.language === 'en' ? "Education:" : "Eğitim:";
  const educationDetail = state.language === 'en' ? "Graduate from Faculty of Letters in American Studies, <br/>Ege University, 2023" : "Edebiyat Fakültesi Amerikan Kültürü ve Edebiyatı Bölümü Mezunu, <br/>Ege Üniversitesi, 2023";
  const preferredRole = state.language === 'en' ? "Preferred Role:" : "Tercih Edilen Rol:";
  const aboutMe = state.language === 'en' ? "About Me" : "Hakkımda";
  const aboutMeDetails = state.language === 'en' ? "Hello, everybody! <br/>I'm a front end developer,<br/> I like to work with computers, <br/>I follow sciences and reading. <br/>Every project is a new opportunity<br/> and a constant improvement." : "Merhaba! Ben bir front end developer'ım.<br/> Bilgisayarla ilgilenmeyi, bilimleri takip etmeyi <br/>ve okumayı seviyorum. Her proje yeni bir<br/> fırsat demek ve sürekli gelişmeyi sağlıyor."
  const projects = state.language === 'en' ? "Projects" : "Projelerim";
  const sendMessage = state.language === 'en' ? "Send me a message!" : "Bana bir mesaj gönderin!";
  const sendMessageDetail = state.language === 'en' ? "Got a question or proposal, or just want to say hello? Go ahead." : "Sorularınız veya teklifleriniz var mı? Bana bir mesaj gönderebilirsiniz!";




  /*Switch */
  const [checked, setChecked] = useState(false);

  const handleChange = (newChecked) => {
    setChecked(newChecked);
  };

  const darkModeText = checked ? "Light Mode" : "Dark Mode";

  if (checked) {
    // Apply dark mode tailwind
    document.documentElement.classList.add('dark');
  } else {
    // Disable dark mode tailwind
    document.documentElement.classList.remove('dark');
  }

/*End of Switch */



  

  return (
    <div style={{ overflow: "hidden" }}>
<div className="flex relative">
  <div className="absolute top-0 left-0 mt-4 ml-4 flex items-center">
    <input type="checkbox" id="darkMode" name="darkMode" value="darkMode" />
    <label htmlFor="darkMode" className="text-black ml-2">dark mode</label>
  </div>
  <div className={`w-2/3 h-96 ${checked ? 'bg-indigo-950' : 'bg-indigo-700'} flex flex-col items-center justify-center relative`}>
    <div className="absolute top-0 left-0 mt-4 ml-4 text-white text-xl"><span className="text-lime-300" >Kerimcan</span>AK</div>
    
    <LanguageSwitcher />
    <h1 className="text-4xl font-bold text-white mt-8">{firstHeader}</h1>
    <p className="text-white mt-4">
      {firstText}
    </p>
    <div className="mt-8 flex">
      <a href="https://github.com/kerimcanak" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-200 transition duration-300 mr-4">
<button className={`bg-white text-indigo-700 font-bold py-2 px-4 rounded flex items-center ${checked ? 'bg-zinc-800 border-2 border-white text-white' : ''}`}>
          <FaGithub className="mr-2" />
          Github
        </button>
      </a>
      <a href="https://www.linkedin.com/in/kerimcanak/" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-200 transition duration-300">
      <button className={`bg-white text-indigo-700 font-bold py-2 px-4 rounded flex items-center ${checked ? 'bg-zinc-800 border-2 border-white text-white' : ''}`}>
      <FaLinkedin className="mr-2" />
          LinkedIn
        </button>
      </a>
    </div>
  </div>
  <div className={`w-1/3 h-96 ${checked ? 'bg-lime-950' : 'bg-lime-300' }`} >
  <div className='left-0 mt-4 ml-4 flex flex-row'>
  <Switch checked={checked} onChange={handleChange} />
  <p className="text-xl font-bold text-indigo-700">
    {darkModeText}
  </p>
</div>

  <img src={img1} alt="personal photo" className="rounded absolute pt-12 sm:left-1/2 sm:transform sm:-translate-x-1/2 md:left-2/3 md:transform md:-translate-x-1/2 lg:left-2/3 lg:transform lg:-translate-x-1/2 h-72 w-48" />
  </div>
</div>





<div className={`flex flex-col sm:flex-row relative pb-10 ${checked ? 'bg-zinc-800' : 'bg-white'}`}>
  <h1 className="text-indigo-700 p-12 text-4xl font-bold">{skills}</h1>
  <div className="w-full flex justify-end mt-4 ml-4">
    <div className="w-3/4 flex flex-wrap justify-end">
      {items.map((item, index) => (
        <div key={index} className="w-full sm:w-1/3 p-2">
          <img src={item.image} alt={item.title} className="rounded h-24 w-24" />
          <div className="text-neutral-500">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>




<div className={`w-screen ${checked ? 'bg-indigo-950': 'bg-indigo-700'} p-4 pb-12`}>
  <div className="flex flex-col md:flex-row h-full items-start">
    <div className="text-left flex-shrink-0">
      <h1 className="text-lime-300 p-12 text-4xl font-bold">{profile}</h1>
      <h2 className="text-xl text-white pl-12">{basicInformation}</h2>
      <table className="mt-4 border-separate border-spacing-2">
        <tr>
          <td className="text-lime-300 pl-12">{birthDate}</td>
          <td className="text-white">11.10.2001</td>
        </tr>
        <tr>
          <td className="text-lime-300 pl-12">{residence}</td>
          <td className="text-white">İzmir, Türkiye</td>
        </tr>
        <tr>
          <td className="text-lime-300 pl-12">{education}</td>
          <td className="text-white" dangerouslySetInnerHTML={{ __html: educationDetail }}></td>
        </tr>
        <tr>
          <td className="text-lime-300 pl-12">{preferredRole}</td>
          <td className="text-white">Frontend, UI</td>
        </tr>
      </table>
    </div>
    <div className="flex flex-col md:flex-row items-center ml-4">
      <img src={img2} alt="Profile Image" className="rounded h-80 w-48 pt-20" />
      <div className="ml-4">
        <h3 className="text-xl font-bold pt-11 text-white">{aboutMe}</h3>
        <p dangerouslySetInnerHTML={{ __html: aboutMeDetails }} className='text-white'></p>
      </div>
    </div>
  </div>
</div>





<div className={`w-screen h-auto bg-${checked ? 'lime-950' : 'lime-300'} flex flex-col items-center justify-start space-y-4 py-4`}>
  <h1 className={`text-4xl font-bold text-${checked ? 'lime-300' : 'indigo-700'}`}>{projects}</h1>
  {/* proje kartları! */}
  <div className={`max-w-md mx-auto bg-${checked ? 'stone-800' : 'white'} rounded-xl shadow-md overflow-hidden md:max-w-2xl`}>
    <div className="md:flex">
      <div className="md:shrink-0">
        <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://www.biggerbolderbaking.com/wp-content/uploads/2021/02/New-York-Style-Pizza-Thumbnail1-scaled.jpg" alt="Modern building architecture" />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">fsweb-s7-pizza</div>
        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Github</a>
        <p className="mt-2 text-slate-500">Commerce website.</p>
      </div>
    </div>
  </div>
  {/* proje kartı 2 */}
  <div className={`max-w-md mx-auto ${checked ? 'bg-stone-800' : 'bg-white'} rounded-xl shadow-md overflow-hidden md:max-w-2xl`}>
    <div className="md:flex">
      <div className="md:shrink-0">
        <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://i.pinimg.com/originals/60/7e/2d/607e2df78032070e9be1006be22f007f.png" alt="Modern building architecture" />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">netflixMockup</div>
        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Github</a>
        <p className="mt-2 text-slate-500">Streaming website.</p>
      </div>
    </div>
  </div>
</div>







<footer className={`w-screen h-64 bg-${checked ? 'zinc-800' : 'white'} flex flex-col items-center justify-center`}>
      <h1 className={`text-4xl font-bold text-indigo-700`}>{sendMessage}</h1>
      <div className={`text-${checked ? 'white' : 'black'}`}>{sendMessageDetail}</div>
      <a href="mailto:kerimcanak@gmail.com" className="text-indigo-700 bold underline">kerimcanak@gmail.com</a>
      <div className="flex space-x-4 mt-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} className="text-indigo-700" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} className="text-indigo-700" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="text-indigo-700" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} className="text-indigo-700" />
        </a>
      </div>
    </footer>
    </div>
  );
  
}

export default App

