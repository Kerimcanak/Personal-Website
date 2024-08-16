function Projects({ language, switchState }) {
  const projects = language === 'en' ? "Projects" : "Projelerim";

  return (
    <div className={`w-screen h-auto bg-${switchState.checked ? 'lime-950' : 'lime-300'} flex flex-col items-center justify-start space-y-4 py-4`}>
      <h1 className={`text-4xl font-bold text-${switchState.checked ? 'lime-300' : 'indigo-700'}`}>{projects}</h1>
      {/* proje kartları! */}
      <div className={`max-w-md mx-auto bg-${switchState.checked ? 'stone-800' : 'white'} rounded-xl shadow-md overflow-hidden md:max-w-2xl`}>
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
      <div className={`max-w-md mx-auto ${switchState.checked ? 'bg-stone-800' : 'bg-white'} rounded-xl shadow-md overflow-hidden md:max-w-2xl`}>
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
  );
}

export default Projects
