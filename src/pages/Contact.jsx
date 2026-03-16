import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_op3b528",
        "template_vs9s0on",
        form.current,
        "p-SsMenx1fDK9Mr52"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="pt-24 bg-gray-950 text-white min-h-screen px-10 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-center mb-12">Contact Horseman</h1>

      <div className="w-full max-w-2xl bg-gray-900 p-8 rounded-xl shadow-lg space-y-8">
        
        {/* CONTACT FORM */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>

        </form>

        {/* MANUAL CONTACT */}
        <div className="space-y-2 text-gray-400">

          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/919150124346"
              className="text-orange-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 91501 24346
            </a>
          </p>

          <p>
            Instagram:{" "}
            <a
              href="https://instagram.com/horse_man_of_411"
              className="text-orange-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @horse_man_of_411
            </a>
          </p>

          <p>
            Email:{" "}
            <span className="text-orange-400">
              horsemenof411@gmail.com
            </span>
          </p>

        </div>

      </div>
    </div>
  );
}