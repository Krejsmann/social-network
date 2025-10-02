import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import profileIcon from '../../images/icons/profile.svg';
import newsIcon from '../../images/icons/news.svg';
import musicIcon from '../../images/icons/music.svg';
import messagesIcon from '../../images/icons/messages.svg';
import settingsIcon from '../../images/icons/settings.svg';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        <li className={s['nav__list-item']}>
          
          <NavLink to="/profile" className={({ isActive }) => isActive ? s.activeLink : s.item}>
          <img src={profileIcon} alt="" className={s.icons}/>
            Профиль
          </NavLink>
        </li>
        <li className={s['nav__list-item']}>
          <NavLink to="/messages" className={({ isActive }) => isActive ? s.activeLink : s.item}>
          <img src={messagesIcon} alt="" className={s.icons}/>
            Сообщения
          </NavLink>
        </li>
        <li className={s['nav__list-item']}>
          <NavLink to="/news" className={({ isActive }) => isActive ? s.activeLink : s.item}>
          <img src={newsIcon} alt="" className={s.icons}/>
            Новости
          </NavLink>
        </li>
        <li className={s['nav__list-item']}>
          <NavLink to="/music" className={({ isActive }) => isActive ? s.activeLink : s.item}>
          <img src={musicIcon} alt="" className={s.icons}/>
            Музыка
          </NavLink>
        </li>
        <li className={s['nav__list-item']}>
          <NavLink to="/settings" className={({ isActive }) => isActive ? s.activeLink : s.item}>
          <img src={settingsIcon} alt="" className={s.icons}/>
            Настройки
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;