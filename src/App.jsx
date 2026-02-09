import { useEffect } from "react";
import "./App.css";
import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <section id="home" className="reveal"><Hero /></section>
        <section id="about" className="reveal"><About /></section>
        <section id="experience" className="reveal"><Experience /></section>
        <section id="education" className="reveal"><Education /></section>
        <section id="skills" className="reveal"><Skills /></section>
        <section id="projects" className="reveal"><Projects /></section>
        <section id="contact" className="reveal"><Contact /></section>
      </main>

      <Footer />
    </>
  );
}

export default App;
