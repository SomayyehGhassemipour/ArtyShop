import React, { useState } from 'react'
import { Menu } from './Menu'
import {MenuData_primary, MenuData_secondary} from './MenuData'

import styles from './Navbar.module.css'

export  const Navbar = () => {
  const [navbar_state,setNavbarState] = useState(false);
  const handleClick = () => {
    setNavbarState(!navbar_state)
  }
  return (
    <nav className={styles.navbarItems}>
      <div className={styles.brand}><i className="fa-solid fa-palette"></i>ArtyShop</div>
      <div className={styles.menu_icon} onClick={handleClick}>
        <i className={navbar_state ? "fa-solid fa-times" : "fa-solid fa-bars" }></i>
      </div>
      <Menu data={MenuData_primary} type="primary" isActive={navbar_state}/>
      <Menu data={MenuData_secondary}  type="secondary"/>
    </nav>
  )
}