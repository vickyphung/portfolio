import React from 'react'
import './style.css'
import Navigation from '../Navigation'
import Projects from '../Projects'
import Background from '../Background'


export default function Home () {

  return (
    <div className='container'>

        <Background />
        <Projects />
        
        
    </div>
  )
}
