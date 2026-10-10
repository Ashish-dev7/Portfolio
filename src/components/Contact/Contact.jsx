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

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        e.target.reset();
      } else {
        toast.error("Unable to send message.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full flex justify-center bg-[#020617] text-white py-16 sm:py-20 px-4 sm:px-6 scroll-mt-20"
    >
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-green-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Contact
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl text-sm sm:text-base md:text-lg font-normal">
            Have an opportunity, project, or question? Feel free to get in touch
            with me.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-start"
          >
            <h3 className="text-2xl font-semibold">Get in touch</h3>

            <p className="text-gray-400 mt-3 max-w-md leading-relaxed font-normal text-sm sm:text-base">
              I'm currently looking for internship and fresher opportunities. If
              you have an opportunity or would like to collaborate, feel free to
              reach out.
            </p>

            {/* Contact Information */}
            <div className="mt-8 space-y-5">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div
                  className="
                    w-11
                    h-11
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-green-500/10
                    text-green-400
                    border
                    border-green-500/20
                    shrink-0
                  "
                >
                  <i className="ri-mail-line text-xl"></i>
                </div>

                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">
                    Email
                  </p>

                  <a
                    href="mailto:ashish07319@gmail.com"
                    className="text-gray-200 hover:text-green-400 transition font-medium text-sm sm:text-base break-all"
                  >
                    www.ashiskmr@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div
                  className="
                    w-11
                    h-11
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-green-500/10
                    text-green-400
                    border
                    border-green-500/20
                    shrink-0
                  "
                >
                  <i className="ri-map-pin-line text-xl"></i>
                </div>

                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">
                    Location
                  </p>

                  <p className="text-gray-200 font-medium text-sm sm:text-base">
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 mt-8">
              <motion.a
                href="https://github.com/Ashish-dev7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="
                  px-4
                  py-2.5
                  flex
                  items-center
                  gap-2
                  bg-white/5
                  border
                  border-white/10
                  rounded-xl
                  text-gray-300
                  hover:text-green-400
                  hover:border-green-500/50
                  transition
                  font-medium
                  text-sm
                "
              >
                <i className="ri-github-line text-lg"></i>
                GitHub
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/ashish-kumar-580b9a314/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="
                  px-4
                  py-2.5
                  flex
                  items-center
                  gap-2
                  bg-white/5
                  border
                  border-white/10
                  rounded-xl
                  text-gray-300
                  hover:text-green-400
                  hover:border-green-500/50
                  transition
                  font-medium
                  text-sm
                "
              >
                <i className="ri-linkedin-line text-lg"></i>
                LinkedIn
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-6
              sm:p-8
            "
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="
                  w-full
                  px-4
                  py-3
                  bg-white/5
                  border
                  border-white/10
                  rounded-xl
                  text-white
                  placeholder-gray-500
                  outline-none
                  focus:border-green-500
                  focus:ring-1
                  focus:ring-green-500
                  transition
                  text-sm sm:text-base
                "
              />
            </div>

            {/* Email */}
            <div className="mt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="
                  w-full
                  px-4
                  py-3
                  bg-white/5
                  border
                  border-white/10
                  rounded-xl
                  text-white
                  placeholder-gray-500
                  outline-none
                  focus:border-green-500
                  focus:ring-1
                  focus:ring-green-500
                  transition
                  text-sm sm:text-base
                "
              />
            </div>

            {/* Message */}
            <div className="mt-5">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                rows="5"
                required
                className="
                  w-full
                  px-4
                  py-3
                  bg-white/5
                  border
                  border-white/10
                  rounded-xl
                  text-white
                  placeholder-gray-500
                  outline-none
                  resize-none
                  focus:border-green-500
                  focus:ring-1
                  focus:ring-green-500
                  transition
                  text-sm sm:text-base
                "
              ></textarea>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className="
                w-full
                mt-6
                py-3.5
                bg-green-500
                hover:bg-green-400
                disabled:opacity-60
                disabled:cursor-not-allowed
                text-black
                font-semibold
                rounded-xl
                transition
                text-sm sm:text-base
                shadow-lg
                shadow-green-500/20
              "
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <i className="ri-loader-4-line animate-spin text-lg" />
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

