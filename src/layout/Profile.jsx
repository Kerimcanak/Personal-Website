
import img2 from '../assets/img2.png';

const Profile = ({ language, switchState }) => {
  const profile = language === 'en' ? "Profile" : "Özgeçim";
  const basicInformation = language === 'en' ? "Basic Information" : "Temel Bilgiler";
  const birthDate = language === 'en' ? "Birth Date:" : "Doğum Tarihi:";
  const residence = language === 'en' ? "Residence:" : "İkametgâh:";
  const education = language === 'en' ? "Education:" : "Eğitim:";
  const educationDetail = language === 'en' ? "Graduate from Faculty of Letters in American Studies, <br/>Ege University, 2023" : "Edebiyat Fakültesi Amerikan Kültürü ve Edebiyatı Bölümü Mezunu, <br/>Ege Üniversitesi, 2023";
  const preferredRole = language === 'en' ? "Preferred Role:" : "Tercih Edilen Rol:";
  const aboutMe = language === 'en' ? "About Me" : "Hakkımda";
  const aboutMeDetails = language === 'en' ? "Hello, everybody! <br/>I'm a front end developer,<br/> I like to work with computers, <br/>I follow sciences and reading. <br/>Every project is a new opportunity<br/> and a constant improvement." : "Merhaba! Ben bir front end developer'ım.<br/> Bilgisayarla ilgilenmeyi, bilimleri takip etmeyi <br/>ve okumayı seviyorum. Her proje yeni bir<br/> fırsat demek ve sürekli gelişmeyi sağlıyor."

  return (
    <div className={`w-screen ${switchState.checked ? 'bg-indigo-950': 'bg-indigo-700'} p-4 pb-12`}>
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
  );
};

export default Profile;
