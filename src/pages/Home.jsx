import { motion } from "framer-motion";

// Scroll Animation Wrapper
const FadeUp = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

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
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 px-6">
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Horseman Photography
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto"
          >
            Capturing travel, motorcycles and unforgettable journeys
          </motion.p>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 text-center">
        
        <FadeUp>
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
        </FadeUp>

        <div className="grid md:grid-cols-4 gap-10 px-10">

          {[
            {
              title: "Photography",
              desc: "Outdoor, travel and cinematic photography experiences."
            },
            {
              title: "Digital Design",
              desc: "Logos, posters, wallpapers and creative design work."
            },
            {
              title: "Website Building",
              desc: "Portfolio and business websites for individuals and brands."
            },
            {
              title: "Travel Plans",
              desc: "Curated motorcycle travel experiences and road trips."
            }
          ].map((item, i) => (
            
            <FadeUp key={i}>
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotateX: 5,
                  rotateY: -5
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-900 p-6 rounded-xl cursor-pointer border border-transparent hover:border-white/20 hover:shadow-2xl"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            </FadeUp>

          ))}

        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 text-center">
        
        <FadeUp>
          <h2 className="text-4xl font-bold mb-12">
            Featured Photography
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6 px-10">

          {[
            "/images/img1.jpg",
            "/images/img2.jpg",
            "/images/img3.jpg",
            "/images/img4.jpg",
            "/images/img5.jpg",
            "/images/img6.jpg"
          ].map((img, i) => (
            
            <FadeUp key={i}>
              <motion.img
                src={img}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg cursor-pointer"
              />
            </FadeUp>

          ))}

        </div>
      </section>

    </div>
  );
}