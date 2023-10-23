import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

function Header() {
  return (
    <section id='header-section' className='header'>
        <div id='header-title'>NC News</div>
        <Link to='/account'><button id='account-button'>Account</button></Link>
    </section>
  )
}

export default Header