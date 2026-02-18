import React from 'react'
import "../styles/circle.css"

import { FaReact, FaJava, FaGithub, FaPython } from 'react-icons/fa'
import { SiMysql, SiJavascript, SiPostgresql } from 'react-icons/si'

const TechCircle = () => {
  return (
    <div className='tech-circle'>

        <FaReact className='icon react' />
        <SiJavascript className='icon js' />
        <FaJava className='icon java' />
        <SiMysql className='icon mysql' />
        <FaGithub className='icon github' />
        <FaPython className='icon python' />
        <SiPostgresql className='icon postgres' />

    </div>
  )
}

export default TechCircle
