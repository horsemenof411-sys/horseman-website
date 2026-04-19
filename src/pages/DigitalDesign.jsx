export default function DigitalDesign() {
  return (
    <div className="pt-24 bg-gray-950 text-white min-h-screen">
      <h1 className="text-5xl font-bold text-center mb-16 tracking-wide">
        Digital Design
      </h1>

      <div className="grid md:grid-cols-3 gap-8 px-10">
        <img
          src="/images/design1.jpg"
          className="rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        />

        <img
          src="/images/design2.jpg"
          className="rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        />

        <img
          src="/images/design3.jpg"
          className="rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        />

        <img
          src="/images/design4.jpg"
          className="rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        />
         <img
          src="/images/design5.jpg"
          className="rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        />
      </div>
    </div>
  );
}