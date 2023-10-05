import React, { useState, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useClickOutside } from '../../helpers/hooks';
import { isUserLogin } from '../../helpers/functions';
import style from './MainStyles.module.css'

import logo from '../../img/navbar-logo.svg'
import search from '../../img/SearchIcon.svg'
import arrowDown from '../../img/ArrowDown.svg'
import add from '../../img/add-icon.svg'
import profileIcon from '../../img/user-icon.svg'
import notification from '../../img/notification.svg'

import Ru from '../../img/RU.svg'
import Us from '../../img/US.svg'
import Moon from '../../img/Moon.svg'
import Sun from '../../img/Sun.svg'

const MainNavbar = () => {
  const location = useLocation();
  const [dropdownActive, setDropdownActive] = useState(false);

  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("Project");
  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Обновляем выбранную категорию
    setDropdownActive(false); // Закрываем выпадающий список
  };

  const [mode, setMode] = useState(false);
  const handleMode = () => {
    setMode(!mode)
  }
  const [language, setLanguage] = useState(false);
  const handleLanguage = () => {
    setLanguage(!language)
  }

  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    setDropdownActive(false)
  })

  return (
    <nav className={style.nav}>
      <div className={style.nav__wrapper}>

        <div className={style.nav__right}>
          <div className={style.logo__block}>
            <img id={style.nav__logo} src={logo} alt="logo" />
          </div>
          <div className={style.nav__menu__wrapper}>
            <ul className={style.nav__menu}>
              <li className={`${location.pathname === '/' ? style.active : ''}`}>
                <Link className={`${style.menu__item} ${location.pathname === '/' ? style.active : ''}`} to="/">Home</Link>
              </li>
              <li className={`${location.pathname === '/about' ? style.active : ''}`}>
                <Link className={`${style.menu__item} ${location.pathname === '/about' ? style.active : ''}`} to="/about">About</Link>
              </li>
              <li className={`${location.pathname === '/projects' ? style.active : ''}`}>
                <Link className={`${style.menu__item} ${location.pathname === '/projects' ? style.active : ''}`} to="/projects">Projects</Link>
              </li>
              <li className={`${location.pathname === '/news' ? style.active : ''}`}>
                <Link className={`${style.menu__item} ${location.pathname === '/news' ? style.active : ''}`} to="/news">News</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={style.nav__left}>
          <div className={style.nav__search}>
            <div className={style.input__block}>
              <div className={style.input__logo__wrapper}>
                <img className={style.input__logo} src={search} alt="" />
              </div>
              <input className={style.search__input} type="text" placeholder='Search' />
            </div>

            <div className={style.hr}></div>

            <div className={style.dropdown}>
              <div className={dropdownActive ? `${style.dropdown__info}` : `${style.dropdown__info} ${style.info__active}`}>
                <div className={style.dropdown__title__wrapper}>
                  <h4 className={style.dropdown__title}> {selectedCategory} </h4>
                </div>
                <div className={style.dropdown__img}>
                  <img className={dropdownActive ? `${style.active__img}` : `${style.dropdown__icon}`} src={arrowDown} alt="down" onClick={() => setDropdownActive(!dropdownActive)} ref={menuRef} />
                </div>
              </div>
              <div className={dropdownActive ? `${style.dropdown__content} ${style.dropdown__content_active}` : `${style.dropdown__content}`}>
                <div className={style.dropdown__item} id={style.dropdown__item_1}>
                  
                </div>
                <div className={style.dropdown__item}>
                  <h3 className={style.item__title} onClick={() => handleCategoryClick("Project")}>Project</h3>
                </div>
                <div className={style.dropdown__item}>
                  <h3 className={style.item__title} onClick={() => handleCategoryClick("Post")}>Post</h3>
                </div>
                <div className={style.dropdown__item}>
                  <h3 className={style.item__title} onClick={() => handleCategoryClick("People")}>People</h3>
                </div>
                <div className={style.dropdown__item} id={style.dropdown__item_last} onClick={() => handleCategoryClick("Podcast")}>
                  <h3 className={style.item__title}>Podcast</h3>
                </div>
              </div>
            </div>

          </div>

          <div className={style.nav__profile}>
            {isUserLogin() ? (
              <>
                <div className={style.profile__wrapper}>
                  <div className={style.add__btn_wrapper}>
                    <div className={style.add__btn}>
                      <img className={style.add__btn__img} src={add} alt="add" />
                    </div>
                  </div>

                  <div className={style.notification__wrapper}>
                    <img className={style.notification} src={notification} alt="notification" />
                  </div>

                  <div className={style.profile__btn}>
                    <div className={style.profile__btn_wrapper}>
                      <img className={style.profile__icon} src={profileIcon} alt="profile" />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={style.profile__wrapper}>
                  <div className={style.switchs}>
                    <img onClick={handleMode} src={mode ? Moon : Sun} alt=""  />
                    <img onClick={handleLanguage} src={language ? Us : Ru} alt="language" />
                  </div>

                  <div className={style.login__btn}>
                    <div className={style.login__btn_wrapper}>
                      <img className={style.login__icon} src={profileIcon} alt="" />
                      <h4 className={style.login__title} onClick={() => navigate('/login')}>Login</h4>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MainNavbar