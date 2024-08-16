import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = ({ language, switchState }) => {
  const sendMessage = language === 'en' ? "Send me a message!" : "Bana bir mesaj gönderin!";
  const sendMessageDetail = language === 'en' ? "Got a question or proposal, or just want to say hello? Go ahead." : "Sorularınız veya teklifleriniz var mı? Bana bir mesaj gönderebilirsiniz!";

  return (
    <footer className={`w-screen h-64 bg-${switchState.checked ? 'zinc-800' : 'white'} flex flex-col items-center justify-center`}>
      <h1 className={`text-4xl font-bold text-indigo-700`}>{sendMessage}</h1>
      <div className={`text-${switchState.checked ? 'white' : 'black'}`}>{sendMessageDetail}</div>
      <a href="mailto:kerimcanak@gmail.com" className="text-indigo-700 bold underline">kerimcanak@gmail.com</a>
      <div className="flex space-x-4 mt-4">
        <a href="https://www.facebook.com/profile.php?id=61557482306713" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} className="text-indigo-700" />
        </a>
        <a href="https://twitter.com/kerimcan_ak" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} className="text-indigo-700" />
        </a>
        <a href="https://www.linkedin.com/in/kerimcan-ak-471278280/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="text-indigo-700" />
        </a>
        <a href="https://www.instagram.com/kerimcanak201/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} className="text-indigo-700" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
