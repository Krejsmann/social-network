import React from 'react';
import logo from '../../images/logotype/logo.png';
import s from './Header.module.css';
const Header = () => {
  return (
        <header className={s.header}>
      <div className={s.container}>
        <a href="#"><div className={s.logo}>AEGIS</div></a>
      </div>
    </header>
  )
}

export default Header;