import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import {Container, Row} from 'reactstrap';


const Header = () => {
  return <header className="header">
    <Container>
      <Row>
        <div className="nav__wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
            <div>
              <h1>Multimart</h1>
              <p>Since 1951</p>
            </div>
          </div>
          <div className="navigation">
            <ul className="menu">
              <li className="nav__menu">
                 <NavLink>Home</NavLink>
              </li>
              <li className="nav__menu">
                 <NavLink>Shop</NavLink>
              </li>
              <li className="nav__menu">
                 <NavLink>Cart</NavLink>
              </li>
            </ul>
          </div>

          <div className="nav__icons">
            <span className='fav__icon'><i class="ri-heart-line"></i></span>
            <span className='cart__icons'><i class="ri-shopping-bag-line"></i></span>
            <span><img src={userIcon} alt="" /></span>
          </div>

          <div className="mobile__menu">
            <span><i className="ri-menu-line"></i></span>
          </div>
        </div>
      </Row>
    </Container>
  </header>
}

export default Header