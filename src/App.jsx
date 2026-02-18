import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Particles from './reactBits/Particlesbackground'

const App = () => {
  return (
    <div className="app-wrapper">
      <Particles 
              particleColors={["#9d4edd"]}
              particleCount={300}
              particleSpread={8}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover
              alphaParticles={false}
              disableRotation={false}
              pixelRatio={1}
          />

      <div className="content">
         <Navbar />
      <Hero />
      <Projects />
      </div>
    </div>
  )
}

export default App
