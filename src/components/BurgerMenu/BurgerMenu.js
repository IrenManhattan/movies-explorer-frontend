import React, { useEffect } from 'react';
import './BurgerMenu.css';
import { NavLink } from 'react-router-dom';
import ProfileButton from '../ProfileButton/ProfileButton';


function BurgerMenu({ isOpen, onClose }) {

  useEffect(() => {

    if (!isOpen) return
    const closeByEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', closeByEscape)
    return () => document.removeEventListener('keydown', closeByEscape)
  }, [isOpen, onClose])

  const closeByOverlay = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <>
      <div
        className={
          isOpen ? 'burger-menu burger-menu_opened' : 'burger-menu burger-menu_closed'
        }
        onClick={closeByOverlay}
      >

        <nav className="burger-menu-nav">
          <React.Fragment>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'burger-menu-nav__link-active'
                  : 'burger-menu-nav__link '
              }
              exact="true"
              to="/"
              onClick={onClose}
            >
              Главная
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'burger-menu-nav__link-active'
                  : 'burger-menu-nav__link'
              }
              exact="true"
              to="/movies"
              onClick={onClose}
            >
              Фильмы
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'burger-menu-nav__link-active'
                  : 'burger-menu-nav__link'
              }
              exact="true"
              to="/saved-movies"
              onClick={onClose}
            >
              Сохраненные фильмы
            </NavLink>
          </React.Fragment>
        </nav>
        <ProfileButton onClose={onClose} />
      </div>
    </>
  )
}

export default BurgerMenu;
