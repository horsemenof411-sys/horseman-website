export default function TravelPlans() {
  return (
    <div className="pt-24 px-10 bg-gray-950 text-white min-h-screen">
      <h1 className="text-5xl font-bold text-center mb-12">
        Travel Plans
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Guruvayoor Trip */}
        <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold mb-2">Guruvayoor Trip</h2>
          <p className="text-gray-400">
            Route: Coimbatore → Palakkad → Trissur → Guruvayoor → Return via Munnar → Bodimettu → Theni → Rajapalayam
          </p>
          <ul className="text-gray-400 mt-2">
            <li>Petrol Up: ₹1560 (400 km)</li>
            <li>Petrol Down: ₹1465 (376 km)</li>
            <li>Food: ₹1000</li>
            <li>Stay: ₹500</li>
            <li className="text-white font-semibold">Total: ₹4725</li>
          </ul>
        </div>

        {/* Sabarimala Trip */}
        <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold mb-2">Sabarimala Trip</h2>
          <p className="text-gray-400">
            Route: Punular → Pathanathitta → Pamba → Return via Kumily → Theni → Rajapalayam
          </p>
          <ul className="text-gray-400 mt-2">
            <li>Petrol: ₹2240</li>
            <li>Food: ₹700</li>
            <li>Purchase: ₹500</li>
            <li className="text-white font-semibold">Total: ₹3440</li>
          </ul>
        </div>
      </div>
    </div>
  );
}