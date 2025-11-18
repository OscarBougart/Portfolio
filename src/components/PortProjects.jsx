const PortProjects = () => {
  return (
    <section id="projects" className="bg-ls-1 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* === Heading === */}

        <h1 className="text-center text-4xl md:text-6xl font-bold text-ls-8 mb-8">
          Projects
        </h1>
        <p className="text-center text-ls-7 max-w-3xl mx-auto mb-16">
          A selection of small personal projects.
        </p>

        {/* === Project 1: The SpiritStack === */}
        <div className="flex flex-col md:flex-row items-center mb-24 gap-10">
          {/* Left: Placeholder Carousel */}
          <div className="md:w-1/2 flex gap-4">
            <div className="flex-1 bg-pink-200 border-2 border-pink-400 rounded-xl h-48 flex items-center justify-center text-pink-600">
              Vintage 1
            </div>
            <div className="flex-1 bg-yellow-200 border-2 border-yellow-400 rounded-xl h-48 flex items-center justify-center text-yellow-600">
              Vintage 2
            </div>
            <div className="flex-1 bg-green-200 border-2 border-green-400 rounded-xl h-48 flex items-center justify-center text-green-600">
              Vintage 3
            </div>
          </div>

          {/* Right: Info */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-ls-8 mb-4">
              The SpiritStack
            </h3>
            <p className="text-ls-7 mb-4">
              A colorful, vintage-themed website where bartenders and cocktail
              lovers can easily discover new cocktail-making techniques
              presented in a playful way.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="badge">React</span>
              <span className="badge">Tailwind</span>
              <span className="badge">JavaScript</span>
              <span className="badge">Motion</span>
            </div>
            
          </div>
        </div>

        {/* === Project 2: Feast & Fizz === */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-24 gap-10">
          {/* Left: Placeholder Carousel */}
          <div className="md:w-1/2 flex gap-4">
            <div className="flex-1 bg-blue-200 border-2 border-blue-400 rounded-xl h-48 flex items-center justify-center text-blue-600">
              Recipe 1
            </div>
            <div className="flex-1 bg-purple-200 border-2 border-purple-400 rounded-xl h-48 flex items-center justify-center text-purple-600">
              Recipe 2
            </div>
            <div className="flex-1 bg-teal-200 border-2 border-teal-400 rounded-xl h-48 flex items-center justify-center text-teal-600">
              Recipe 3
            </div>
          </div>

          {/* Right: Info */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-ls-8 mb-4">Feast & Fizz</h3>
            <p className="text-ls-7 mb-4">
              A cocktail and food recipe app where users can search by name or
              ingredient. Built with a full stack including a Django backend and
              an external recipe API.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="badge">React</span>
              <span className="badge">Vite</span>
              <span className="badge">Tailwind</span>
              <span className="badge">Django</span>
              <span className="badge">API</span>
            </div>
            
          </div>
        </div>

        {/* === Project 3: Starlit === */}
        <div className="flex flex-col md:flex-row items-center mb-24 gap-10">
          {/* Left: Placeholder Carousel */}
          <div className="md:w-1/2 flex gap-4">
            <div className="flex-1 bg-gray-200 border-2 border-gray-400 rounded-xl h-48 flex items-center justify-center text-gray-600">
              Starlit 1
            </div>
            <div className="flex-1 bg-gray-300 border-2 border-gray-500 rounded-xl h-48 flex items-center justify-center text-gray-700">
              Starlit 2
            </div>
            <div className="flex-1 bg-gray-400 border-2 border-gray-600 rounded-xl h-48 flex items-center justify-center text-gray-800">
              Starlit 3
            </div>
          </div>

          {/* Right: Info */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-ls-8 mb-4">Starlit</h3>
            <p className="text-ls-7 mb-4">
              A modern, professional-looking website concept for an AI product
              idea. Sleek design, clean layout, and futuristic aesthetics.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="badge">React</span>
              <span className="badge">CSS</span>
              <span className="badge">HTML</span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortProjects;
