import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='nav'>
            <Link to='/'><h1 className='logo'>CORREIO NACIONAL</h1></Link>
            <ul className='nav-links'>
                <Link to='/about'><li >Sobre</li></Link>
                <Link to='/news'><li>Ultimas Noticias</li></Link>
                <Link to='/business'><li>Negócios</li></Link>
            </ul>
        </nav>
    )
}

export default Nav
