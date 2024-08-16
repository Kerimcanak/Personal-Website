import items from '../assets/items';
const Skills = ({ language, switchState }) => {
  const skills = language === 'en' ? "Skills" : "Yeteneklerim";

  return (
    <div className={`flex flex-col sm:flex-row relative pb-10 ${switchState.checked ? 'bg-zinc-800' : 'bg-white'}`}>
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
  );
};

export default Skills;
