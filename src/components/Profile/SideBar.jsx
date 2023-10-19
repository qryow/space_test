import React from 'react'
import style from './styles/ProfileStyles.module.css'
import { Link, useLocation } from 'react-router-dom'

import profileActive from '../../img/profile/profile.svg'
import massangerActive from '../../img/profile/messageActive.svg'
import savedActive from '../../img/profile/archiveActive.svg'
import notifyActive from '../../img/profile/notifyActive.svg'
import settingsActive from '../../img/profile/settingsActive.svg'
import profile from '../../img/account-details.svg'
import massenger from '../../img/profile/message.svg'
import saved from '../../img/profile/archive.svg'
import notification from '../../img/profile/notification.svg'
import settings from '../../img/profile/Settings.svg'
import locationIcon from '../../img/profile/Location.svg'
import mail from '../../img/profile/Mail.svg'

const SideBar = () => {
  const location = useLocation();

  return (
    <div className={style.sidebar__wrapper}>
      <div className={style.side__nav}>
        <div className={style.nav__block}>
          <div className={`${style.nav__item} ${location.pathname === '/profile' ? style.active : ''}`}>
            <img className={style.nav__icon} src={`${location.pathname === '/profile' ? profileActive : profile}`} alt="" />
            <h4 className={`${style.nav__title} ${location.pathname === '/profile' ? style.active__text : ''}`}>My profile</h4>
          </div>
          <div className={`${style.nav__item} ${location.pathname === '/massenger' ? style.active : ''}`}>
            <img className={style.nav__icon} src={`${location.pathname === '/massenger' ? massangerActive : massenger}`} alt="" />
            <h4 className={`${style.nav__title} ${location.pathname === '/massenger' ? style.active__text : ''}`}>Messages</h4>
          </div>
          <div className={`${style.nav__item} ${location.pathname === '/saved' ? style.active : ''}`}>
            <img className={style.nav__icon} src={`${location.pathname === '/saved' ? savedActive : saved}`} alt="" />
            <h4 className={`${style.nav__title} ${location.pathname === '/saved' ? style.active__text : ''}`}>Saved</h4>
          </div>
          <div className={`${style.nav__item} ${location.pathname === '/notification' ? style.active : ''}`}>
            <img className={style.nav__icon} src={`${location.pathname === '/notification' ? notifyActive : notification}`} alt="" />
            <h4 className={`${style.nav__title} ${location.pathname === '/notification' ? style.active__text : ''}`}>Notification</h4>
          </div>
          <div className={`${style.nav__item} ${location.pathname === '/settings' ? style.active : ''}`}>
            <img className={style.nav__icon} src={`${location.pathname === '/settings' ? notifyActive : notification}`} alt="" />
            <h4 className={`${style.nav__title} ${location.pathname === '/settings' ? style.active__text : ''}`}>Settings</h4>
          </div>
        </div>
      </div>

      <div className={style.info}>
        <div className={style.info__block}>
          <div className={style.info__item}>
            <img className={style.info__icon} src={locationIcon} alt="" />
            <h5 className={style.info__title}>Bishkek, Kyrgyzstan</h5>
          </div>
          <div className={style.info__item}>
            <img className={style.info__icon2} src={mail} alt="" />
            <h5 className={style.info__title}>usergmail.com</h5>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default SideBar