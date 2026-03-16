export default function Home() {
  return (
    <div className="pt-20 bg-gray-950 text-white min-h-screen">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Text */}
        <div className="relative z-10 px-6">
          <h1 className="text-6xl font-bold mb-6">
            Horseman Photography
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Capturing travel, motorcycles and unforgettable journeys
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>

        <div className="grid md:grid-cols-4 gap-10 px-10">

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">Photography</h3>
            <p className="text-gray-400">
              Outdoor, travel and cinematic photography experiences.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">Digital Design</h3>
            <p className="text-gray-400">
              Logos, posters, wallpapers and creative design work.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">Website Building</h3>
            <p className="text-gray-400">
              Portfolio and business websites for individuals and brands.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">Travel Plans</h3>
            <p className="text-gray-400">
              Curated motorcycle travel experiences and road trips.
            </p>
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-12">Featured Photography</h2>

        <div className="grid md:grid-cols-3 gap-6 px-10">

          <img
            src="/images/img1.jpg"
            className="rounded-lg hover:scale-105 transition duration-300"
          />

          <img
            src="/images/img2.jpg"
            className="rounded-lg hover:scale-105 transition duration-300"
          />

          <img
            src="/images/img3.jpg"
            className="rounded-lg hover:scale-105 transition duration-300"
          />

          <img
            src="/images/img4.jpg"
            className="rounded-lg hover:scale-105 transition duration-300"
          />

          <img
            src="/images/img5.jpg"
            className="rounded-lg hover:scale-105 transition duration-300"
          />

          <img
            src="/images/img6.jpg"
            className="rounded-lg hover:scale-105 transition duration-300"
          />

        </div>
      </section>

    </div>
  );
}