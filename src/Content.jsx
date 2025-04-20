import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Spotify Clone",
    description: "A clone of the Spotify UI using HTML, CSS, and JavaScript.",
    link: "https://spotify-clone-three-omega-62.vercel.app/"
  },
  {
    title: "Netflix Clone",
    description: "Frontend clone of Netflix using React and styled-components.",
    link: "https://netflix-frontend-ochre.vercel.app"
  },
  {
    title: "Amazon Clone",
    description: "An Amazon landing page clone built with HTML, CSS.",
    link: "https://amazon-frontend-phi.vercel.app/"
  },
  {
    title: "Bootstrap",
    description: "A website frontend developed using bootstrap",
    link: "https://bootstrap-project-gamma-sepia.vercel.app"
  },
  {
    title: "Currency Converter",
    description: "A currency converter that uses an API to fetch real-time data.",
    link: "https://currency-converter-web-eight.vercel.app/"
  },
  {
    title: "Airbnb Clone",
    description: "A full stack Airbnb clone with backend using Node.js and MongoDB.",
    link: "https://github.com/yourusername/airbnb-clone"
  },
];

export default function Portfolio() {
  return (
    <main className="px-4 py-4 sm:px-6 lg:px-8 max-w-screen mx-auto font-sans text-white bg-gray-900 min-h-screen">
    <section className="flex flex-col items-center mb-8 text-center px-4">
    <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mb-4">
  <motion.img
    src="/dp.png"
    alt="Profile"
    className="w-full h-full object-cover"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  />
</div>

  <motion.h2
    className="text-2xl sm:text-3xl font-semibold text-white mb-1"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    Rahul Kumar
  </motion.h2>
  <motion.h1
    className="text-4xl sm:text-5xl font-bold mb-2"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    My Portfolio
  </motion.h1>
  <p className="text-gray-400 text-sm sm:text-base">
    IT Engineer | Full Stack Developer | Creative Thinker
  </p>
</section>


      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="rounded-2xl shadow-xl bg-gray-800 hover:bg-gray-700 cursor-pointer p-6 h-full">
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-2">{project.title}</h2>
              <p className="text-gray-300 text-sm sm:text-base">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </section>

      <motion.section
        className="mt-12 text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-4">About Me</h2>
        <p className="text-gray-300 max-w-4xl mx-auto text-base sm:text-lg">
          I'm an enthusiastic IT engineering student and full stack web developer.
        </p>
      </motion.section>
    </main>
  );
}