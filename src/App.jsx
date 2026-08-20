import React, { useRef } from 'react'
import Navbar from './layout/Navbar'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Particles from './reactBits/Particlesbackground'


const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);


  return (

    <div className="app-wrapper">
      <Particles

        particleCount={4500}
        particleSpread={10}
        particleColors={["#8b5cf6", "#60a5fa", "#ffffff"]}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={1}
      />

      <div className="content">
        <Navbar
          homeRef={homeRef}
          aboutRef={aboutRef}
          projectRef={projectRef}
          contactRef={contactRef}
        />
        <Hero ref={homeRef} projectRef={projectRef} />
        <About ref={aboutRef} />
        <Skills />
        <Projects ref={projectRef} />
        <Contact ref={contactRef} />
      </div>
    </div>
  )
}

export default App
