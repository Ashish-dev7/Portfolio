import React from "react";
import { motion } from "framer-motion";

function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "CCNA: Introduction to Networks (ITN)",
      issuer: "Cisco",
      category: "Networking",
      description: "Introduction to networking concepts, network infrastructure, protocols, and basic network configuration.",
      icon: "ri-router-line",
      link: "https://www.netacad.com/"
    },
    {
      id: 2,
      title: "ADCA – Advanced Diploma in Computer Applications",
      issuer: "Wizard-Tech Computer Academy",
      category: "Computer Applications",
      description: "Training in computer applications, productivity tools, operating systems, and essential IT skills.",
      icon: "ri-macbook-line",
      link: "https://wtca.edu.in/result_verify.php" 
    },
    {
      id: 3,
      title: "Computer Hardware Basics",
      issuer: "Cisco",
      category: "Hardware",
      description: "Fundamentals of computer hardware, components, troubleshooting, and basic hardware concepts.",
      icon: "ri-cpu-line",
      link: "https://www.netacad.com/"
    },
    {
      id: 4,
      title: "Introduction to AI",
      issuer: "Cisco",
      category: "Artificial Intelligence",
      description: "Fundamental concepts of Artificial Intelligence, its applications, and modern AI technologies.",
      icon: "ri-brain-line",
      link: "https://www.netacad.com/"
    },
    {
      id: 5,
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      category: "Cybersecurity",
      description: "Fundamentals of cybersecurity, common threats, security concepts, and basic practices for protecting digital systems.",
      icon: "ri-shield-keyhole-line",
      link: "https://www.netacad.com/"
    }
  ];

  return (
    <section
      id="certifications"
      className="relative w-full flex justify-center bg-[#020617] text-white py-20 px-6"
    >
      <div className="w-full max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <p className="text-green-500 text-sm font-medium tracking-widest uppercase">
            Achievements
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Certifications
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto md:mx-0 text-base md:text-lg">
            Certifications and courses that strengthen my technical, networking,
            hardware, AI, and cybersecurity skills.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 10px 30px -10px rgba(34,211,238,0.15)"
              }}
              className="
                group
                relative
                bg-white/5
                border border-white/10
                rounded-2xl
                p-6
                flex flex-col
                hover:border-green-500/50
                transition-all
                duration-300
              "
            >
             
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                  {cert.category}
                </span>
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-gray-300 group-hover:text-green-400 group-hover:bg-green-500/10 transition-colors">
                  <i className={`${cert.icon} text-xl`}></i>
                </div>
              </div>

            
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors">
                  {cert.title}
                </h3>
                {cert.issuer && (
                  <p className="text-sm font-medium text-gray-400 mt-1 flex items-center gap-1">
                    <i className="ri-building-line text-green-500/70"></i>
                    {cert.issuer}
                  </p>
                )}
              </div>

             
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {cert.description}
              </p>

           
              <div className="mt-auto pt-4 border-t border-white/10 group-hover:border-green-500/20 transition-colors">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2 
                    text-sm font-medium text-gray-300 
                    group-hover:text-green-400 
                    transition-colors
                  "
                >
                  View Certificate
                  <i className="ri-arrow-right-up-line group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
