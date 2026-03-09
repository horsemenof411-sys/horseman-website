export default function WebsiteBuilding() {
  return (
    <div className="pt-24 bg-black text-white min-h-screen px-10">
      
      <h1 className="text-5xl font-bold text-center mb-16">
        Website Building
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Client Website 1 */}
        <div className="bg-zinc-900 p-6 rounded-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">Startup Website</h3>
          <p className="text-gray-400 mb-2">
            Landing page & portfolio for a startup company.
          </p>
          <a 
            href="https://millchips-bkyy.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:underline"
          >
            Visit Website
          </a>
        </div>

        {/* Client Website 2 */}
        <div className="bg-zinc-900 p-6 rounded-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">Student Portfolio</h3>
          <p className="text-gray-400 mb-2">
            Portfolio website for a student showcasing their projects.
          </p>
          <a 
            href="https://reshika-portfolio.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:underline"
          >
            Visit Website
          </a>
        </div>

        {/* Your Website (In Progress) */}
        <div className="bg-zinc-900 p-6 rounded-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">Horseman Website</h3>
          <p className="text-gray-400 mb-2">
            My own portfolio website, currently under development.
          </p>
          <span className="text-gray-500 italic">Coming Soon</span>
        </div>
      </div>

    </div>
  );
}