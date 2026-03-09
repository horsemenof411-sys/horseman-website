export default function Photography() {
  return (
    <div className="pt-24 px-10 min-h-screen">
      <h1 className="text-5xl font-bold text-center mb-12">
        Photography
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <img src="/images/img1.jpg" className="rounded-lg hover:scale-105 transition" />
        <img src="/images/img2.jpg" className="rounded-lg hover:scale-105 transition" />
        <img src="/images/img3.jpg" className="rounded-lg hover:scale-105 transition" />
        <img src="/images/img4.jpg" className="rounded-lg hover:scale-105 transition" />
        <img src="/images/img5.jpg" className="rounded-lg hover:scale-105 transition" />
        <img src="/images/img6.jpg" className="rounded-lg hover:scale-105 transition" />
      </div>
    </div>
  );
}