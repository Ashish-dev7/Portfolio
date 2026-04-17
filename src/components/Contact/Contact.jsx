import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "69d6ecfe-a449-49a5-9f7f-8c944bff37fc");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Message sent successfully 🚀");
      e.target.reset();
    } else {
      toast.error("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="w-full flex justify-center bg-[#020617] text-white py-24"
    >
      <div className="w-[90%] max-w-6xl">
        {/* Heading */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold">Contact Me</h2>
          <p className="text-gray-400 mt-4 text-base md:text-lg">
            Have an opportunity or question? Feel free to reach out.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-semibold">Get in touch</h3>
              <p className="text-gray-400 mt-2">
                I’m open to internships and collaboration. Let’s connect.
              </p>
            </div>

            <div className="space-y-3 text-gray-300">
              <p>Email: ashish07319@gmail.com</p>
              <p>Location: India</p>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Ashish-dev7"
                target="_blank"
                className="px-4 py-2 bg-white/10 border border-white/10 rounded-lg hover:border-green-500 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ashish-kumar-580b9a314"
                target="_blank"
                className="px-4 py-2 bg-white/10 border border-white/10 rounded-lg hover:border-green-500 transition"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
         
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-white/10 border border-white/10 rounded-lg focus:border-green-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 bg-white/10 border border-white/10 rounded-lg focus:border-green-500 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full p-3 bg-white/10 border border-white/10 rounded-lg focus:border-green-500 outline-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-green-500 hover:bg-green-600 rounded-lg font-medium transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
