import React from 'react'
import './NavBar.css'
import SearchWidget from '../SearchWidget/SearchWidget'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
      <div className='headerTitulo'>
        <SearchWidget/>
        <div>
          <h1 className='brand'> METANOIA </h1>
        </div>
        <CartWidget/>
      </div>

      <div>
        <ul className='headerCategorias'>
          <li> Más Vendidos </li>
          <li> Aretes </li>
          <li> Anillos </li>
          <li> Collares </li>
          <li> Pulseras </li>
        </ul>
      </div>
    </header>
  )
}

export default NavBar