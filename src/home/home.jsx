import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container py-5">
      {/* Header */}
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="display-4 fw-bold text-primary">Chitpanu (Poen)</h1>
        <p className="lead text-muted">Game Developer & Full-Stack Web Engineer</p>
      </motion.div>

      {/* About Me Section */}
      <motion.div
        className="mb-5"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="card shadow-lg p-4 border-0 rounded-4 bg-light">
          <p className="mb-0 text-secondary fs-5 text-center">
            I'm a passionate developer blending creativity and logic to build both immersive games and scalable web applications.
            I specialize in tools like Unreal and C++ for game development, and use technologies like React, Node.js, and PostgreSQL for full-stack solutions.
          </p>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="row text-center mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="col-md-4 mb-4">
          <div className="card p-4 h-100 shadow-sm border-0">
            <h5 className="fw-bold text-primary">Game Development</h5>
            <p className="text-muted mb-0">Unreal, C++, Blueprint, Multiplayer</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card p-4 h-100 shadow-sm border-0">
            <h5 className="fw-bold text-primary">Web Development</h5>
            <p className="text-muted mb-0">React, Node.js, HTML, Bootstrap, MongoDB, PostgreSQL</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card p-4 h-100 shadow-sm border-0">
            <h5 className="fw-bold text-primary">Tools & DevOps</h5>
            <p className="text-muted mb-0">Git, Docker, GitHub Actions, Linux</p>
          </div>
        </div>


       

      </motion.div>

      {/* Contact Button */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <a href="mailto:chitpanu.th@gmail.com" className="btn btn-primary btn-lg rounded-pill px-4">
          Contact Me
        </a>
      </motion.div>
    </div>
  );
};

export default Home;
