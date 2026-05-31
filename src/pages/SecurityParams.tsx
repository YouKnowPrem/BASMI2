/** ============================================================================
 *  BASMI Defence Systems - Security Parameters & HVM Page (SecurityParams.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Grid layout showcasing hostile vehicle mitigation (HVM), crash-rated 
 *           gates, tyre killers, turnstiles, and perimeter detection technologies.
 *  Editable Parameters:
 *    - categories array: Configures the catalog image paths and system names.
 *  ============================================================================
 */

export const SecurityParams = () => {
  // --- HVM PRODUCTS & DETECT CATALOG DATA ---
  const categories = [
    {
      title: "Bollards",
      image: "/bollards.png"
    },
    {
      title: "High Security Crash Rated Gates",
      image: "/gates.png"
    },
    {
      title: "Boom Barrier",
      image: "/boom_barrier.png"
    },
    {
      title: "Road Blocker",
      image: "/road_blocker.png"
    },
    {
      title: "Crash Barriers",
      image: "/crash_barriers.png"
    },
    {
      title: "Tyre Killer",
      image: "/tyre_killer.png"
    },
    {
      title: "Modular Vehicular Barrier",
      image: "/modular_barrier.png"
    },
    {
      title: "Flap and Swing Barrier",
      image: "/flap_barrier.png"
    },
    {
      title: "Turnstiles",
      image: "/turnstiles.png"
    },
    {
      title: "Perimeter Intrusion Detection System",
      image: "/perimeter_security.png"
    }
  ];

  return (
    // --- MAIN PORTFOLIO PAGE ---
    <div className="min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER BLOCK */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wider">
            What We Do For You
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            Discover High Quality HVM Solutions
          </p>
        </div>

        {/* CATALOG CARDS RESPONSIVE GRID SYSTEM */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <div 
              key={idx} 
              className="group relative h-80 rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Background Image Layer (Hover scale animations included) */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              
              {/* Gradient Bottom Contrast Tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
              
              {/* Card Label */}
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-xl font-bold text-white leading-tight transform translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
