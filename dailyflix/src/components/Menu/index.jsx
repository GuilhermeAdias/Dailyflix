import React from 'react'
import Logo from '../../assets/img/dailyflix-logo.png'
import './Menu.css'
import Button from '../Button/index'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Dailyflix Logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu
