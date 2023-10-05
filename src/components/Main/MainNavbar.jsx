import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useClickOutside } from '../../helpers/hooks';
import { isUserLogin } from '../../helpers/functions';
import { useDarkMode } from '../../helpers/DarkMode';
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

import detailAccount from '../../img/account-details.svg'
import messanger from '../../img/message.svg'
import star from '../../img/star.svg'
import blog from '../../img/blogIcon.svg'
import notificationIcon from '../../img/detail-notification.svg'
import settings from '../../img/Settings.svg'
import logout from '../../img/logout.svg'
import langArrow from '../../img/LangArrow.svg'

const MainNavbar = () => {
  const location = useLocation();
  const [dropdownActive, setDropdownActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("Project");
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setDropdownActive(false);
  };

  const { isDarkMode, toggleDarkMode } = useDarkMode(); 

  const [language, setLanguage] = useState(false);
  const handleLanguage = () => {
    setLanguage(!language)
  }

  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    setDropdownActive(false);
  })

  const detailRef = useRef(null);
  useClickOutside(detailRef, () => {
    setIsHovered(false)
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
              <li>
                <Link className={`${style.menu__item} ${location.pathname === '/' ? style.active : ''}`} to="/">Home</Link>
              </li>
              <li>
                <Link className={`${style.menu__item} ${location.pathname === '/about' ? style.active : ''}`} to="/about">About</Link>
              </li>
              <li>
                <Link className={`${style.menu__item} ${location.pathname === '/projects' ? style.active : ''}`} to="/projects">Projects</Link>
              </li>
              <li>
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
              <div className={dropdownActive ? `${style.dropdown__info}` : `${style.dropdown__info} ${style.info__active}`} ref={menuRef}>
                <div className={style.dropdown__title__wrapper} onClick={() => setDropdownActive(!dropdownActive)}>
                  <h4 className={style.dropdown__title}> {selectedCategory} </h4>
                </div>
                <div className={style.dropdown__img}>
                  <img className={dropdownActive ? `${style.active__img}` : `${style.dropdown__icon}`} src={arrowDown} alt="down" onClick={() => setDropdownActive(!dropdownActive)}/>
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

          <div className={style.nav__profile} ref={detailRef} >
            <div className={style.profile__wrapper}>
              {isUserLogin() ? (
                <>
                    <div className={style.add__btn_wrapper}>
                      <div className={style.add__btn}>
                        <img className={style.add__btn__img} src={add} alt="add" />
                      </div>
                    </div>

                    <div className={style.notification__wrapper}>
                      <img className={style.notification} src={notification} alt="notification" />
                    </div>

                    <div className={style.profile__btn} >
                      <div className={isHovered ? `${style.profile__btn_wrapper} ${style.btn__active}` : `${style.profile__btn_wrapper}`} onClick={() => setIsHovered(!isHovered)} >
                        <img className={style.profile__icon} src={profileIcon} alt="profile"/>
                      </div>
                    </div>
                </>
              ) : (
                <>
                    <div className={style.switchs}>
                      <img onClick={toggleDarkMode} src={isDarkMode ? Moon : Sun} alt=""  />
                      <img onClick={handleLanguage} src={language ? Us : Ru} alt="language" />
                    </div>

                    <div className={style.login__btn}>
                      <div className={style.login__btn_wrapper}>
                        <img className={style.login__icon} src={profileIcon} alt="" />
                        <h4 className={style.login__title} onClick={() => navigate('/login')}>Login</h4>
                      </div>
                    </div>
                </>
              )}
            </div>
                
                <div className={isHovered ? `${style.detail__menu} ${style.details__active}` : `${style.detail__menu}`} ref={detailRef}  >
                  <div className={style.detail__item}>
                    <img className={style.acc__img} src={detailAccount} alt="" />
                    <h5 className={style.details__title}>My Account</h5>
                  </div>
                  <div className={style.detail__item}>
                    <img className={style.acc__img} src={messanger} alt="" />
                    <h5 className={style.details__title}>Messanger</h5>
                  </div>
                  <div className={style.detail__item}>
                    <img className={style.acc__img} src={star} alt="" />
                    <h5 className={style.details__title}>Favorites</h5>
                  </div>
                  <div className={style.detail__item}>
                    <img className={style.acc__img} src={blog} alt="" />
                    <h5 className={style.details__title}>Blog</h5>
                  </div>
                  <div className={style.detail__item}>
                    <img className={style.acc__img} src={notificationIcon} alt="" />
                    <h5 className={style.details__title}>Notifications</h5>
                  </div>
                  <div className={style.detail__item} onClick={() => setLanguage(!language)}>
                    <img className={style.acc__img} src={language ? Us : Ru} alt="" />
                    <h5 className={style.details__title}> {language ? 'English' : 'Русский'} </h5>
                    <img className={style.lang__arrow} src={langArrow} alt="reverse"/>
                  </div>
                  <div className={style.detail__item}>
                    <img className={style.acc__img} src={isDarkMode ? Moon : Sun} alt="" />
                    <h5 className={style.details__title}> {isDarkMode ? 'Dark Mode' : 'Light Mode'} </h5>
                    <label className={style.switch}>
                      <input onClick={toggleDarkMode} type="checkbox" />
                      <span className={`${style.slider} ${style.round}`}></span>
                    </label>
                  </div>
                  <div className={style.detail__item}>
                    <img className={style.acc__img} src={settings} alt="" />
                    <h5 className={style.details__title}>Settings</h5>
                  </div>
                  <div className={style.line}>
                  </div>
                  <div className={style.detail__item}>
                    <img className={style.acc__img} src={logout} alt="" />
                    <h5 className={style.details__title}>Logout</h5>
                  </div>
                </div>  
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MainNavbar