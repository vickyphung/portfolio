import React from 'react'
import Navigation from '../Navigation'
import Projects from '../Projects'
import Contact from '../Contact'
import About from '../About'


export default function Home () {

  return (
    <div className='container'>
        <Navigation />
        <About />
        <Projects />
        <Contact />
    </div>
  )
}