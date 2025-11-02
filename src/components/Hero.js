import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-transparent px-6 md:px-20"
    >
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative group w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.2)] border-4 border-gray-700"
      >
        <img
          src={profilePic}
          alt="Profile"
          className="w-full h-full object-cover brightness-90 contrast-110 group-hover:brightness-100 transition-all duration-300"
        />
        {/* Subtle blue glow on hover */}
        <div className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md"></div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mt-8 md:mt-0 md:ml-10 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">
          Hi, I’m <span className="text-blue-400">Mohd Faizan Khan</span>
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
  A passionate web developer who loves building beautiful, interactive, and responsive websites.
</p>

<a
  href="#projects"
  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
>
  View My Work
</a>

      </motion.div>
    </section>
  );
};

export default Hero;
